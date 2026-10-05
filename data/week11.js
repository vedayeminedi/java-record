window.RECORD=window.RECORD||{};
(()=>{const M='public static void main(String[] args) throws Exception {';
RECORD[11]=[
{t:'Keyboard Input with Reader and Writer',q:'Read characters from the keyboard with Reader and display them using Writer.',code:`import java.io.*;

public class ReaderWriter {
    ${M}
        Reader r = new InputStreamReader(System.in);
        Writer w = new OutputStreamWriter(System.out);
        System.out.print("Enter text: ");
        int c;
        StringBuilder sb = new StringBuilder();
        while ((c = r.read()) != '\\n') sb.append((char) c);
        w.write("You typed: " + sb.toString().trim() + "\\n");
        w.flush();
    }
}`,out:'Enter text: Hello Java\nYou typed: Hello Java'},
{t:'Reading a Text File with FileReader',q:'Read and display a text file using FileReader (notes.txt contains "Java is fun").',code:`import java.io.*;

public class ReadFile {
    ${M}
        FileReader fr = new FileReader("notes.txt");
        int c;
        System.out.print("File contents: ");
        while ((c = fr.read()) != -1) System.out.print((char) c);
        fr.close();
        System.out.println();
    }
}`,out:'File contents: Java is fun'},
{t:'Writing Text with FileWriter',q:'Write text into a file using FileWriter.',code:`import java.io.*;

public class WriteFile {
    ${M}
        FileWriter fw = new FileWriter("output.txt");
        fw.write("Welcome to Java File Handling");
        fw.close();
        System.out.println("Text written to file successfully");
    }
}`,out:'Text written to file successfully'},
{t:'Copying Text with FileReader and FileWriter',q:'Copy one text file to another using character streams (source.txt contains "Character stream copy").',code:`import java.io.*;

public class CopyText {
    ${M}
        FileReader fr = new FileReader("source.txt");
        FileWriter fw = new FileWriter("dest.txt");
        int c, count = 0;
        while ((c = fr.read()) != -1) {
            fw.write(c);
            count++;
        }
        fr.close();
        fw.close();
        System.out.println("File copied: " + count + " characters");
    }
}`,out:'File copied: 21 characters'},
{t:'Counting Characters, Words, and Lines',q:'Count characters, words and lines in a text file (data.txt has two lines: "Java is fun" and "Streams are useful").',code:`import java.io.*;

public class CountFile {
    ${M}
        FileReader fr = new FileReader("data.txt");
        int c, chars = 0, words = 0, lines = 1;
        boolean inWord = false;
        while ((c = fr.read()) != -1) {
            chars++;
            if (c == '\\n') lines++;
            if (Character.isWhitespace(c)) inWord = false;
            else if (!inWord) { inWord = true; words++; }
        }
        fr.close();
        System.out.println("Characters: " + chars);
        System.out.println("Words: " + words);
        System.out.println("Lines: " + lines);
    }
}`,out:'Characters: 30\nWords: 6\nLines: 2'},
{t:'Inspecting the Main Thread',q:'Display the main thread\'s name, priority and state.',code:`public class MainThreadInfo {
    public static void main(String[] args) {
        Thread t = Thread.currentThread();
        System.out.println("Name: " + t.getName());
        System.out.println("Priority: " + t.getPriority());
        System.out.println("State: " + t.getState());
    }
}`,out:'Name: main\nPriority: 5\nState: RUNNABLE'},
{t:'Creating a Thread by Extending Thread',q:'Create and start a thread by extending the Thread class.',code:`class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running: " + getName());
    }
}
public class ExtendThread {
    ${M}
        MyThread t = new MyThread();
        t.start();
        t.join();
        System.out.println("Main finished");
    }
}`,out:'Thread running: Thread-0\nMain finished'},
{t:'Creating a Thread with Runnable',q:'Create and start a thread by implementing Runnable.',code:`class MyTask implements Runnable {
    public void run() {
        System.out.println("Thread running: " + Thread.currentThread().getName());
    }
}
public class RunnableDemo {
    ${M}
        Thread t = new Thread(new MyTask(), "Worker");
        t.start();
        t.join();
        System.out.println("Main finished");
    }
}`,out:'Thread running: Worker\nMain finished'},
{t:'Running Multiple Threads Concurrently',q:'Create multiple threads and show their concurrent execution (order may vary between runs).',code:`class Counter extends Thread {
    Counter(String name) { super(name); }
    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(getName() + " : " + i);
            try { Thread.sleep(100); } catch (InterruptedException e) { }
        }
    }
}
public class MultiThread {
    public static void main(String[] args) {
        new Counter("Thread-A").start();
        new Counter("Thread-B").start();
        new Counter("Thread-C").start();
    }
}`,out:'Thread-A : 1\nThread-B : 1\nThread-C : 1\nThread-A : 2\nThread-B : 2\nThread-C : 2\nThread-A : 3\nThread-B : 3\nThread-C : 3'},
{t:'Checking a Thread with isAlive()',q:'Use isAlive() to check whether a thread is running.',code:`public class AliveDemo {
    ${M}
        Thread t = new Thread(() -> {
            try { Thread.sleep(500); } catch (InterruptedException e) { }
        });
        System.out.println("Before start: " + t.isAlive());
        t.start();
        System.out.println("After start: " + t.isAlive());
        t.join();
        System.out.println("After completion: " + t.isAlive());
    }
}`,out:'Before start: false\nAfter start: true\nAfter completion: false'},
{t:'Waiting for a Thread with join()',q:'Use join() to make one thread wait until another completes.',code:`public class JoinDemo {
    ${M}
        Thread child = new Thread(() -> {
            System.out.println("Child thread working...");
            try { Thread.sleep(500); } catch (InterruptedException e) { }
            System.out.println("Child thread done");
        });
        child.start();
        child.join();
        System.out.println("Main thread resumes after join");
    }
}`,out:'Child thread working...\nChild thread done\nMain thread resumes after join'},
{t:'Controlling Threads with isAlive() and join()',q:'Use isAlive() and join() on multiple threads to ensure they finish before continuing.',code:`public class AliveJoin {
    ${M}
        Runnable task = () -> {
            try { Thread.sleep(300); } catch (InterruptedException e) { }
        };
        Thread t1 = new Thread(task), t2 = new Thread(task);
        t1.start(); t2.start();
        System.out.println("T1 alive: " + t1.isAlive());
        System.out.println("T2 alive: " + t2.isAlive());
        t1.join(); t2.join();
        System.out.println("T1 alive: " + t1.isAlive());
        System.out.println("T2 alive: " + t2.isAlive());
        System.out.println("All threads finished");
    }
}`,out:'T1 alive: true\nT2 alive: true\nT1 alive: false\nT2 alive: false\nAll threads finished'}];})();
