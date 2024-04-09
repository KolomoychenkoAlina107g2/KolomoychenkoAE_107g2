function intersect(arrA, arrB) {
    return arrA.filter(val => arrB.includes(val));
 }
 console.log(intersect([1, 2, 3, 4], [3, 4, 5, 6]));

 //Написать функцию intersect(arrA, arrB), принимающую на вход два массива и возвращающую пересечение значений этих массивов.