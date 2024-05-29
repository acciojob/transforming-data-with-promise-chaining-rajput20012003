document.getElementById("btn").addEventListener("click", function () {
  const inputNumber = parseInt(document.getElementById("ip").value);

  if (isNaN(inputNumber)) {
    document.getElementById("output").textContent = "Please enter a valid number.";
    return;
  }

  // First Promise
  const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputNumber);
    }, 2000);
  });

  // Chain of Promises
  firstPromise
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result);
        }, 2000);
      });
    })
    .then((result) => {
      const newResult = result * 2;
      document.getElementById("output").textContent = `Result: ${newResult}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(newResult);
        }, 1000);
      });
    })
    .then((result) => {
      const newResult = result - 3;
      document.getElementById("output").textContent = `Result: ${newResult}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(newResult);
        }, 1000);
      });
    })
    .then((result) => {
      const newResult = result / 2;
      document.getElementById("output").textContent = `Result: ${newResult}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(newResult);
        }, 1000);
      });
    })
    .then((result) => {
      const newResult = result + 10;
      document.getElementById("output").textContent = `Result: ${newResult}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(newResult);
        }, 1000);
      });
    })
    .then((finalResult) => {
      // Update the output div with the final result
      document.getElementById("output").textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
