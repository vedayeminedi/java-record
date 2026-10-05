window.RECORD=window.RECORD||{};
const M='public static void main(String[] args) {';
RECORD[3]=[
{t:'Hello, Java!',q:'Display "Hello, Java!" and show the basic structure of a Java program.',code:`public class Hello {
    ${M}
        System.out.println("Hello, Java!");
    }
}`,out:'Hello, Java!'},
{t:'Primitive Data Types',q:'Declare byte, short, int, long, float, double, char and boolean variables and display them.',code:`public class DataTypes {
    ${M}
        byte b = 100; short s = 20000; int i = 100000; long l = 9876543210L;
        float f = 5.75f; double d = 19.99; char c = 'J'; boolean flag = true;
        System.out.println("byte: " + b);
        System.out.println("short: " + s);
        System.out.println("int: " + i);
        System.out.println("long: " + l);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
        System.out.println("char: " + c);
        System.out.println("boolean: " + flag);
    }
}`,out:'byte: 100\nshort: 20000\nint: 100000\nlong: 9876543210\nfloat: 5.75\ndouble: 19.99\nchar: J\nboolean: true'},
{t:'Arithmetic on Integers',q:'Perform +, -, *, / and % on two integers.',code:`public class IntOps {
    ${M}
        int a = 20, b = 6;
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));
    }
}`,out:'Addition: 26\nSubtraction: 14\nMultiplication: 120\nDivision: 3\nModulus: 2'},
{t:'Arithmetic on Floating-Point Numbers',q:'Perform arithmetic operations on floating-point numbers.',code:`public class FloatOps {
    ${M}
        double a = 7.5, b = 2.5;
        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division: " + (a / b));
        System.out.println("Modulus: " + (a % b));
    }
}`,out:'Addition: 10.0\nSubtraction: 5.0\nMultiplication: 18.75\nDivision: 3.0\nModulus: 0.0'},
{t:'Character Data Type',q:'Display a character and its ASCII/Unicode value.',code:`public class CharDemo {
    ${M}
        char ch = 'A';
        System.out.println("Character: " + ch);
        System.out.println("Unicode value: " + (int) ch);
    }
}`,out:'Character: A\nUnicode value: 65'},
{t:'Boolean Expressions',q:'Demonstrate boolean variables and relational operators.',code:`public class BooleanDemo {
    ${M}
        int x = 10, y = 20;
        boolean isTrue = true;
        System.out.println("isTrue: " + isTrue);
        System.out.println("x > y: " + (x > y));
        System.out.println("x < y: " + (x < y));
        System.out.println("x == y: " + (x == y));
        System.out.println("x != y: " + (x != y));
        System.out.println("x >= 10: " + (x >= 10));
    }
}`,out:'isTrue: true\nx > y: false\nx < y: true\nx == y: false\nx != y: true\nx >= 10: true'},
{t:'Variables of Different Types',q:'Declare and initialize different types of variables and display their values.',code:`public class Variables {
    ${M}
        int age = 19;
        double cgpa = 8.7;
        char section = 'B';
        String name = "Vedavathi";
        boolean passed = true;
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("CGPA: " + cgpa);
        System.out.println("Section: " + section);
        System.out.println("Passed: " + passed);
    }
}`,out:'Name: Vedavathi\nAge: 19\nCGPA: 8.7\nSection: B\nPassed: true'},
{t:'Swapping Two Variables',q:'Swap two variables using a temporary variable.',code:`public class Swap {
    ${M}
        int a = 10, b = 25, temp;
        System.out.println("Before: a = " + a + ", b = " + b);
        temp = a; a = b; b = temp;
        System.out.println("After: a = " + a + ", b = " + b);
    }
}`,out:'Before: a = 10, b = 25\nAfter: a = 25, b = 10'},
{t:'Widening Type Conversion',q:'Demonstrate widening (implicit) type conversion.',code:`public class Widening {
    ${M}
        int i = 100;
        long l = i;
        float f = l;
        double d = f;
        System.out.println("int: " + i);
        System.out.println("long: " + l);
        System.out.println("float: " + f);
        System.out.println("double: " + d);
    }
}`,out:'int: 100\nlong: 100\nfloat: 100.0\ndouble: 100.0'},
{t:'Narrowing Type Casting',q:'Demonstrate narrowing (explicit) type casting.',code:`public class Narrowing {
    ${M}
        double d = 9.78;
        float f = (float) d;
        long l = (long) d;
        int i = (int) d;
        byte b = (byte) 300;
        System.out.println("double: " + d);
        System.out.println("float: " + f);
        System.out.println("long: " + l);
        System.out.println("int: " + i);
        System.out.println("byte (300): " + b);
    }
}`,out:'double: 9.78\nfloat: 9.78\nlong: 9\nint: 9\nbyte (300): 44'},
{t:'Character and ASCII Conversion',q:'Convert between characters and ASCII values.',code:`public class CharAscii {
    ${M}
        char ch = 'a';
        int ascii = ch;
        char next = (char) (ascii + 1);
        System.out.println("Character: " + ch);
        System.out.println("ASCII: " + ascii);
        System.out.println("Character of 66: " + (char) 66);
        System.out.println("Next character: " + next);
    }
}`,out:'Character: a\nASCII: 97\nCharacter of 66: B\nNext character: b'},
{t:'Even or Odd',q:'Check whether a number is even or odd.',code:`public class EvenOdd {
    ${M}
        int n = 17;
        if (n % 2 == 0)
            System.out.println(n + " is Even");
        else
            System.out.println(n + " is Odd");
    }
}`,out:'17 is Odd'},
{t:'Largest of Two Numbers',q:'Find the largest of two numbers.',code:`public class Largest {
    ${M}
        int a = 45, b = 72;
        if (a > b)
            System.out.println(a + " is larger");
        else
            System.out.println(b + " is larger");
    }
}`,out:'72 is larger'},
{t:'Reserved Keywords',q:'Demonstrate Java reserved keywords.',code:`public class Keywords {
    ${M}
        // Reserved words used here: public, class, static, void,
        // int, if, else, for, return, new, final, boolean, true
        final int MAX = 3;
        boolean ok = true;
        for (int i = 1; i <= MAX; i++) {
            if (ok) System.out.println("Keyword demo " + i);
            else return;
        }
        // Other keywords: abstract, break, case, catch, char, continue,
        // default, do, double, extends, finally, float, implements,
        // import, interface, long, package, private, protected,
        // super, switch, this, throw, throws, try, while
    }
}`,out:'Keyword demo 1\nKeyword demo 2\nKeyword demo 3'},
{t:'For Loop: Numbers 1 to 10',q:'Print the numbers 1 to 10 using a for loop.',code:`public class ForLoop {
    ${M}
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
    }
}`,out:'1\n2\n3\n4\n5\n6\n7\n8\n9\n10'}];
