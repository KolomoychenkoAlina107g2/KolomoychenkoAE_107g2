function palindrom(str) {
    const reversed_str = str.toLowerCase().replace(/[^а-яa-z0-9]/g, '').split('').reverse().join('');
    return str.toLowerCase().replace(/[^а-яa-z0-9]/g, '') === reversed_str;
 }
 
 console.log(palindrom("Не гни папин ген")); // true
 console.log(palindrom("123")); // false

 //Написать функцию, которая проверяет, является ли строка палиндромом