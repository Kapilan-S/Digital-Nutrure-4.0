public class TransferMoney {
    public static void transfer(Connection con, int fromId, int toId, double amount) throws Exception {
        try {
            con.setAutoCommit(false);
            // Assume updateAccountBalance is a method that updates balances
            // updateAccountBalance(con, fromId, -amount);
            // updateAccountBalance(con, toId, amount);
            con.commit();
        } catch (Exception e) {
            con.rollback();
        }
    }
}
