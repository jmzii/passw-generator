const generatePassword = (length, useNumber, useUppercase, useSymbol) => {
  let characters = "abcdefghijklmnopqrstuvwxyz";

  if (useNumber) {
    characters += "1234567890";
  }

  if (useUppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (useSymbol) {
    characters += "!@#$%^&*()";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
};

export default generatePassword;
