function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const name = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  if (name.length <= 2) {
    return name[0] + "*" + domain;
  }

  const firstChar = name[0];
  const lastChar = name[name.length - 1];
  const masked = "*".repeat(name.length - 2);

  return firstChar + masked + lastChar + domain;
}

// Declare email variable
let email = "apple.pie@example.com";

// Call the function and log result
console.log(maskEmail(email));