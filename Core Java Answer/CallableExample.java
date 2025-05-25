import java.util.concurrent.*;

public class CallableExample {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        Callable<String> task = () -> "Task completed!";
        Future<String> result = executor.submit(task);
        System.out.println(result.get());
        executor.shutdown();
    }
}
