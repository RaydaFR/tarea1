//Задание 1
{
const a=7.3;
const b=Math.ceil(a);       //округление числа a в большую сторону
const c=Math.floor(a);      //округление числа a  в меньшую сторону
const d=Math.round(a);      //округление числа a до ближайшего целого числа
console.log('Число a =',a);
console.log ('Округление числа a в большую сторону = ',b);
console.log('Округление числа a в меньшую сторону =',c); 
console.log('Округление числа a до ближайшего целого числа =',d)
}


//Задание 2
{
const a=Math.floor(Math.random() * 101);    //задаю случайное число 1
const b=Math.floor(Math.random() * 101);    //задаю случайное число 2
console.log(a,b);                           //вывод обоих случайных чисел
const max = Math.max(a,b);                    //поиск наибольшего значения из двух случайных чисел
console.log("Наибольшее значение =", max);
const c=Math.abs(a-b);                        //поиск разницы между двумя случайными числами, метод возвращает модуль числа!
console.log("Разница между двумя случайными числами =", c)
}


//Задание 3
{
const a=4;
const b=3;
const firstNumber=a+b;                 //метод расчета суммы чисел
const secondNumber=a*b; 
const thirdNumber=a/b; 
const forthNumber=Math.pow(a,2);                 //a^2
const fifthNimber=Math.sqrt(b);                  //корень числа b
console.log("Первое число = ",a);
console.log("Второе число = ",b);
console.log("Сумма чисел  = ",firstNumber);
console.log("Произведение чисел  = ",secondNumber);
console.log("Частное чисел  = ",thirdNumber);
console.log("Число a в степени 2  = ",forthNumber);
console.log("Корень числа b  = ",fifthNimber);
}

//Задание 4

{
const str = "Hello, JavaScript!";
console.log('Длина строки "Hello, JavaScript!"=',str.length)
const firstStr = str.toUpperCase(str);
const secondStr = str.toLowerCase(str);
console.log(str,"--->",firstStr, "   ", str,"--->",secondStr);
console.log(firstStr, secondStr);
const word = 'Java';
console.log(str.includes(word));  // Проверяет, содержится ли в строке слово "Java", результат в виде "Истина"/"Ложь"
console.log(str.slice(7,17));     //Извлекает слово "JavaScript" и выводит его
const stroka ="           Hello, JavaScript!                 ";   //удаление пробелов в начале и конце строки
console.log(stroka.trim())
}

//Задание 5

{
const currentDate = new Date();
const year = currentDate.getFullYear();
const month =currentDate.getMonth();
const dayOfMonth = currentDate.getDate();
const dayOfWeek = currentDate.getDay();
console.log(year, month, dayOfMonth, dayOfWeek);
currentDate.setFullYear(year + 1);
currentDate.setMonth(0);
console.log(currentDate)
}