import Bank from "../src/bank"

// setup
const bank = new Bank();

// account creation scenario 1
const account = bank.createAccount("John Doe", 29, "2938298");
const account2 = bank.createAccount("John Doe", 29, "2938299");
if (account.accountNumber === "2938298") {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

// account creation scenario 2 - attempting to create a duplicate account. Test succeeds if an error is thrown
try {
    bank.createAccount("John Doe", 29, "2938298");
    console.log("Scenario 2 failed");
} catch (e) {    
    console.log("Scenario 2 passed");
}      

// login scenario 1 - user exists
try {
    bank.login("2938298");
    console.log("Scenario 3 passed");
}
catch (e) {
    console.log("Scenario 3 failed");
}

// login scenario 2 - user does not exist
try {
    bank.login("2938299");
    console.log("Scenario 4 failed");
}
catch (e) {
    console.log("Scenario 4 passed");
}

// deposit scenario 1 - user logged in
const account1 = bank.deposit("2938298", 100);
if (account1.balance === 100) {
    console.log("Scenario 5 passed");
} else {
    console.log("Scenario 5 failed");
}

// deposit scenario 2 - user with account not logged in
try {
    bank.deposit("2938299", 100);
    console.log("Scenario 6 failed");
} catch (e) {
    console.log("Scenario 6 passed");
}

// Check balance scenario 1 - user logged in
try {
    const balance = bank.checkBalance("2938298");
    console.log("Scenario 7 passed");
}
catch (e) {
    console.log("Scenario 7 failed");
}

// Check balance scenario 2 - user not logged in
try {
    const balance = bank.checkBalance("2938299");
    console.log("Scenario 8 failed");
}
catch (e) {
    console.log("Scenario 8 passed");
}

// Withdraw scenario 1 - successful withdrawal
const account12 = bank.withdraw("2938298", 50);
if (account12.balance === 50) {
    console.log("Scenario 9 passed");
}
else {
    console.log("Scenario 9 failed");
}

// Withdraw scenario 2 - user not logged in
try {
    bank.withdraw("2938299", 50);
    console.log("Scenario 10 failed");
}
catch (e) {
    console.log("Scenario 10 passed");
}

// Withdraw scenario 3 - insufficient balance
try {
    bank.withdraw("2938298", 100);
    console.log("Scenario 11 failed");
}
catch (e) {
    console.log("Scenario 11 passed");
}

