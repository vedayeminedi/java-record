// WEEK 12 — Multithreaded Programming and Lambda Expressions
// Format: window.RECORD[12] = [{t, q, code, out}, ...]
(function () {
  const programs = [
    {
      t: "Thread Priorities — MIN, NORM and MAX",
      q: "Create multiple threads and demonstrate thread priorities using MIN_PRIORITY, NORM_PRIORITY and MAX_PRIORITY.",
      code: "class PriorityThread extends Thread {\n    PriorityThread(String name) { super(name); }\n\n    public void run() {\n        System.out.println(getName() + \" running with priority \" + getPriority());\n    }\n}\n\npublic class ThreadPriorityDemo {\n    public static void main(String[] args) throws InterruptedException {\n        PriorityThread low = new PriorityThread(\"Low-Thread\");\n        PriorityThread normal = new PriorityThread(\"Normal-Thread\");\n        PriorityThread high = new PriorityThread(\"High-Thread\");\n\n        low.setPriority(Thread.MIN_PRIORITY);\n        normal.setPriority(Thread.NORM_PRIORITY);\n        high.setPriority(Thread.MAX_PRIORITY);\n\n        System.out.println(\"MIN_PRIORITY  = \" + Thread.MIN_PRIORITY);\n        System.out.println(\"NORM_PRIORITY = \" + Thread.NORM_PRIORITY);\n        System.out.println(\"MAX_PRIORITY  = \" + Thread.MAX_PRIORITY);\n        System.out.println();\n\n        low.start();\n        Thread.sleep(50);\n        normal.start();\n        Thread.sleep(50);\n        high.start();\n\n        low.join();\n        normal.join();\n        high.join();\n        System.out.println(\"All threads completed.\");\n    }\n}",
      out: "MIN_PRIORITY  = 1\nNORM_PRIORITY = 5\nMAX_PRIORITY  = 10\n\nLow-Thread running with priority 1\nNormal-Thread running with priority 5\nHigh-Thread running with priority 10\nAll threads completed."
    },
    {
      t: "Three Threads with Different Priorities",
      q: "Create three threads with different priorities and observe their execution order.",
      code: "class Worker extends Thread {\n    Worker(String name, int priority) {\n        super(name);\n        setPriority(priority);\n    }\n\n    public void run() {\n        for (int i = 1; i <= 3; i++) {\n            System.out.println(getName() + \" (priority \" + getPriority() + \") - step \" + i);\n        }\n    }\n}\n\npublic class ThreePriorityThreads {\n    public static void main(String[] args) throws InterruptedException {\n        Worker t1 = new Worker(\"Thread-1\", 2);\n        Worker t2 = new Worker(\"Thread-2\", 5);\n        Worker t3 = new Worker(\"Thread-3\", 9);\n\n        t1.start();\n        Thread.sleep(50);\n        t2.start();\n        Thread.sleep(50);\n        t3.start();\n\n        t1.join();\n        t2.join();\n        t3.join();\n        System.out.println(\"Execution finished.\");\n    }\n}",
      out: "Thread-1 (priority 2) - step 1\nThread-1 (priority 2) - step 2\nThread-1 (priority 2) - step 3\nThread-2 (priority 5) - step 1\nThread-2 (priority 5) - step 2\nThread-2 (priority 5) - step 3\nThread-3 (priority 9) - step 1\nThread-3 (priority 9) - step 2\nThread-3 (priority 9) - step 3\nExecution finished."
    },
    {
      t: "Synchronized Method — Shared Counter",
      q: "Demonstrate synchronization using a synchronized method for accessing a shared counter.",
      code: "class Counter {\n    private int count = 0;\n\n    public synchronized void increment() {\n        count++;\n    }\n\n    public int getCount() {\n        return count;\n    }\n}\n\npublic class SyncMethodDemo {\n    public static void main(String[] args) throws InterruptedException {\n        Counter counter = new Counter();\n\n        Runnable task = () -> {\n            for (int i = 0; i < 1000; i++) {\n                counter.increment();\n            }\n        };\n\n        Thread t1 = new Thread(task);\n        Thread t2 = new Thread(task);\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(\"Expected count : 2000\");\n        System.out.println(\"Final count    : \" + counter.getCount());\n    }\n}",
      out: "Expected count : 2000\nFinal count    : 2000"
    },
    {
      t: "Synchronized Block",
      q: "Demonstrate synchronization using a synchronized block.",
      code: "class SharedCounter {\n    private int count = 0;\n\n    public void increment() {\n        synchronized (this) {\n            count++;\n        }\n    }\n\n    public int getCount() {\n        return count;\n    }\n}\n\npublic class SyncBlockDemo {\n    public static void main(String[] args) throws InterruptedException {\n        SharedCounter counter = new SharedCounter();\n\n        Thread t1 = new Thread(() -> {\n            for (int i = 0; i < 1000; i++) counter.increment();\n        });\n        Thread t2 = new Thread(() -> {\n            for (int i = 0; i < 1000; i++) counter.increment();\n        });\n\n        t1.start();\n        t2.start();\n        t1.join();\n        t2.join();\n\n        System.out.println(\"Expected count : 2000\");\n        System.out.println(\"Final count    : \" + counter.getCount());\n    }\n}",
      out: "Expected count : 2000\nFinal count    : 2000"
    },
    {
      t: "Race Condition and Its Fix",
      q: "Demonstrate a race condition and eliminate it using synchronization.",
      code: "class UnsafeCounter {\n    int count = 0;\n\n    void increment() {\n        count++;\n    }\n}\n\nclass SafeCounter {\n    int count = 0;\n\n    synchronized void increment() {\n        count++;\n    }\n}\n\npublic class RaceConditionDemo {\n    static final int LOOPS = 200000;\n\n    public static void main(String[] args) throws InterruptedException {\n        UnsafeCounter unsafe = new UnsafeCounter();\n        SafeCounter safe = new SafeCounter();\n\n        Runnable unsafeTask = () -> {\n            for (int i = 0; i < LOOPS; i++) unsafe.increment();\n        };\n        Runnable safeTask = () -> {\n            for (int i = 0; i < LOOPS; i++) safe.increment();\n        };\n\n        Thread a1 = new Thread(unsafeTask), a2 = new Thread(unsafeTask);\n        a1.start(); a2.start();\n        a1.join(); a2.join();\n\n        Thread b1 = new Thread(safeTask), b2 = new Thread(safeTask);\n        b1.start(); b2.start();\n        b1.join(); b2.join();\n\n        System.out.println(\"Expected value          : \" + (2 * LOOPS));\n        System.out.println(\"Without synchronization : \" + unsafe.count + \"  (race condition)\");\n        System.out.println(\"With synchronization    : \" + safe.count + \"  (correct)\");\n    }\n}",
      out: "Expected value          : 400000\nWithout synchronization : 315270  (race condition)\nWith synchronization    : 400000  (correct)"
    },
    {
      t: "Synchronized Ticket-Booking System",
      q: "Implement a synchronized ticket-booking system where multiple threads attempt to book tickets simultaneously.",
      code: "class TicketCounter {\n    private int availableTickets = 5;\n\n    public synchronized void bookTicket(String customer, int requested) {\n        if (requested <= availableTickets) {\n            System.out.println(customer + \" booked \" + requested + \" ticket(s).\");\n            availableTickets -= requested;\n            System.out.println(\"   Tickets left: \" + availableTickets);\n        } else {\n            System.out.println(customer + \" could not book \" + requested\n                    + \" ticket(s). Only \" + availableTickets + \" left.\");\n        }\n    }\n}\n\nclass Customer extends Thread {\n    private final TicketCounter counter;\n    private final int requested;\n\n    Customer(TicketCounter counter, String name, int requested) {\n        super(name);\n        this.counter = counter;\n        this.requested = requested;\n    }\n\n    public void run() {\n        counter.bookTicket(getName(), requested);\n    }\n}\n\npublic class TicketBooking {\n    public static void main(String[] args) throws InterruptedException {\n        TicketCounter counter = new TicketCounter();\n\n        Customer[] customers = {\n            new Customer(counter, \"Anil\", 2),\n            new Customer(counter, \"Bhavya\", 2),\n            new Customer(counter, \"Charan\", 2),\n            new Customer(counter, \"Divya\", 1)\n        };\n\n        for (Customer c : customers) {\n            c.start();\n            Thread.sleep(50);\n        }\n        for (Customer c : customers) {\n            c.join();\n        }\n        System.out.println(\"Booking closed.\");\n    }\n}",
      out: "Anil booked 2 ticket(s).\n   Tickets left: 3\nBhavya booked 2 ticket(s).\n   Tickets left: 1\nCharan could not book 2 ticket(s). Only 1 left.\nDivya booked 1 ticket(s).\n   Tickets left: 0\nBooking closed."
    },
    {
      t: "Lambda Calculator",
      q: "Introduce lambda expressions by implementing a functional interface for addition, subtraction, multiplication and division.",
      code: "@FunctionalInterface\ninterface Operation {\n    double apply(double a, double b);\n}\n\npublic class LambdaCalculator {\n    public static void main(String[] args) {\n        Operation add = (a, b) -> a + b;\n        Operation subtract = (a, b) -> a - b;\n        Operation multiply = (a, b) -> a * b;\n        Operation divide = (a, b) -> a / b;\n\n        double x = 20, y = 4;\n        System.out.println(\"Addition       : \" + add.apply(x, y));\n        System.out.println(\"Subtraction    : \" + subtract.apply(x, y));\n        System.out.println(\"Multiplication : \" + multiply.apply(x, y));\n        System.out.println(\"Division       : \" + divide.apply(x, y));\n    }\n}",
      out: "Addition       : 24.0\nSubtraction    : 16.0\nMultiplication : 80.0\nDivision       : 5.0"
    },
    {
      t: "Lambda with Single and Multiple Parameters",
      q: "Demonstrate a lambda expression with a single parameter and with multiple parameters.",
      code: "interface SingleParam {\n    int compute(int n);\n}\n\ninterface MultiParam {\n    int compute(int a, int b);\n}\n\npublic class LambdaParameters {\n    public static void main(String[] args) {\n        // Lambda with a single parameter\n        SingleParam square = n -> n * n;\n\n        // Lambda with multiple parameters\n        MultiParam sum = (a, b) -> a + b;\n        MultiParam product = (a, b) -> a * b;\n\n        System.out.println(\"Square of 7      : \" + square.compute(7));\n        System.out.println(\"Sum of 12 and 8  : \" + sum.compute(12, 8));\n        System.out.println(\"Product of 6 & 9 : \" + product.compute(6, 9));\n    }\n}",
      out: "Square of 7      : 49\nSum of 12 and 8  : 20\nProduct of 6 & 9 : 54"
    },
    {
      t: "Block Lambda with Multiple Statements",
      q: "Demonstrate a block lambda expression containing multiple statements.",
      code: "interface NumberTask {\n    long process(int n);\n}\n\npublic class BlockLambdaDemo {\n    public static void main(String[] args) {\n        NumberTask factorial = (n) -> {\n            long result = 1;\n            for (int i = 2; i <= n; i++) {\n                result *= i;\n            }\n            System.out.println(\"Calculating factorial of \" + n + \"...\");\n            return result;\n        };\n\n        NumberTask sumOfDigits = (n) -> {\n            long sum = 0;\n            int temp = n;\n            while (temp > 0) {\n                sum += temp % 10;\n                temp /= 10;\n            }\n            System.out.println(\"Adding digits of \" + n + \"...\");\n            return sum;\n        };\n\n        System.out.println(\"Factorial of 5   = \" + factorial.process(5));\n        System.out.println(\"Sum of digits    = \" + sumOfDigits.process(4821));\n    }\n}",
      out: "Calculating factorial of 5...\nFactorial of 5   = 120\nAdding digits of 4821...\nSum of digits    = 15"
    },
    {
      t: "Block Lambda — Largest of Two Numbers",
      q: "Use a block lambda expression to find the largest of two numbers and return the result.",
      code: "interface Largest {\n    int find(int a, int b);\n}\n\npublic class LargestOfTwo {\n    public static void main(String[] args) {\n        Largest largest = (a, b) -> {\n            if (a > b) {\n                return a;\n            } else {\n                return b;\n            }\n        };\n\n        int x = 45, y = 72;\n        System.out.println(\"First number  : \" + x);\n        System.out.println(\"Second number : \" + y);\n        System.out.println(\"Largest       : \" + largest.find(x, y));\n        System.out.println(\"Largest of 90 and 15 : \" + largest.find(90, 15));\n    }\n}",
      out: "First number  : 45\nSecond number : 72\nLargest       : 72\nLargest of 90 and 15 : 90"
    },
    {
      t: "Generic Functional Interface",
      q: "Create a generic functional interface and implement it using lambda expressions for different data types.",
      code: "@FunctionalInterface\ninterface Transformer<T> {\n    T transform(T value);\n}\n\npublic class GenericFunctional {\n    public static void main(String[] args) {\n        Transformer<Integer> square = n -> n * n;\n        Transformer<String> upper = s -> s.toUpperCase();\n        Transformer<Double> half = d -> d / 2;\n\n        System.out.println(\"Integer (square of 9)    : \" + square.transform(9));\n        System.out.println(\"String (uppercase)       : \" + upper.transform(\"java lambda\"));\n        System.out.println(\"Double (half of 15.5)    : \" + half.transform(15.5));\n    }\n}",
      out: "Integer (square of 9)    : 81\nString (uppercase)       : JAVA LAMBDA\nDouble (half of 15.5)    : 7.75"
    },
    {
      t: "Generic Functional Interface with Two Values",
      q: "Create a generic functional interface that accepts two values and performs an operation using a lambda expression.",
      code: "@FunctionalInterface\ninterface BinaryOperation<T> {\n    T operate(T a, T b);\n}\n\npublic class GenericTwoValues {\n    public static void main(String[] args) {\n        BinaryOperation<Integer> add = (a, b) -> a + b;\n        BinaryOperation<String> join = (a, b) -> a + \" \" + b;\n        BinaryOperation<Double> multiply = (a, b) -> a * b;\n        BinaryOperation<Integer> max = (a, b) -> a > b ? a : b;\n\n        System.out.println(\"Integer addition      : \" + add.operate(15, 25));\n        System.out.println(\"String concatenation  : \" + join.operate(\"Hello\", \"Lambda\"));\n        System.out.println(\"Double multiplication : \" + multiply.operate(2.5, 4.0));\n        System.out.println(\"Integer maximum       : \" + max.operate(33, 58));\n    }\n}",
      out: "Integer addition      : 40\nString concatenation  : Hello Lambda\nDouble multiplication : 10.0\nInteger maximum       : 58"
    },
    {
      t: "Lambda Expressions with ArrayList",
      q: "Use lambda expressions to display and filter elements of an ArrayList.",
      code: "import java.util.ArrayList;\nimport java.util.List;\nimport java.util.stream.Collectors;\n\npublic class ListLambdaDemo {\n    public static void main(String[] args) {\n        ArrayList<Integer> numbers = new ArrayList<>(List.of(5, 12, 8, 21, 14, 3, 30));\n\n        System.out.println(\"All elements:\");\n        numbers.forEach(n -> System.out.println(\"  \" + n));\n\n        List<Integer> even = numbers.stream()\n                .filter(n -> n % 2 == 0)\n                .collect(Collectors.toList());\n        System.out.println(\"Even numbers   : \" + even);\n\n        List<Integer> greater = numbers.stream()\n                .filter(n -> n > 10)\n                .collect(Collectors.toList());\n        System.out.println(\"Greater than 10: \" + greater);\n\n        numbers.removeIf(n -> n % 2 != 0);\n        System.out.println(\"After removing odd numbers: \" + numbers);\n    }\n}",
      out: "All elements:\n  5\n  12\n  8\n  21\n  14\n  3\n  30\nEven numbers   : [12, 8, 14, 30]\nGreater than 10: [12, 21, 14, 30]\nAfter removing odd numbers: [12, 8, 14, 30]"
    },
    {
      t: "Sorting with Lambda Expressions",
      q: "Sort a list of integers and strings using lambda expressions.",
      code: "import java.util.ArrayList;\nimport java.util.List;\n\npublic class SortLambdaDemo {\n    public static void main(String[] args) {\n        List<Integer> numbers = new ArrayList<>(List.of(42, 7, 19, 3, 88, 25));\n        List<String> names = new ArrayList<>(List.of(\"Mango\", \"Apple\", \"Fig\", \"Banana\", \"Cherry\"));\n\n        System.out.println(\"Original integers : \" + numbers);\n        numbers.sort((a, b) -> a - b);\n        System.out.println(\"Ascending         : \" + numbers);\n        numbers.sort((a, b) -> b - a);\n        System.out.println(\"Descending        : \" + numbers);\n\n        System.out.println();\n        System.out.println(\"Original strings  : \" + names);\n        names.sort((a, b) -> a.compareTo(b));\n        System.out.println(\"Alphabetical      : \" + names);\n        names.sort((a, b) -> a.length() - b.length());\n        System.out.println(\"By length         : \" + names);\n    }\n}",
      out: "Original integers : [42, 7, 19, 3, 88, 25]\nAscending         : [3, 7, 19, 25, 42, 88]\nDescending        : [88, 42, 25, 19, 7, 3]\n\nOriginal strings  : [Mango, Apple, Fig, Banana, Cherry]\nAlphabetical      : [Apple, Banana, Cherry, Fig, Mango]\nBy length         : [Fig, Apple, Mango, Banana, Cherry]"
    },
    {
      t: "Creating a Thread with a Lambda Expression",
      q: "Create and execute a thread using a lambda expression.",
      code: "public class LambdaThread {\n    public static void main(String[] args) throws InterruptedException {\n        Thread worker = new Thread(() -> {\n            for (int i = 1; i <= 3; i++) {\n                System.out.println(\"Lambda thread running - count \" + i);\n            }\n        }, \"Lambda-Worker\");\n\n        System.out.println(\"Starting thread: \" + worker.getName());\n        worker.start();\n        worker.join();\n        System.out.println(\"Lambda thread finished. Main thread exiting.\");\n    }\n}",
      out: "Starting thread: Lambda-Worker\nLambda thread running - count 1\nLambda thread running - count 2\nLambda thread running - count 3\nLambda thread finished. Main thread exiting."
    }
  ];

  window.RECORD = window.RECORD || {};
  window.RECORD[12] = programs;
})();
