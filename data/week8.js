window.RECORD=window.RECORD||{};
(()=>{const M='public static void main(String[] args) {';
RECORD[8]=[
{t:'Single Inheritance',q:'Demonstrate single inheritance using a Person superclass and Student subclass.',code:`class Person {
    String name = "Anita";
    int age = 19;
}
class Student extends Person {
    int rollNo = 101;
    void show() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Roll No: " + rollNo);
    }
}
public class SingleInheritance {
    ${M}
        new Student().show();
    }
}`,out:'Name: Anita\nAge: 19\nRoll No: 101'},
{t:'Using super Keyword',q:'Use super to access superclass variables and methods.',code:`class Person {
    String type = "Person";
    void greet() { System.out.println("Hello from Person"); }
}
class Student extends Person {
    String type = "Student";
    void show() {
        System.out.println("Subclass type: " + type);
        System.out.println("Superclass type: " + super.type);
        super.greet();
    }
}
public class SuperUse {
    ${M}
        new Student().show();
    }
}`,out:'Subclass type: Student\nSuperclass type: Person\nHello from Person'},
{t:'Multilevel Inheritance',q:'Demonstrate multilevel inheritance using Person, Employee and Manager.',code:`class Person {
    String name = "Kiran";
}
class Employee extends Person {
    int empId = 501;
}
class Manager extends Employee {
    String dept = "Sales";
    void show() {
        System.out.println("Name: " + name);
        System.out.println("Emp ID: " + empId);
        System.out.println("Department: " + dept);
    }
}
public class Multilevel {
    ${M}
        new Manager().show();
    }
}`,out:'Name: Kiran\nEmp ID: 501\nDepartment: Sales'},
{t:'Method Overriding',q:'Demonstrate method overriding using Animal, Dog and Cat.',code:`class Animal {
    void sound() { System.out.println("Animal makes a sound"); }
}
class Dog extends Animal {
    void sound() { System.out.println("Dog barks"); }
}
class Cat extends Animal {
    void sound() { System.out.println("Cat meows"); }
}
public class Overriding {
    ${M}
        new Animal().sound();
        new Dog().sound();
        new Cat().sound();
    }
}`,out:'Animal makes a sound\nDog barks\nCat meows'},
{t:'Dynamic Method Dispatch',q:'Use a Shape reference with Circle, Rectangle and Triangle objects.',code:`class Shape {
    double area() { return 0; }
}
class Circle extends Shape {
    double area() { return 3.14 * 2 * 2; }
}
class Rectangle extends Shape {
    double area() { return 4 * 6; }
}
class Triangle extends Shape {
    double area() { return 0.5 * 6 * 4; }
}
public class Dispatch {
    ${M}
        Shape s;
        s = new Circle();    System.out.println("Area of Circle: " + s.area());
        s = new Rectangle(); System.out.println("Area of Rectangle: " + s.area());
        s = new Triangle();  System.out.println("Area of Triangle: " + s.area());
    }
}`,out:'Area of Circle: 12.56\nArea of Rectangle: 24.0\nArea of Triangle: 12.0'},
{t:'super with Method Overriding',q:'Call super.display() before displaying subclass details.',code:`class Person {
    void display() { System.out.println("Name: Anita"); }
}
class Student extends Person {
    void display() {
        super.display();
        System.out.println("Roll No: 101");
    }
}
public class SuperOverride {
    ${M}
        new Student().display();
    }
}`,out:'Name: Anita\nRoll No: 101'},
{t:'Multilevel Inheritance for Salary Calculation',q:'Calculate total salary using Employee, Developer and SeniorDeveloper.',code:`class Employee {
    double basic = 30000;
}
class Developer extends Employee {
    double allowance = 10000;
}
class SeniorDeveloper extends Developer {
    double bonus = 5000;
    double total() { return basic + allowance + bonus; }
}
public class Salary {
    ${M}
        SeniorDeveloper sd = new SeniorDeveloper();
        System.out.println("Basic: " + sd.basic);
        System.out.println("Allowance: " + sd.allowance);
        System.out.println("Bonus: " + sd.bonus);
        System.out.println("Total Salary: " + sd.total());
    }
}`,out:'Basic: 30000.0\nAllowance: 10000.0\nBonus: 5000.0\nTotal Salary: 45000.0'},
{t:'Dynamic Method Dispatch for Bank Accounts',q:'Use BankAccount, SavingsAccount and CurrentAccount with dynamic dispatch.',code:`class BankAccount {
    void type() { System.out.println("Generic Bank Account"); }
}
class SavingsAccount extends BankAccount {
    void type() { System.out.println("Savings Account: interest 4%"); }
}
class CurrentAccount extends BankAccount {
    void type() { System.out.println("Current Account: no interest"); }
}
public class BankDispatch {
    ${M}
        BankAccount[] accounts = { new BankAccount(), new SavingsAccount(), new CurrentAccount() };
        for (BankAccount a : accounts) a.type();
    }
}`,out:'Generic Bank Account\nSavings Account: interest 4%\nCurrent Account: no interest'},
{t:'Constructor Execution in Multilevel Inheritance',q:'Show the order of constructor execution.',code:`class A {
    A() { System.out.println("Constructor of A"); }
}
class B extends A {
    B() { System.out.println("Constructor of B"); }
}
class C extends B {
    C() { System.out.println("Constructor of C"); }
}
public class ConstructorOrder {
    ${M}
        new C();
    }
}`,out:'Constructor of A\nConstructor of B\nConstructor of C'},
{t:'Banking Application Using Inheritance',q:'Develop a simple banking application using inheritance.',code:`class Account {
    double balance;
    Account(double b) { balance = b; }
    void deposit(double amt) { balance += amt; System.out.println("Deposited: " + amt); }
    void withdraw(double amt) {
        if (amt > balance) System.out.println("Insufficient balance");
        else { balance -= amt; System.out.println("Withdrawn: " + amt); }
    }
}
class SavingsAccount extends Account {
    SavingsAccount(double b) { super(b); }
    void addInterest() { balance += balance * 0.05; System.out.println("Interest added (5%)"); }
}
public class BankingApp {
    ${M}
        SavingsAccount acc = new SavingsAccount(5000);
        System.out.println("Opening balance: " + acc.balance);
        acc.deposit(2000);
        acc.withdraw(1500);
        acc.withdraw(10000);
        acc.addInterest();
        System.out.println("Final balance: " + acc.balance);
    }
}`,out:'Opening balance: 5000.0\nDeposited: 2000.0\nWithdrawn: 1500.0\nInsufficient balance\nInterest added (5%)\nFinal balance: 5775.0'}];})();
