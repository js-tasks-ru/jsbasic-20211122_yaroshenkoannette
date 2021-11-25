function factorial(n) {
  "use strict";
  let rezOfMultiplication = 1;
    while (n > 1){
      rezOfMultiplication = rezOfMultiplication * n;
        n--;
    }

    return rezOfMultiplication;
}
