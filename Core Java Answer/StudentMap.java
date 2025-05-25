import java.util.HashMap;

public class StudentMap {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();
        students.put(101, "Alice");
        students.put(102, "Bob");

        System.out.println("ID 101: " + students.get(101));
    }
}
