// js_code_mu_176-195

// 176 Работа с текстареа в JavaScript

// Задача 176.1
// Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
// let elem = document.querySelector("#elem");
// console.log(elem.value); // выведет 'text'

// Атрибут disabled в JavaScript
// атрибут disabled, используемый для блокировки элементов.

// Задача 177.1
// Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
// let elem = document.querySelector("#elem");
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", func);
// function func() {
//   elem.disabled = true;
// }

// Задача 177.2
// Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
// let elem = document.querySelector("#elem");
// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");
// btn1.addEventListener("click", func1);
// function func1() {
//   elem.disabled = true;
// }
// btn2.addEventListener("click", func2);
// function func2() {
//   elem.disabled = false;
// }

// Задача 177.3
// Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.
// let elem = document.querySelector("#elem");
// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", func1);
// function func1() {
//   console.log(elem.disabled);
// }

// Работа с чекбоксами в JavaScript

// Задача 178.1
// Дан чекбокс и две кнопки. По нажатию на первую кнопку установите
// чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
// let elem = document.querySelector("#elem");
// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");
// btn1.addEventListener("click", func1);
// function func1() {
//   console.log((elem.checked = true));
// }
// btn2.addEventListener("click", func2);
// function func2() {
//   console.log((elem.checked = false));
// }

// Задача 178.2
// Дан чекбокс, кнопка и абзац. По нажатию на кнопку, если чекбокс отмечен,
// выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.
// let elem = document.querySelector("#elem");
// let btn = document.querySelector("#btn");
// let checkb = document.querySelector("#checkb");
// btn.addEventListener("click", func);
// function func() {
//   if (checkb.checked === true) {
//     elem.innerHTML = "Привет";
//   } else {
//     elem.innerHTML = "Пока";
//   }
// }

// Чередование атрибутов без значений

// Задача 179.2
// Дан чекбокс и кнопка. Сделайте так, чтобы каждый
// клик по кнопке приводил к смене состояния чекбокса.
// let elem = document.querySelector("#elem");
// let button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   elem.disabled = !elem.disabled;
//   console.log(elem.disabled);
// });

// Работа с радиокнопками в JavaScript

// Задача 180.1
// Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector("#button");
// button.addEventListener("click", function () {
//   for (let radio of radios) {
//     if (radio.checked) {
//       console.log(radio.value);
//     }
//   }
// });

// Событие change в JavaScript

// Задача 181.1
// Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
// let elem = document.querySelector("#elem");
// elem.addEventListener("change", function () {
//   console.log(this.value);
// });

// Задача 181.2
// Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
// let elem = document.querySelector("#elem");
// elem.addEventListener("change", function () {
//   console.log(this.value);
// });

// Задача 181.4
// Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет.
//  Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный.
// let elem = document.querySelector("#elem");
// elem.addEventListener("change", function () {
//   if (elem.value.length < 5) {
//     elem.style.border = "1px solid green";
//   } else {
//     elem.style.border = "1px solid red";
//   }
// });

// Событие input в JavaScript
// Оно возникает каждый раз при вводе нового символа в инпут или textarea.

// Задача 182.1
// Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
// let elem = document.querySelector("#elem");
// elem.addEventListener("input", function () {
//   if (this.value.length === 5) {
//     console.log(this.value);
//     alert("5 symbols");
//   }
// });

// Методы focus и blur в JavaScript

// Работа с выпадающими списками в JavaScript

// Изменение выбранного пункта списка на JavaScript

// Получение пунктов выпадающего списка на JavaScript

// // Работа с пунктами выпадающего списка на JavaScript
// В этом случае в свойстве text будет хранится текст оптиона, в свойстве value - значение одноименного атрибута,
// а в свойстве selected - значение true или false в зависимости от того, выбранный пункт списка или нет:
// console.log(option.text);
// console.log(option.value);
// console.log(option.selected);

// Выбор пункта списка
// В предыдущих уроках мы обращались к тегу select, получая или меняя выбранный пункт списка.
// Это на самом деле не обязательно. Ведь можно взять и непосредственно какому-нибудь
// тегу option установить свойство selected в значении true.
// К примеру, сделаем выбранным пункт списка с номером два:
// let select = document.querySelector('#select');
// let option = select[2];
// option.selected = true;

// Получение выбранного оптиона
// Используя все изученное, можно получить выбранный тег option следующим образом:
// let select = document.querySelector('#select');
// console.log(select[select.selectedIndex]);
