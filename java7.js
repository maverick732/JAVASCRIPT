const generatePassword = (num) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < num; i++) {
    let randomNum = Math.floor(Math.random() * characters.length);
    password += characters[randomNum];
  }
  return password;
};
/*how to use it: 
let password = generatePassword(5);
console.log(`Generated password: ${password}`);
*/
