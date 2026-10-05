window.RECORD=window.RECORD||{};
(()=>{const M='public static void main(String[] args) {';
RECORD[10]=[
{t:'Handling Division by Zero',q:'Handle division by zero using try and catch.',code:`public class DivideByZero {
    ${M}
        try {
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
        System.out.println("Program continues");
    }
}`,out:'Error: / by zero\nProgram continues'},
{t:'Demonstrating Common Exceptions',q:'Demonstrate ArithmeticException, ArrayIndexOutOfBoundsException and NullPointerException.',code:`public class CommonExceptions {
    ${M}
        try { System.out.println(5 / 0); }
        catch (ArithmeticException e) { System.out.println("ArithmeticException: " + e.getMessage()); }
        try { int[] a = new int[3]; a[5] = 1; }
        catch (ArrayIndexOutOfBoundsException e) { System.out.println("ArrayIndexOutOfBoundsException: " + e.getMessage()); }
        try { String s = null; s.length(); }
        catch (NullPointerException e) { System.out.println("NullPointerException caught"); }
    }
}`,out:'ArithmeticException: / by zero\nArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3\nNullPointerException caught'},
{t:'Observing an Uncaught Exception',q:'Let an exception go uncaught and observe the JVM message and stack trace.',code:`public class Uncaught {
    ${M}
        int[] a = new int[3];
        System.out.println("Before exception");
        a[5] = 10;
        System.out.println("After exception");
    }
}`,out:'Before exception\nException in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 5 out of bounds for length 3\n\tat Uncaught.main(Uncaught.java:5)'},
{t:'Using Multiple Catch Clauses',q:'Handle different exceptions with separate catch clauses.',code:`public class MultiCatch {
    ${M}
        try {
            String s = "abc";
            int n = Integer.parseInt(s);
            System.out.println(10 / n);
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic error: " + e.getMessage());
        } catch (NumberFormatException e) {
            System.out.println("Number format error: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("General error");
        }
    }
}`,out:'Number format error: For input string: "abc"'},
{t:'Explicitly Throwing an Exception',q:'Use throw to generate an exception when a condition is violated.',code:`public class ThrowDemo {
    static void checkAge(int age) {
        if (age < 18)
            throw new ArithmeticException("Not eligible to vote");
        System.out.println("Eligible to vote");
    }
    ${M}
        try { checkAge(15); }
        catch (ArithmeticException e) { System.out.println("Caught: " + e.getMessage()); }
        checkAge(20);
    }
}`,out:'Caught: Not eligible to vote\nEligible to vote'},
{t:'Propagating an Exception with throws',q:'Use throws to propagate an exception to the calling method.',code:`public class ThrowsDemo {
    static void test() throws Exception {
        throw new Exception("Problem in test()");
    }
    ${M}
        try { test(); }
        catch (Exception e) { System.out.println("Caught in main: " + e.getMessage()); }
    }
}`,out:'Caught in main: Problem in test()'},
{t:'Creating a User-Defined Exception',q:'Create a checked exception by extending Exception and handle it.',code:`class InvalidAgeException extends Exception {
    InvalidAgeException(String msg) { super(msg); }
}
public class CustomException {
    static void validate(int age) throws InvalidAgeException {
        if (age < 18) throw new InvalidAgeException("Age must be 18 or above");
        System.out.println("Valid age: " + age);
    }
    ${M}
        try { validate(25); validate(12); }
        catch (InvalidAgeException e) { System.out.println("Caught: " + e.getMessage()); }
    }
}`,out:'Valid age: 25\nCaught: Age must be 18 or above'},
{t:'Validating Student Marks',q:'Validate marks from 0 to 100 and throw a custom exception for an invalid value.',code:`class InvalidMarksException extends Exception {
    InvalidMarksException(String msg) { super(msg); }
}
public class MarksValidation {
    static void check(int marks) throws InvalidMarksException {
        if (marks < 0 || marks > 100)
            throw new InvalidMarksException("Invalid marks: " + marks + " (must be 0-100)");
        System.out.println("Marks are valid: " + marks);
    }
    ${M}
        int[] data = {85, 105};
        for (int m : data) {
            try { check(m); }
            catch (InvalidMarksException e) { System.out.println("Caught: " + e.getMessage()); }
        }
    }
}`,out:'Marks are valid: 85\nCaught: Invalid marks: 105 (must be 0-100)'},
{t:'Combining Exception Handling Features',q:'Use try, multiple catch, throw, throws and finally in one application.',code:`public class Combined {
    static void check(int n) throws Exception {
        if (n < 0) throw new Exception("Negative number");
    }
    ${M}
        int[] values = {5, -1};
        for (int n : values) {
            try {
                check(n);
                System.out.println(n + " is valid");
                System.out.println(10 / (n - 5));
            } catch (ArithmeticException e) {
                System.out.println("Arithmetic error: " + e.getMessage());
            } catch (Exception e) {
                System.out.println("Exception: " + e.getMessage());
            } finally {
                System.out.println("Finally block executed");
            }
        }
    }
}`,out:'5 is valid\nArithmetic error: / by zero\nFinally block executed\nException: Negative number\nFinally block executed'},
{t:'Demonstrating the finally Block',q:'Show that finally executes after exception handling, even when an exception occurs.',code:`public class FinallyDemo {
    static void test(int d) {
        try {
            System.out.println("Result: " + (10 / d));
        } catch (ArithmeticException e) {
            System.out.println("Exception caught: " + e.getMessage());
        } finally {
            System.out.println("Finally executed");
        }
    }
    ${M}
        test(2);
        test(0);
    }
}`,out:'Result: 5\nFinally executed\nException caught: / by zero\nFinally executed'}];})();
