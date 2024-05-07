const { promises } = require("fs");
const i = require("fs");

async function zad1() {
    let data;
    try {
        data = await promises.readFile("./text.txt", "utf8");
        console.log(data);
        const reversedData = data.split('').reverse().join('');
        await promises.writeFile("./text.txt", reversedData);
        console.log("");
    } catch(e) {
        console.error(`Ошибочка: ${e.message}`);
    }
}

zad1();