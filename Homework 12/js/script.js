// 1 уровень сложности: Уровень 1

// Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка “Hello world”

// let button = document.createElement('button')
// button.innerText = 'Click';
// document.body.append(button);

// button.addEventListener('click', getText);
//     function getText(){
//         console.log('Hello world');
//     }

// Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе значение увеличивалось на 1.
// В начале рассмотрите процесс, при котором мы каждый раз считываем число из параграфа, меняем и записываем обратно.

// let button = document.createElement('button')
// button.innerText = 'Click';
// document.body.append(button);

// let paragraph = document.createElement('p');
// paragraph.innerText = '100';
// document.body.append(paragraph);

// button.addEventListener("click", plusNum);
// function plusNum(){
// paragraph.innerText = Number(paragraph.innerText) + 1;
// }

// //или

// let paragraph_num = Number(paragraph.innerText);
// function plusNum() {
//   paragraph.innerText = ++paragraph_num;
// }

// Создать квадратный div с рамкой и при наведении курсора на него цвет div-а поменять на введённый пользователем цвет , а при покидании поменять обратно на белый (все шаги  сделать с помощью JS).

// let div = document.createElement("div");
// div.style.border = "2px solid blue";
// div.style.width = "200px";
// div.style.height = "200px";
// document.body.append(div);

// div.addEventListener('mouseover', changeColor);
// function changeColor(){
//     div.style.background = prompt('Enter your color');
// }

// div.addEventListener('mouseout', goBack);
// function goBack(){
//     div.style.background = 'white';
// }

// Задание1: Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на первую выводится в консоль “минус”, а при нажатии на вторую ‘плюс’.
// Задание2: Доработать процесс таким образом, чтобы при нажатии на плюс в консоль выводилось число, увеличившись на 1, а при нажатии на минус уменьшившись на 1. Для решения этой задачи понадобится создать переменную и изменять ее при нажатии на ту или иную кнопку.
// Задание3: Попробовать так же изменить значение параграфа

//1

// let button1 = document.createElement("button");
// button1.innerText = 'Click me "Minus"';
// document.body.append(button1);

// let button2 = document.createElement("button");
// button2.innerText = 'Click me "Plus"';
// document.body.append(button2);

// button1.addEventListener("click", getMinus);
// function getMinus() {
//   console.log("Minus");
// }

// button2.addEventListener("click", getPlus);
// function getPlus() {
//   console.log("Plus");
// }

//2

// let num = 100;
// console.log(num);

// button1.addEventListener("click", getMinus);
// function getMinus() {
//   console.log(--num);
// }

// button2.addEventListener("click", getPlus);
// function getPlus() {
//   console.log(++num);
// }

//3

// let paragraph = document.createElement('p')
// paragraph.innerText = '100';
// document.body.append(paragraph);

// button1.addEventListener("click", getMinus);
// function getMinus() {
//   paragraph.innerText = Number(paragraph.innerText) - 1;
// }

// button2.addEventListener("click", getPlus);
// function getPlus() {
//     paragraph.innerText = Number(paragraph.innerText) + 1;
// }

//или

// let paragraph_num = Number(paragraph.innerText);

// button1.addEventListener("click", getMinus);
// function getMinus() {
//   paragraph.innerText = --paragraph_num;
// }

// button2.addEventListener("click", getPlus);
// function getPlus() {
//     paragraph.innerText = ++paragraph_num;
// }
