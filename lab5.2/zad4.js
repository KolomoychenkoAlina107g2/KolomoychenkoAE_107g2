function anagram(str1, str2) {
    const Str1 = str1.toLowerCase().split('').sort().join('');
    const Str2 = str2.toLowerCase().split('').sort().join('');
    return Str1 === Str2;
 }
 
 console.log(anagram("Лунь", "нуль")); // true
 console.log(anagram("Лунь", "ноль")); // false

 //Написать функцию, которая проверяет, являются ли две строки анаграммой