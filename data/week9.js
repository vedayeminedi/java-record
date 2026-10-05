window.RECORD=window.RECORD||{};
(()=>{const M='public static void main(String[] args) {';
const P=(t,q,code,out)=>({t,q,code,out});
RECORD[9]=[
P('Creating and Using a User-Defined Package','Create package mypackage with a Student class and use it from another program.',`// File: mypackage/Student.java
package mypackage;
public class Student {
    public void display() { System.out.println("Student ID: 101, Name: Anita"); }
}

// File: Main.java
import mypackage.Student;
public class Main {
    ${M}
        new Student().display();
    }
}
// javac -d . mypackage/Student.java  |  javac Main.java  |  java Main`,'Student ID: 101, Name: Anita'),
P('Importing Packages','Import Student and Faculty from package college using a specific import and a wildcard import.',`// File: college/Student.java
package college;
public class Student { public void show() { System.out.println("Student: Anita"); } }

// File: college/Faculty.java
package college;
public class Faculty { public void show() { System.out.println("Faculty: Dr. Rao"); } }

// File: ImportDemo.java
import college.Student;   // specific import
import college.*;         // wildcard import
public class ImportDemo {
    ${M}
        new Student().show();
        new Faculty().show();
    }
}`,'Student: Anita\nFaculty: Dr. Rao'),
P('Packages and Member Access','Show access of public, private, protected and default members from the same class, same package and a different package.',`// File: p1/A.java
package p1;
public class A {
    public int pub = 1; private int pri = 2; protected int pro = 3; int def = 4;
    public void show() {
        System.out.println("[Same class] public=" + pub + " private=" + pri + " protected=" + pro + " default=" + def);
    }
}
// File: p1/B.java
package p1;
public class B {
    public void test() {
        A a = new A();
        System.out.println("[Same package] public=" + a.pub + " protected=" + a.pro + " default=" + a.def);
    }
}
// File: p2/C.java
package p2;
import p1.A;
public class C {
    public static void main(String[] args) {
        A a = new A(); a.show(); new p1.B().test();
        System.out.println("[Different package] public=" + a.pub);
    }
}`,'[Same class] public=1 private=2 protected=3 default=4\n[Same package] public=1 protected=3 default=4\n[Different package] public=1'),
P('Demonstrate CLASSPATH','Use CLASSPATH to locate package utilities containing a Calculator class.',`// File: C:\\mylib\\utilities\\Calculator.java
package utilities;
public class Calculator {
    public int add(int a, int b) { return a + b; }
    public int mul(int a, int b) { return a * b; }
}

// File: CalcTest.java
import utilities.Calculator;
public class CalcTest {
    ${M}
        Calculator c = new Calculator();
        System.out.println("Sum: " + c.add(10, 20));
        System.out.println("Product: " + c.mul(10, 20));
    }
}
// set CLASSPATH=C:\\mylib;.
// javac CalcTest.java  |  java CalcTest`,'Sum: 30\nProduct: 200'),
P('Package Containing Multiple Classes','Package bank with Account, Customer and Transaction, used from a main class outside.',`// File: bank/Account.java
package bank;
public class Account { public int accNo = 1001; public double balance = 5000; }
// File: bank/Customer.java
package bank;
public class Customer { public String name = "Anita"; }
// File: bank/Transaction.java
package bank;
public class Transaction {
    public void deposit(Account a, double amt) {
        a.balance += amt;
        System.out.println("Deposited: " + amt);
    }
}
// File: BankMain.java
import bank.*;
public class BankMain {
    ${M}
        Customer c = new Customer(); Account a = new Account();
        System.out.println("Customer: " + c.name);
        System.out.println("Account No: " + a.accNo);
        new Transaction().deposit(a, 2000);
        System.out.println("Balance: " + a.balance);
    }
}`,'Customer: Anita\nAccount No: 1001\nDeposited: 2000.0\nBalance: 7000.0'),
P('Defining and Implementing an Interface','Interface Shape with area(), implemented by Circle and Rectangle.',`interface Shape { double area(); }
class Circle implements Shape {
    public double area() { return 3.14 * 2 * 2; }
}
class Rectangle implements Shape {
    public double area() { return 4 * 5; }
}
public class ShapeDemo {
    ${M}
        Shape s1 = new Circle(), s2 = new Rectangle();
        System.out.println("Circle area: " + s1.area());
        System.out.println("Rectangle area: " + s2.area());
    }
}`,'Circle area: 12.56\nRectangle area: 20.0'),
P('Implementing Multiple Interfaces','A Demo class implementing Printable and Showable.',`interface Printable { void print(); }
interface Showable { void show(); }
class Demo implements Printable, Showable {
    public void print() { System.out.println("Printing document"); }
    public void show() { System.out.println("Showing document"); }
}
public class MultiInterface {
    ${M}
        Demo d = new Demo();
        d.print();
        d.show();
    }
}`,'Printing document\nShowing document'),
P('Interface-Based Polymorphism','Assign Car and Bike objects to a Vehicle interface reference.',`interface Vehicle { void start(); }
class Car implements Vehicle {
    public void start() { System.out.println("Car starts with a key"); }
}
class Bike implements Vehicle {
    public void start() { System.out.println("Bike starts with a kick"); }
}
public class VehicleDemo {
    ${M}
        Vehicle v = new Car(); v.start();
        v = new Bike(); v.start();
    }
}`,'Car starts with a key\nBike starts with a kick'),
P('Variables in Interfaces','Interface Constants (MAX_MARKS, PI) accessed from an implementing class and via the interface name.',`interface Constants {
    int MAX_MARKS = 100;
    double PI = 3.14;
}
public class ConstDemo implements Constants {
    ${M}
        ConstDemo d = new ConstDemo();
        System.out.println("MAX_MARKS: " + d.MAX_MARKS);
        System.out.println("PI: " + d.PI);
        System.out.println("Direct access: " + Constants.MAX_MARKS);
    }
}`,'MAX_MARKS: 100\nPI: 3.14\nDirect access: 100'),
P('Nested Interfaces','Nested interface Department inside class University, implemented in another class.',`class University {
    interface Department { void showDept(); }
}
class CSE implements University.Department {
    public void showDept() { System.out.println("Department of CSE offering AI&ML"); }
}
public class NestedInterface {
    ${M}
        University.Department d = new CSE();
        d.showDept();
    }
}`,'Department of CSE offering AI&ML'),
P('Interface Inheritance','Interface Dog extends Animal; both methods implemented in Labrador.',`interface Animal { void eat(); }
interface Dog extends Animal { void bark(); }
class Labrador implements Dog {
    public void eat() { System.out.println("Labrador eats"); }
    public void bark() { System.out.println("Labrador barks"); }
}
public class InterfaceInherit {
    ${M}
        Labrador l = new Labrador();
        l.eat();
        l.bark();
    }
}`,'Labrador eats\nLabrador barks'),
P('Real-World Application Using Interfaces','Payment Processing System: interface Payment with pay(double), implemented by CreditCardPayment, UPIPayment and NetBankingPayment.',`import java.util.Scanner;
interface Payment { void pay(double amount); }
class CreditCardPayment implements Payment {
    public void pay(double a) { System.out.println("Paid Rs. " + a + " using Credit Card"); }
}
class UPIPayment implements Payment {
    public void pay(double a) { System.out.println("Paid Rs. " + a + " using UPI"); }
}
class NetBankingPayment implements Payment {
    public void pay(double a) { System.out.println("Paid Rs. " + a + " using Net Banking"); }
}
public class PaymentSystem {
    ${M}
        Scanner sc = new Scanner(System.in);
        System.out.println("Select payment method:\\n1. Credit Card\\n2. UPI\\n3. Net Banking");
        System.out.print("Enter choice: ");
        int ch = sc.nextInt();
        System.out.print("Enter amount: ");
        double amt = sc.nextDouble();
        Payment p;
        switch (ch) {
            case 1: p = new CreditCardPayment(); break;
            case 2: p = new UPIPayment(); break;
            case 3: p = new NetBankingPayment(); break;
            default: System.out.println("Invalid choice"); return;
        }
        p.pay(amt);
    }
}`,'Select payment method:\n1. Credit Card\n2. UPI\n3. Net Banking\nEnter choice: 2\nEnter amount: 1500\nPaid Rs. 1500.0 using UPI')];})();
