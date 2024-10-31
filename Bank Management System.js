function manageAccount(account, action, amount) {
     // Check if the account is active
     if (!account.active) {
         return "Account is inactive, no transactions allowed.";
     }
 
     // Check if the action is deposit or withdrawal
     if (action === "deposit") {
         account.balance += amount;
         return "Deposit successful, new balance: $" + account.balance;
     } else if (action === "withdraw") {
         // Check if the account has sufficient funds
         if (account.balance >= amount) {
             account.balance -= amount;
             return "Withdrawal successful, new balance: $" + account.balance;
         } else {
             return "Insufficient funds for withdrawal.";
         }
     } else {
         return "Invalid action, please choose 'deposit' or 'withdraw'.";
     }
 }
 
 let account = { active: true, balance: 100 };

 console.log(manageAccount(account, "deposit", 50));   // Deposit example
 console.log(manageAccount(account, "withdraw", 30));  // Withdrawal example
 console.log(manageAccount(account, "withdraw", 200)); // Insufficient funds example
 account.active = false;
 console.log(manageAccount(account, "deposit", 50));   // Inactive account example
 console.log(manageAccount(account, "transfer", 50));  // Invalid action example
 