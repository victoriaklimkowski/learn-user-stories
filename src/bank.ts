interface BankAccount {
    name: string;
    age: number;

}

export default class Bank {
    // Array to store all accounts in this buisness
    private accounts: BankAccount[] = [];

    /**
     * Method to create an account
     * @param name 
     * @param age 
     * @param { string } accountNumber Account number of the account to be created
     * @returns TBD
     */
    public createAccount(name: string, age: number, accountNumber: string) {
        const isAccExists = this.find(account ->account.accountNumber === accountNumber);
        if (isAccExists) {
            throw new Error("Account already exists");  
        }
        const account = {
            name,
            age,
            accountNumber
        };
        this.accounts.push(account);
        return account;
    }

        /**
     * Method to find an account
     * @param { string } accountNumber Account number of the account to be found
     * @returns TBD
     */
        private findAccount(accountNumber: string)  {
            return this.accounts.find(account => account.accountNumber === accountNumber);
        }   

}