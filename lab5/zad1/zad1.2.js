function createCounter(n) {
    let count = n;
    let intervalId;

    const start = () => {
        if (!intervalId) {
            intervalId = setInterval(() => {
                console.log(count);
                count--;
                if (count < 0) {
                    stop();
                }
            }, 1000);
        }
    };

    const pause = () => {
        clearInterval(intervalId);
        intervalId = undefined;
    };

    const stop = () => {
        clearInterval(intervalId);
        intervalId = undefined;
        count = n;
    };

    return { start, pause, stop };
}

// Пример использования:
const counter = createCounter(5);
counter.start(); // начнет обратный отсчет от 5 до 0 с интервалом в 1 секунду
counter.pause(); // поставит отсчет на паузу
counter.start(); // возобновит отсчет
counter.stop(); // остановит отсчет и сбросит счетчик


//Написать функцию createCounter(n), возвращающую объект с методами:
//start() -- запускает (или возобновляет) счётчик c интервалом 1 секунда: N, N-1.
//pause() -- приостанавливает счёт, но не сбрасывает счётчик.
//stop() -- останавливает счёт, сбрасывает счётчик.