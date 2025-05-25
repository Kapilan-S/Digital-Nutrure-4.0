public class StudentDAO {
    public static void insertStudent(String name) throws Exception {
        Connection con = DriverManager.getConnection("jdbc:sqlite:sample.db");
        PreparedStatement ps = con.prepareStatement("INSERT INTO students(name) VALUES(?)");
        ps.setString(1, name);
        ps.executeUpdate();
        con.close();
    }
}
