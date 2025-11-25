function createBankAccount() {
  let balance = 0;           
  let transactionHistory = [];

  function deposit(amount) {
    balance += amount;
    console.log(`Deposited: ${amount}`);
    transactionHistory.push(`Deposited: ${amount}`);
  }
  
  function withdraw(amount) {
    if (balance >= amount) {
      balance -= amount;
      console.log(`Withdrawn: ${amount}`);
      transactionHistory.push(`Withdrawn: ${amount}`);
    } else {
      console.log("Insufficient Balance");
      transactionHistory.push(`Failed withdrawal: ${amount}`);
    }
  }

  function checkBalance() {
    console.log(`Current balance: ${balance}`);
    return balance;
  }

  function getHistory() {
    return transactionHistory;
  }

  return {
    deposit,
    withdraw,
    checkBalance,
    getHistory
  };
}
const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
account.checkBalance();

console.log(account.balance);