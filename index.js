// js_code_mu_146-175

// 146 Основы работы с DOM в JavaScript

// Тег script необходимо вставлять после вашего HTML кода, иначе могут возникнуть проблемы.

// 147 DOM элементы в JavaScript

// Каждому тегу страницы в JavaScript соответствует некоторый объект со своими свойствами.
// В этом объекте хранится текст тега, значения его атрибутов, а также другие полезные вещи.
//  В JavaScript такие объекты называют DOM элементами.
//  Пусть в нашем HTML коде есть следующий тег:

// <div id="elem">text</div>
// Пусть в переменной elem лежит ссылка на этот тег. В этом случае переменная elem будет объектом со свойствами id и innerHTML.
//  Свойство id будет содержать значение атрибута id нашего тега, а свойство innerHTML - его текст.

// 148 Получение DOM элемента в JavaScript

// Задача 148.1
// Даны 3 абзаца:
// <p id="elem1">1</p>
// <p id="elem2">2</p>
// <p id="elem3">3</p>
// Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.
// let elem1 = document.querySelector("#elem1");
// let elem2 = document.querySelector("#elem2");
// let elem3 = document.querySelector("#elem3");
// console.log(elem1);
// console.log(elem2);
// console.log(elem3);

// Более сложные селекторы

// Задача 148.2
// Дан следующий HTML:
// <div id="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с id, равным block.

// let elem = document.querySelector("#block p");
// console.log(elem);

// Задача 148.3
// Дан следующий HTML:
// <div class="block">
// 	<p>1</p>
// 	<p>2</p>
// </div>
// Получите ссылку на первый абзац из дива с классом block.
// let elem = document.querySelector(".block p");
// console.log(elem);

// Задача 148.4

// Дан следующий HTML:
// <p class="www">text</p>
// <p class="www">text</p>
// Получите ссылку на первый абзац с классом www.

// let elem = document.querySelector(".www");
// console.log(elem);

// 149 Привязывание обработчиков событий к элементам

// Действия пользователя, которые мы можем отследить через JavaScript, называются событиями.
// метод addEventListener, первым параметром принимающий название события (клик на кнопку имеет название click),
// а вторым параметром - функцию-коллбэк, выполняющуюся при возникновении этого события.

// Задача 149.1
// Даны 3 кнопки:
// <input id="button1" type="submit">
// <input id="button2" type="submit">
// <input id="button3" type="submit">
// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.

// let button1 = document.querySelector("#button1");
// let button2 = document.querySelector("#button2");
// let button3 = document.querySelector("#button3");

// button1.addEventListener("click", function () {
//   alert(1);
// });
// button2.addEventListener("click", function () {
//   alert(2);
// });
// button3.addEventListener("click", function () {
//   alert(3);
// });

// 150 Другие типы событий в JavaScript

// Кроме клика по элементу, существуют и другие события. Например, с помощью события dblclick можно отловить
// двойной клик по элементу, с помощью события mouseover - наведение курсора на элемент, а с помощью события
//  mouseout - уход курсора с элемента.

//  Задача 150.1
// Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение.

// button1.addEventListener("dblclick", function () {
//   alert(1);
// });

// Задача 150.2
// Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение.
// button1.addEventListener("mouseover", function () {
//   alert(1);
// });

// Задача 150.3
// Дана кнопка. По уходу курсора с нее выведите на экран какое-нибудь сообщение.
// button1.addEventListener("mouseout", function () {
//   alert(1);
// });

// 151 Именованные обработчики событий в JavaScript

// Задача 151.1
// Дан следующий HTML код:
// <input id="button1" type="submit" value="button1">
// <input id="button2" type="submit" value="button2">
// Даны следующие функции:
// function func1() {
// 	alert(1);
// }
// function func2() {
// 	alert(2);
// }
// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.
// button1.addEventListener("mouseover", func1);
// button2.addEventListener("mouseover", func2);
// function func1() {
//   alert(1);
// }
// function func2() {
//   alert(2);
// }

// 152 Привязывание одного обработчика ко многим элементам

// Задача 152.1

// Даны 5 абзацев:
// <p id="elem1">text</p>
// <p id="elem2">text</p>
// <p id="elem3">text</p>
// <p id="elem4">text</p>
// <p id="elem5">text</p>
// Дана следующая функция:
// function func() {
//   alert("message");
// }
// Привяжите эту функцию ко всем 5-ти абзацам.

// elem1.addEventListener("click", func);
// elem2.addEventListener("click", func);
// elem3.addEventListener("click", func);
// elem4.addEventListener("click", func);
// elem5.addEventListener("click", func);

// 153 Несколько обработчиков одного события в JavaScript

// Задача 153.1
// Дан абзац:
/* <p id="elem">text</p> */
// Даны следующие функции:
// function func1() {
//   alert("1");
// }
// function func2() {
//   alert("2");
// }
// function func3() {
//   alert("3");
// }
// // Привяжите все эти функции к нашему абзацу.
// elem.addEventListener("click", func1);
// elem.addEventListener("click", func2);
// elem.addEventListener("click", func3);

// Задача 153.2
// Дана кнопка. Привяжите к ней три анонимных обработчика двойного клика по ней. Пусть первый обработчик
//  выводит число 1, второй обработчик - число 2, а третий - число 3.
// elem.addEventListener("dblclick", func1);
// elem.addEventListener("dblclick", func2);
// elem.addEventListener("dblclick", func3);

// 154 Работа с текстом тега на JavaScript

// переменная, содержащая ссылку на DOM элемент, представляет собой объект со своими свойствами. Эти свойства можно прочитывать и записывать.
// Задача 154.1
// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
// button.addEventListener("click", function () {
//   alert(+elem.innerHTML + +elem2.innerHTML);
// });

// Задача 154.2
// Даны два абзаца и две кнопки. Пусть нажатие на первую кнопку выводит текст первого абзаца, а нажатие на вторую кнопку - текст второго абзаца.
// button.addEventListener("click", function () {
//   alert(elem.innerHTML);
// });
// button2.addEventListener("click", function () {
//   alert(elem2.innerHTML);
// });

// Запись
// Свойство innerHTML позволяет не только прочитывать, но и записывать текст.
// button.addEventListener('click', function() {
// 	elem.innerHTML = '!!!';
// });

// Задача 154.3
// Дан абзац и две кнопки. По нажатию на первую кнопку запишите в абзац слово 'привет', а по нажатию на вторую кнопку - слово 'пока'.
// button.addEventListener("click", function () {
//   alert((elem.innerHTML = "Привет"));
// });
// button2.addEventListener("click", function () {
//   alert((elem.innerHTML = "Пока"));
// });

// Задача 154.4
// Даны 3 абзаца с текстом. По нажатию на первый абзац запишите в его текст число 1, по нажатию на второй
//  абзац запишите в его текст число 2, а по нажатию на третий - запишите в его текст число 3.

// elem1.addEventListener("click", function () {
//   elem1.innerHTML = "1";
// });
// elem2.addEventListener("click", function () {
//   elem2.innerHTML = "2";
// });
// elem3.addEventListener("click", function () {
//   elem3.innerHTML = "3";
// });

// Задача 154.5
// Дан абзац и кнопка. В абзаце записано какое-то число. По нажатию на кнопку возведите значение абзаца в квадрат и запишите его обратно.
// button.addEventListener("click", function () {
//   elem.innerHTML = 2 ** 2;
// });

// Задача 154.6
// Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
// button.addEventListener("click", function () {
//   elem.innerHTML = 2 + 1;
// });

// Задача 154.7
// Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.
// button.addEventListener("click", function () {
//   elem.innerHTML += "!";
// });

// Задача 154.8
// Модифицируйте предыдущую задачу так, чтобы восклицательный знак записывался не в конец текста, а в начало.
// let result = elem.innerHTML.split("");
// result.unshift("!");
// result = result.join("");
// button.addEventListener("click", function () {
//   elem.innerHTML = result;
// });

// Запись тегов
// button.addEventListener('click', function() {
// 	elem.innerHTML = '<b>жирный текст</b>';
// });

// Задача 154.9
// Дан абзац и кнопка. По нажатию на кнопку запишите в абзац текст '<i>hello</i>'.
// button.addEventListener("click", function () {
//   elem.innerHTML = "<i>hello</i>";
// });

// Задача 154.10
// Дан абзац с текстом и кнопка. По нажатию на кнопку прочитайте текст абзаца,
// оберните этот текст в теги <b> и запишите новый текст обратно в абзац.
// button.addEventListener("click", function () {
//   elem.innerHTML = "<b>hello</b>";
// });

// 157.1 Фокус текстовых полей в JavaScript

// специальные события: cобытие focus позволяет отловить получение фокуса инпутом, а событие blur - потерю.

// Задача 157.1
// Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.
// button.addEventListener("focus", function () {
//   console.log((button.innerHTML = 1));
// });
// button.addEventListener("blur", function () {
//   console.log((button.innerHTML = 2));
// });

// Задача 157.2
// Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.
// elem.addEventListener("blur", function () {
//   console.log((elem.value **= 2));
// });

// Задача 157.3
// Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.
// elem.addEventListener("focus", function () {
//   console.log((elem.value = ""));
// });
