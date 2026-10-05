window.RECORD=window.RECORD||{};
(()=>{const M='public static void main(String[] args) {';
const P=(t,q,code,out)=>({t,q,code,out});
RECORD[6]=[
P('Student Information System','Create a Student Information System using classes, objects, instance variables and methods.',`class Student {
    int id = 101; String name = "Anita"; String course = "AI&ML";
    void display() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Course: " + course);
    }
}
public class StudentSystem {
    ${M}
        new Student().display();
    }
}`,'ID: 101\nName: Anita\nCourse: AI&ML'),
P('Employee Information System','Create an Employee Information System using a class, object, variables and methods.',`class Employee {
    int id = 201; String name = "Ravi"; double salary = 45000;
    void display() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}
public class EmployeeSystem {
    ${M}
        new Employee().display();
    }
}`,'ID: 201, Name: Ravi, Salary: 45000.0'),
P('Book Details — Multiple Objects','Create three Book objects and display their book ID, title and author.',`class Book {
    int id; String title, author;
    Book(int i, String t, String a) { id = i; title = t; author = a; }
    void show() { System.out.println(id + " | " + title + " | " + author); }
}
public class BookDetails {
    ${M}
        new Book(1, "Java: The Complete Reference", "Herbert Schildt").show();
        new Book(2, "Head First Java", "Kathy Sierra").show();
        new Book(3, "Effective Java", "Joshua Bloch").show();
    }
}`,'1 | Java: The Complete Reference | Herbert Schildt\n2 | Head First Java | Kathy Sierra\n3 | Effective Java | Joshua Bloch'),
P('Array of Student Objects','Create an array of five Student objects, accept their details and display them.',`import java.util.Scanner;
class Student { int id; String name; }
public class StudentArray {
    ${M}
        Scanner sc = new Scanner(System.in);
        Student[] s = new Student[5];
        for (int i = 0; i < 5; i++) {
            s[i] = new Student();
            System.out.print("Enter id and name of student " + (i + 1) + ": ");
            s[i].id = sc.nextInt(); s[i].name = sc.next();
        }
        System.out.println("--- Student Details ---");
        for (Student st : s) System.out.println(st.id + " " + st.name);
    }
}`,'Enter id and name of student 1: 1 Anita\nEnter id and name of student 2: 2 Ravi\nEnter id and name of student 3: 3 Kiran\nEnter id and name of student 4: 4 Sneha\nEnter id and name of student 5: 5 Manoj\n--- Student Details ---\n1 Anita\n2 Ravi\n3 Kiran\n4 Sneha\n5 Manoj'),
P('Reference Assignment','Assign one object reference variable to another.',`class Student { String name; }
public class RefAssign {
    ${M}
        Student s1 = new Student(); s1.name = "Anita";
        Student s2 = s1;
        s2.name = "Ravi";
        System.out.println("s1.name = " + s1.name);
        System.out.println("s2.name = " + s2.name);
    }
}`,'s1.name = Ravi\ns2.name = Ravi'),
P('Comparing Object References','Compare two object reference variables using ==.',`class Student { }
public class CompareRef {
    ${M}
        Student s1 = new Student();
        Student s2 = s1;
        Student s3 = new Student();
        System.out.println("s1 == s2: " + (s1 == s2));
        System.out.println("s1 == s3: " + (s1 == s3));
    }
}`,'s1 == s2: true\ns1 == s3: false'),
P('Calculator Using Methods','Create methods for addition, subtraction, multiplication and division.',`class Calculator {
    int add(int a, int b) { return a + b; }
    int sub(int a, int b) { return a - b; }
    int mul(int a, int b) { return a * b; }
    int div(int a, int b) { return a / b; }
}
public class CalcDemo {
    ${M}
        Calculator c = new Calculator();
        System.out.println("Add: " + c.add(20, 5));
        System.out.println("Sub: " + c.sub(20, 5));
        System.out.println("Mul: " + c.mul(20, 5));
        System.out.println("Div: " + c.div(20, 5));
    }
}`,'Add: 25\nSub: 15\nMul: 100\nDiv: 4'),
P('Rectangle Operations','Calculate area and perimeter of a rectangle using a constructor and methods.',`class Rectangle {
    int length, width;
    Rectangle(int l, int w) { length = l; width = w; }
    int area() { return length * width; }
    int perimeter() { return 2 * (length + width); }
}
public class RectDemo {
    ${M}
        Rectangle r = new Rectangle(10, 5);
        System.out.println("Area: " + r.area());
        System.out.println("Perimeter: " + r.perimeter());
    }
}`,'Area: 50\nPerimeter: 30'),
P('Student Constructors','Demonstrate default and parameterized constructors using Student objects.',`class Student {
    String name; int id;
    Student() { name = "Unknown"; id = 0; }
    Student(String n, int i) { name = n; id = i; }
    void show() { System.out.println(id + " " + name); }
}
public class StudentCons {
    ${M}
        new Student().show();
        new Student("Anita", 101).show();
    }
}`,'0 Unknown\n101 Anita'),
P('Constructor Overloading','Demonstrate constructor overloading with different parameter lists.',`class Box {
    int l, w, h;
    Box() { l = w = h = 1; }
    Box(int s) { l = w = h = s; }
    Box(int a, int b, int c) { l = a; w = b; h = c; }
    int volume() { return l * w * h; }
}
public class OverloadCons {
    ${M}
        System.out.println("Volume 1: " + new Box().volume());
        System.out.println("Volume 2: " + new Box(5).volume());
        System.out.println("Volume 3: " + new Box(2, 3, 4).volume());
    }
}`,'Volume 1: 1\nVolume 2: 125\nVolume 3: 24'),
P('Using this Keyword','Use this to refer to the current object\'s variables.',`class Student {
    int id; String name;
    Student(int id, String name) { this.id = id; this.name = name; }
    void show() { System.out.println("ID: " + this.id + ", Name: " + this.name); }
}
public class ThisDemo {
    ${M}
        new Student(101, "Anita").show();
    }
}`,'ID: 101, Name: Anita'),
P('Constructor Chaining','Demonstrate constructor chaining using this().',`class Student {
    String name; int age;
    Student() { this("Unknown"); System.out.println("Default constructor"); }
    Student(String n) { this(n, 18); System.out.println("One-argument constructor"); }
    Student(String n, int a) { name = n; age = a; System.out.println("Two-argument constructor"); }
}
public class Chaining {
    ${M}
        new Student();
    }
}`,'Two-argument constructor\nOne-argument constructor\nDefault constructor'),
P('Demonstrating Garbage Collection','Make an object eligible for garbage collection and request it with System.gc() (typical output).',`class Demo {
    protected void finalize() { System.out.println("Object garbage collected"); }
}
public class GCDemo {
    public static void main(String[] args) throws Exception {
        Demo d = new Demo();
        d = null;
        System.gc();
        System.out.println("Garbage collection requested");
        Thread.sleep(500);
    }
}`,'Garbage collection requested\nObject garbage collected'),
P('Object Eligibility for Garbage Collection','Show situations in which objects become eligible for garbage collection.',`class Obj { }
public class Eligibility {
    static void create() { Obj local = new Obj(); }
    ${M}
        Obj a = new Obj();
        a = null;
        System.out.println("1. Reference set to null: eligible");
        Obj b = new Obj();
        b = new Obj();
        System.out.println("2. Reference reassigned: first object eligible");
        new Obj();
        System.out.println("3. Anonymous object: eligible immediately");
        create();
        System.out.println("4. Object created inside method: eligible after it returns");
        System.gc();
    }
}`,'1. Reference set to null: eligible\n2. Reference reassigned: first object eligible\n3. Anonymous object: eligible immediately\n4. Object created inside method: eligible after it returns'),
P('Method Overloading','Overload methods with different parameter lists.',`class Add {
    int add(int a, int b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
    double add(double a, double b) { return a + b; }
}
public class OverloadMethods {
    ${M}
        Add o = new Add();
        System.out.println(o.add(10, 20));
        System.out.println(o.add(1, 2, 3));
        System.out.println(o.add(2.5, 3.5));
    }
}`,'30\n6\n6.0'),
P('Overloading Area Methods','Calculate area of a circle, rectangle and square using overloaded methods.',`class Area {
    double area(double r) { return 3.14 * r * r; }
    int area(int l, int w) { return l * w; }
    int area(int s) { return s * s; }
}
public class AreaOverload {
    ${M}
        Area a = new Area();
        System.out.println("Circle: " + a.area(2.0));
        System.out.println("Rectangle: " + a.area(5, 3));
        System.out.println("Square: " + a.area(4));
    }
}`,'Circle: 12.56\nRectangle: 15\nSquare: 16'),
P('Passing Student Object','Pass a Student object to a method and display its details.',`class Student {
    int id; String name;
    Student(int i, String n) { id = i; name = n; }
}
public class PassObject {
    static void show(Student s) { System.out.println("ID: " + s.id + ", Name: " + s.name); }
    ${M}
        show(new Student(101, "Anita"));
    }
}`,'ID: 101, Name: Anita'),
P('Comparing Employee Salaries','Compare salaries of two Employee objects and display the higher earner.',`class Employee {
    String name; double salary;
    Employee(String n, double s) { name = n; salary = s; }
}
public class CompareSalary {
    static void compare(Employee a, Employee b) {
        Employee h = a.salary > b.salary ? a : b;
        System.out.println(h.name + " has the higher salary: " + h.salary);
    }
    ${M}
        compare(new Employee("Ravi", 40000), new Employee("Kiran", 50000));
    }
}`,'Kiran has the higher salary: 50000.0'),
P('Returning a Student Object','Create a Student object inside a method and return it.',`class Student {
    int id; String name;
    Student(int i, String n) { id = i; name = n; }
}
public class ReturnObject {
    static Student create() { return new Student(102, "Ravi"); }
    ${M}
        Student s = create();
        System.out.println("ID: " + s.id + ", Name: " + s.name);
    }
}`,'ID: 102, Name: Ravi'),
P('Returning a Bank Account Object','Pass a BankAccount to a method, update its balance and return it.',`class BankAccount {
    double balance;
    BankAccount(double b) { balance = b; }
}
public class ReturnAccount {
    static BankAccount update(BankAccount a, double amt) { a.balance += amt; return a; }
    ${M}
        BankAccount acc = new BankAccount(5000);
        BankAccount r = update(acc, 2500);
        System.out.println("Updated balance: " + r.balance);
    }
}`,'Updated balance: 7500.0'),
P('Static Variable','Count the Student objects created using a static variable.',`class Student {
    static int count = 0;
    Student() { count++; }
}
public class StaticVar {
    ${M}
        new Student(); new Student(); new Student();
        System.out.println("Total students: " + Student.count);
    }
}`,'Total students: 3'),
P('Static Methods','Calculate square, cube and factorial using static methods.',`public class StaticMethods {
    static int square(int n) { return n * n; }
    static int cube(int n) { return n * n * n; }
    static int factorial(int n) { int f = 1; for (int i = 2; i <= n; i++) f *= i; return f; }
    ${M}
        System.out.println("Square of 5: " + square(5));
        System.out.println("Cube of 3: " + cube(3));
        System.out.println("Factorial of 5: " + factorial(5));
    }
}`,'Square of 5: 25\nCube of 3: 27\nFactorial of 5: 120'),
P('Final Keyword','Demonstrate final variables, final methods and final classes.',`final class Utility {
    void info() { System.out.println("Final class method called"); }
}
class Base {
    final double PI = 3.14;
    final void show() { System.out.println("Final method called"); }
}
public class FinalDemo {
    ${M}
        Base b = new Base();
        System.out.println("PI = " + b.PI);
        b.show();
        new Utility().info();
    }
}`,'PI = 3.14\nFinal method called\nFinal class method called'),
P('Blank Final Variable','Initialize a blank final variable through a constructor.',`class Student {
    final int id;
    Student(int id) { this.id = id; }
}
public class BlankFinal {
    ${M}
        System.out.println("ID: " + new Student(101).id);
    }
}`,'ID: 101'),
P('College and Department — Nested Class','Static nested Department class inside a College class.',`class College {
    static String name = "ABC College";
    static class Department {
        void show() { System.out.println("Department: AI&ML, College: " + name); }
    }
}
public class NestedDemo {
    ${M}
        College.Department d = new College.Department();
        d.show();
    }
}`,'Department: AI&ML, College: ABC College'),
P('Employee Address — Nested Class','Static nested Address class associated with an Employee.',`class Employee {
    String name = "Ravi";
    static class Address {
        String city = "Hyderabad"; int pin = 500001;
    }
}
public class EmpAddress {
    ${M}
        Employee e = new Employee();
        Employee.Address a = new Employee.Address();
        System.out.println(e.name + ", " + a.city + " - " + a.pin);
    }
}`,'Ravi, Hyderabad - 500001'),
P('Student Address — Inner Class','Non-static inner Address class inside StudentAddressInner.',`class StudentAddressInner {
    String name = "Anita";
    class Address {
        String city = "Chennai";
        void show() { System.out.println(name + " lives in " + city); }
    }
}
public class InnerDemo {
    ${M}
        StudentAddressInner s = new StudentAddressInner();
        StudentAddressInner.Address a = s.new Address();
        a.show();
    }
}`,'Anita lives in Chennai'),
P('Library Management — Inner Class','Inner Book class inside a LibraryBookInner class.',`class LibraryBookInner {
    String library = "Central Library";
    class Book {
        String title = "Effective Java";
        void show() { System.out.println(title + " is available in " + library); }
    }
}
public class LibraryDemo {
    ${M}
        LibraryBookInner lib = new LibraryBookInner();
        lib.new Book().show();
    }
}`,'Effective Java is available in Central Library')];})();
