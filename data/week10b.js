(()=>{const M='public static void main(String[] args) throws IOException {';
RECORD[10].push(
{t:'Reading and Writing Bytes with Streams',q:'Use InputStream and OutputStream to read bytes from an input source and write them to an output destination.',code:`import java.io.*;

public class ByteStreams {
    ${M}
        InputStream in = new ByteArrayInputStream("Hello, Java!".getBytes());
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        int b, count = 0;
        while ((b = in.read()) != -1) {
            out.write(b);
            count++;
        }
        System.out.println("Bytes read and written: " + count);
        System.out.println("Copied data: " + out.toString());
    }
}`,out:'Bytes read and written: 12\nCopied data: Hello, Java!'},
{t:'Reading a File Byte by Byte',q:'Read a file with FileInputStream one byte at a time (sample.txt contains "Java Programming").',code:`import java.io.*;

public class ReadBytes {
    ${M}
        FileInputStream fis = new FileInputStream("sample.txt");
        int b;
        System.out.print("File contents: ");
        while ((b = fis.read()) != -1) {
            System.out.print((char) b);
        }
        fis.close();
        System.out.println();
    }
}`,out:'File contents: Java Programming'},
{t:'Writing Data with FileOutputStream',q:'Write data to a file with FileOutputStream and read it back.',code:`import java.io.*;

public class WriteBytes {
    ${M}
        FileOutputStream fos = new FileOutputStream("output.txt");
        fos.write("Writing with FileOutputStream".getBytes());
        fos.close();
        System.out.println("Data written to file.");
        FileInputStream fis = new FileInputStream("output.txt");
        int b;
        System.out.print("Data read back: ");
        while ((b = fis.read()) != -1) System.out.print((char) b);
        fis.close();
        System.out.println();
    }
}`,out:'Data written to file.\nData read back: Writing with FileOutputStream'},
{t:'Copying a File with Byte Streams',q:'Copy one file to another using FileInputStream and FileOutputStream (source.txt contains "Byte stream copy demo").',code:`import java.io.*;

public class CopyFile {
    ${M}
        FileInputStream in = new FileInputStream("source.txt");
        FileOutputStream out = new FileOutputStream("copy.txt");
        int b, count = 0;
        while ((b = in.read()) != -1) {
            out.write(b);
            count++;
        }
        in.close();
        out.close();
        System.out.println("File copied successfully");
        System.out.println("Bytes copied: " + count);
    }
}`,out:'File copied successfully\nBytes copied: 21'},
{t:'Copying an Image with Byte Streams',q:'Copy an image with byte streams, handle FileNotFoundException and IOException, and close streams in finally.',code:`import java.io.*;

public class CopyImage {
    public static void main(String[] args) {
        FileInputStream in = null;
        FileOutputStream out = null;
        try {
            in = new FileInputStream("photo.jpg");
            out = new FileOutputStream("photo_copy.jpg");
            int b;
            while ((b = in.read()) != -1) out.write(b);
            System.out.println("Image copied successfully");
        } catch (FileNotFoundException e) {
            System.out.println("File not found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("I/O error: " + e.getMessage());
        } finally {
            try {
                if (in != null) in.close();
                if (out != null) out.close();
                System.out.println("Streams closed");
            } catch (IOException e) {
                System.out.println("Error closing streams");
            }
        }
    }
}`,out:'Image copied successfully\nStreams closed'});})();
