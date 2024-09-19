interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
    loggedin: boolean;
}

/**
 * Bank class that manages all bank accounts in the bank
 */
export default class Bank {
    // Array to store all accounts in this buisness
    private accounts: BankAccount[] = [];

    /**
     * Method to find an account in the bank
     * @param { string } accountNumber Account number of the account to be found
     * @returns BankAccount object if found, otherwise undefined
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }  

    /**
     * Method to create an account, creates an account with a unique account number
     * @param name -- name of the customer
     * @param age  -- age of the customer
     * @param { string } accountNumber Account number of the customer
     * @returns BankAccount -- returns the created account
     * @throws Will throw an error if account already exists
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber);
        if (isAccExists) {
            throw new Error("Account already exists");  
        }
        const account: BankAccount = {
            name,
            age,
            accountNumber, 
            balance: 0,
            loggedin: false
        };
        this.accounts.push(account);
        return account;
    } 

    /**
     * Method to login to an account
     * @param { string } accountNumber Account number of the account to login
     * @returns BankAccount -- returns the logged in account
     * @throws Will throw an error if account is not found
     */
    public login(accountNumber: string): BankAccount {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        account.loggedin = true;
        return account;
    }

    /**
     * Method to deposit money into an account
     * @param { string } accountNumber Account number of the account to deposit money into
     * @param { number } amount Amount to deposit
     * @returns BankAccount -- returns the updated account
     * @throws Will throw an error if no user is logged in.
     */
    public deposit(accountNumber: string, amount: number): BankAccount {
        const account = this.findAccount(accountNumber);
        if (!account || !account.loggedin) {
            throw new Error("No user logged in");
        }
        account.balance += amount;
        console.log(`Deposit of ${amount} was successful for account number ${accountNumber}.`);
        return account;
    }

    /**
     * Method to check the balance of an account
     * @param { string } accountNumber Account number of the account to check balance
     * @returns { number } balance -- returns the current account balance
     * @throws Will throw an error if no user is logged in.
     */
    public checkBalance(accountNumber: string): number {
        const account = this.findAccount(accountNumber);
        if (!account || !account.loggedin) {
            throw new Error("No user logged in");
        }
        console.log(`Balance of account number ${accountNumber} is ${account.balance}.`);
        return account.balance;
    }

    /**
     * Method to withdraw money from an account
     * @param { string } accountNumber Account number of the account to withdraw money from
     * @param { number } amount Amount to withdraw
     * @returns BankAccount -- returns the updated account
     * @throws Will throw an error if no user is logged in.
     */
    public withdraw(accountNumber: string, amount: number): BankAccount {
        const account = this.findAccount(accountNumber);
        if (!account || !account.loggedin) {
            throw new Error("No user logged in");
        }
        if (account.balance < amount) {
            throw new Error("Insufficient balance: " + account.balance);
        }
        account.balance -= amount;
        console.log(`Withdrawal of ${amount} was successful for account number ${accountNumber}.`);
        return account;
    }
}