
function counter(n) {
    let timer = setInterval(() => {
        if (n >= 0) {
            console.log(n);
            n--;
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

counter(5); 

//Написать функцию counter(n), которая выводит в консоль раз в секунду числа n, n-1 ... 2, 1, 0 и останавливается.