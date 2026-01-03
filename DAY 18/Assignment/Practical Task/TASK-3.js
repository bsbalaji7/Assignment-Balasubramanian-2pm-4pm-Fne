let password;
let correctPassword = "admin123";
let attempts = 0;

do {
    attempts++;
    if (attempts === 3) {
        password = "admin123";
    }
} while (password !== correctPassword);

console.log("Login successful");
