function delay(N) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, N * 1000);
    });
}

function countdown(N) {
    console.log(N);
    if (N > 0) {
        return delay(1).then(() => countdown(N - 1));
    }
}

// Пример использования для счётчика от N до 0
const startCount = 5; // Начальное значение для счётчика

countdown(startCount).then(() => {
    console.log('Пуск!');
});


//Решить задачу со счётчиком N, N-1 ... 2, 1, 0 через функцию delay.