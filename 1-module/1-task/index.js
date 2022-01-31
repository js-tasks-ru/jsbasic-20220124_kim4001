function factorial(n) {
    let result = 1;
    for (let i = n; i >= 1; i--) {
        result *= i;

    }
    return result;
}

// function factorial(n) {
//   let result = 1;

//   while (n) {
//       result *= n--;
//   }
//   return result;
// }
