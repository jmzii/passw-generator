const generatePassword = (length, useNumber, useUppercase, useSymbol) => {
  let characters = "abcdefghijklmnopqrstuvwxyz";
  let password = "";
  let numbers = "1234567890";
  let uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let symbols = "!@$%^&*";

  // fucntionality for the users requirements
  if (useNumber) {
    characters += numbers;
    password += numbers[Math.floor(Math.random() * 10)];
  }

  if (useUppercase) {
    characters += uppercaseCharacters;
    password += uppercaseCharacters[Math.floor(Math.random() * 26)];
  }

  if (useSymbol) {
    characters += symbols;
    password += symbols[Math.floor(Math.random() * 10)];
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
