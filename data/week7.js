window.RECORD=window.RECORD||{};
(()=>{const M='public static void main(String[] args) {';
RECORD[7]=[
{t:'String Constructors',q:'Create and initialize String objects using literals, new String(), character arrays and byte arrays.',code:`public class StringConstructors {
    ${M}
        String s1 = "Hello";
        String s2 = new String("Java");
        char[] chars = {'J', 'a', 'v', 'a'};
        String s3 = new String(chars);
        byte[] bytes = {72, 101, 108, 108, 111};
        String s4 = new String(bytes);
        String s5 = new String();
        System.out.println("Literal: " + s1);
        System.out.println("new String(): " + s2);
        System.out.println("Char array: " + s3);
        System.out.println("Byte array: " + s4);
        System.out.println("Empty string length: " + s5.length());
    }
}`,out:'Literal: Hello\nnew String(): Java\nChar array: Java\nByte array: Hello\nEmpty string length: 0'},
{t:'StringBuffer Class',q:'Demonstrate append, insert, replace, delete and reverse using StringBuffer.',code:`public class StringBufferDemo {
    ${M}
        StringBuffer sb = new StringBuffer("Hello");
        sb.append(" World");
        System.out.println("Append: " + sb);
        sb.insert(5, ",");
        System.out.println("Insert: " + sb);
        sb.replace(0, 5, "Hi");
        System.out.println("Replace: " + sb);
        sb.delete(2, 3);
        System.out.println("Delete: " + sb);
        sb.reverse();
        System.out.println("Reverse: " + sb);
    }
}`,out:'Append: Hello World\nInsert: Hello, World\nReplace: Hi, World\nDelete: Hi World\nReverse: dlroW iH'},
{t:'StringTokenizer Class',q:'Tokenize a sentence, display tokens, count them and repeat using a delimiter.',code:`import java.util.StringTokenizer;

public class TokenizerDemo {
    ${M}
        StringTokenizer st = new StringTokenizer("Java is fun to learn");
        System.out.println("Total tokens: " + st.countTokens());
        while (st.hasMoreTokens()) {
            System.out.println(st.nextToken());
        }
        StringTokenizer st2 = new StringTokenizer("apple,banana,cherry", ",");
        System.out.println("Tokens with delimiter ',': " + st2.countTokens());
        while (st2.hasMoreTokens()) {
            System.out.println(st2.nextToken());
        }
    }
}`,out:'Total tokens: 5\nJava\nis\nfun\nto\nlearn\nTokens with delimiter \',\': 3\napple\nbanana\ncherry'},
{t:'Basic Inheritance',q:'Create a child class that inherits methods from a parent class.',code:`class Animal {
    void eat() { System.out.println("Animal is eating"); }
}
class Dog extends Animal {
    void bark() { System.out.println("Dog is barking"); }
}
public class BasicInheritance {
    ${M}
        Dog d = new Dog();
        d.eat();
        d.bark();
    }
}`,out:'Animal is eating\nDog is barking'},
{t:'Using super Keyword',q:'Use super to access parent class variables and methods.',code:`class Parent {
    String name = "Parent";
    void display() { System.out.println("Parent display method"); }
}
class Child extends Parent {
    String name = "Child";
    void show() {
        System.out.println("Child variable: " + name);
        System.out.println("Parent variable: " + super.name);
        super.display();
    }
}
public class SuperDemo {
    ${M}
        new Child().show();
    }
}`,out:'Child variable: Child\nParent variable: Parent\nParent display method'}];})();
