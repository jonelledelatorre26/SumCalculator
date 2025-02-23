function addNumbers(a, b) {
  return a + b;
}

function promptUserForNumber(message) {
  let num;
  while (true) {
      num = prompt(message);
      
      if (num !== null && num.trim() !== "" && /^-?\d+(\.\d+)?$/.test(num)) {
          return parseFloat(num);
      }
      
      alert("<( •̀ᴖ•́)> Please enter a valid number!");
      console.error("⚠️ Invalid input! Please enter a valid number.");
  }
}

function promptUserForSum() {
  let num1 = promptUserForNumber("Enter the first number:");
  let num2 = promptUserForNumber("Enter the second number:");

  document.getElementById("num1").value = num1;
  document.getElementById("num2").value = num2;

  calculateSum();
}

function calculateSum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
      alert("<( •̀ᴖ•́)> Please enter valid numbers!");
      console.error("⚠️ Invalid input! Please enter valid numbers.");
      return;
  }

  let sum = addNumbers(num1, num2);
  
  document.getElementById("result").innerText = `٩(^ᗜ^ )و ´- The sum is: ${sum}`;
  
  console.log(`✅ The sum of ${num1} and ${num2} is: ${sum}`);
}

window.onload = promptUserForSum;
