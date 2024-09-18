import Bank from "../src/bank"

// setup
const dwb = new Bank();

// scenario 1
const account = dwb.createAccount("John Doe", 29, "2001001");
if (account.accountNumber === "2001001") {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}