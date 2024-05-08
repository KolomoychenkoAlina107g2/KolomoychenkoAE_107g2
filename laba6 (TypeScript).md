Задание 1 (Избавиться от unknown, описать актуальный интерфейс:)
![image](https://raw.githubusercontent.com/KolomoychenkoAlina107g2/-/main/foto2/1.png)
Итог:
![image](https://raw.githubusercontent.com/KolomoychenkoAlina107g2/-/main/foto2/11.png)

Задание 2 (Даны несколько заготовленных типов. При помощи них "собран" тип Student. Соберите типы Teacher и Director из имеющихся типов. Для проверки используйте переменные в самом низу. Можно определять новые типы.)
```
type User2 = {
    id: string;
    name: string;
}

type Course = {
    id: number;
    title: string;
}

type WithRate = {
    rate: 1 | 2 | 3 | 4 | 5;
}

type WithStudentRole = {
    role: "student"
}

type WithTeacherRole = {
    role: "teacher"
}

type WithLevel = {
    level: "junior" | "middle" | "senior"
}
/* --- */

type StudentCourse = Course & WithStudentRole & WithRate & WithLevel;
type Student = User2 & { courses: { [id: number]: StudentCourse } };

type TeacherCourse = Course & WithTeacherRole;
type TeacherCoursesDictionary = { [id: number]: TeacherCourse };

type Teacher = User2 & WithLevel & { courses: TeacherCoursesDictionary };

type StudentDictionary = { [id: string]: User2 };
type TeacherWithRate = Teacher & WithRate;
type TeacherDictionary = { [id: string]: TeacherWithRate };

type Director = User2 & { students: StudentDictionary; teachers: TeacherDictionary };

/*--  Проверка  --*/
const s1: Student = {
    id: "s1",
    name: "s1",
    courses: {
        [1]: {
            id: 1,
            title: "First",
            rate: 5,
            role: "student",
            level: "middle"
        }
    },
}

const t1: Teacher = {
    id: "t1",
    name: "t1",
    level: "junior",
    courses: {
        [5]: {
            id: 5,
            title: "Fifth",
            role: "teacher"
        },
        [1]: {
            ...s1.courses[1],
            role: "teacher"
        }
    }
}

const d1: Director = {
    id: "d1",
    name: "d1",
    students: {
        ["s1"]: s1,
        ["s2"]: {
            id: "s2",
            name: "s2"
        }
    },
    teachers: {
        ["t1"]: {
            ...t1,
            rate: 3,
        },
        ["t2"]: {
            ...t1, // Я не знаю, опечатка это или нет, но в лабе этой строки не было, поэтому писало мне ошибку
            id: "t2",
            name: "t2",
            level: "senior",
            rate: 5/*,
            courses: {} // Если строка выше и правда не должна быть, тогда нужно прописать эту строку*/
        }
    }
}
```

Задание 3 (Использя generic-параметры, типизируйте функции, чтобы не было ошибок компиляции. Возможно, потребуется дописать типы в теле функции)
![Image](https://raw.githubusercontent.com/KolomoychenkoAlina107g2/-/main/foto2/3.png)
Вывод:
![Image](https://raw.githubusercontent.com/KolomoychenkoAlina107g2/-/main/foto2/33.png)

Задание 4 (Соберите типы Teacher и Director из имеющихся типов, используя Partial, Pick, Omit, Exclude и при необходимости другие Utility Types.)

```
function zip<T, U>(first: T[], second: U[]): Array<[T, U]> {
    const minLength = Math.min(first.length, second.length);
    const result: Array<[T, U]> = [];
    for (let i = 0; i < minLength; i++) {
        result.push([first[i], second[i]]);
    }
    return result;
}

const q1: Array<[number, string]> = zip<number, string>([1, 2, 3, 4, 5, 6], ["1", "2", "3"]);
const q2: Array<[boolean, boolean]> = zip<boolean, boolean>([true], [false, false]);
console.log(q1, q2);

function groupBy<T, K, V>(source: T[], keySelector: (item: T, index: number) => K, valueSelector: (item: T, index: number) => V):
 Map<K, V[]> {
    const result = new Map<K, V[]>();
    for (let i = 0; i < source.length; i++) {
        const item = source[i];
        const key = keySelector(item, i);
        const value = valueSelector(item, i);
        if (!result.has(key)) {
            result.set(key, []);
        }
        result.get(key)!.push(value);
    }

    return result;
}

const q3: Map<number, number[]> = groupBy<number, number, number>([1, 2, 3, 4], x => x % 2, x => x + 1);
const q4: Map<boolean, {x: string, i: number}[]> = groupBy<string, boolean, {x: string, i: number}>(["aaa", "bbb", "cc", "q", "pupupu"],
 (_, i) => i % 2 === 0, (x, i) => ({i, x}));
console.log(q3, q4);
```