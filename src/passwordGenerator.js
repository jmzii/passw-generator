const generatePassword = (length, useNumber, useUppercase, useSymbol) => {
  let characters = "abcdefghijklmnopqrstuvwxyz";
  let password = "";

  // fucntionality for the users requirements
  if (useNumber) {
    characters += "1234567890";
    password += "1234567890"[Math.floor(Math.random() * 10)];
  }

  if (useUppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    password += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 26)];
  }

  if (useSymbol) {
    characters += "!@#$%^&*()";
    password += "!@#$%^&*()"[Math.floor(Math.random() * 10)];
  }

  for (let i = password.length; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  // Shuffle the generated password
  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  return password;
};

export default generatePassword;
