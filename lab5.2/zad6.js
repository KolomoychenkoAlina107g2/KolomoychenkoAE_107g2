function Fibonacci() {
    let a = 0;
    let b = 1;
    console.log(a);
    console.log(b);
    setInterval(() => {
       const c = a + b;
       console.log(c);
       a = b;
       b = c;
    }, 1000);
 }
 Fibonacci();

 //Написать функцию, которая после вызова каждую секунду пишет в консоль очередное число Фибоначчи.