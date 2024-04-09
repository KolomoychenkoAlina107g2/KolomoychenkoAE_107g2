function delay(N) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, N * 1000);
    });
}

// Пример использования:
const delayTime = 5; // Задержка в 5 секунд

console.log('Начало выполнения');
delay(delayTime).then(() => {
    console.log(`Прошло ${delayTime} секунд`);
    console.log('Промис разрешен');
});

//Написать функцию delay(N), возвращающую промис, который сделает resolve() через N секунд.