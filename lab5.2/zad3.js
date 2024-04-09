const arr = [3, 5, 8, 13, 21, 42];
const Sum_SquareRoots = arr.filter(num => num % 2 === 0).reduce((acc, cur) => acc + Math.sqrt(cur), 0);
console.log("Сумма квадратных корней чётных чисел:", Sum_SquareRoots);

//Вычислить сумму квадратных корней для всех чётных чисел целочисленного массива