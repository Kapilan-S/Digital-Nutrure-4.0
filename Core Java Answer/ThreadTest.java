class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++)
            System.out.println(getName() + " running");
    }
}
public class ThreadTest {
    public static void main(String[] args) {
        new MyThread().start();
        new MyThread().start();
    }
}
