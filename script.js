//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function () {
  const inputNumber = parseInt(document.getElementById("ip").value);

  // First Promise
  const firstPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputNumber);
    }, 2000);
  });

  // Second Promise
  firstPromise
    .then((result) => {
      document.getElementById("output").textContent = `Result: ${result}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result);
        }, 2000);
      });
    })
    // Third Promise
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result * 2);
        }, 1000);
      });
    })
    // Fourth Promise
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result - 3);
        }, 1000);
      });
    })
    // Fifth Promise
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result / 2);
        }, 1000);
      });
    })
    // Sixth Promise
    .then((result) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(result + 10);
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

