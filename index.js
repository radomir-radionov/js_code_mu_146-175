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
// result = ["!", ...result].join("");
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

// 158 Исключения при работе с атрибутами в JavaScript

// При работе с атрибутами существует исключение - это атрибут class.
// Это слово является специальным в JavaScript и поэтому мы не можем просто написать elem.class,
// чтобы считать значение атрибута class. Вместо этого следует писать elem.className.
// let elem = document.querySelector("#elem");
// alert(elem.className); // выведет 'aaa bbb'
// Существуют и другие исключения, например, атрибут for. К нему следует обращаться через htmlFor.

// Задача 158.1
// Дан див:
// <div id="elem" class="content no-gap"></div>
// Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.
// button.addEventListener("focus", function () {
//   alert(elem.className);
// });

// Задача 158.2
// Дан див:
// <div id="elem"></div>
// Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.
// button.addEventListener("focus", function () {
//   alert((className = "GG"));
// });

// let elem = document.querySelector("#elem");
// console.log(elem);

// Задача 158.3
// Дан див с несколькими CSS классами, записанными через пробел:
// <div id="elem" class="aaa bbb ccc"></div>
// Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.
// let result = elem.className;
// button.addEventListener("focus", function () {
//   console.log(result.split(" "));
// });

// 159 Цепочки методов и свойств в JavaScript
// alert(document.querySelector("#elem").value);
// document.querySelector('#elem').value = 'www';

// Задача 159.1
// Дан следующий код:
// <img id="image" src="avatar.png">
// let image = document.querySelector('#image');
// console.log(image.src);
// Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.
// let image = document.querySelector("#image").src;
// console.log(image);

// Преимущества и недостатки цепочек
// любая работа с элементами страницы - это медленная операция

// 160 Объект this в JavaScript
//  Этот объект указывает на элемент, в котором произошло событие.

//  Задача 160.1
// Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2.
//  Для обращения у инпуту внутри функции-обработчика используйте объект this.

// elem.addEventListener("focus", function () {
//   alert((this.value = 1));
// });
// elem.addEventListener("blur", function () {
//   alert((this.value = 2));
// });

// Задача 160.2
// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на
// эту кнопку ее значение каждый раз увеличивалось на единицу.
// elem.addEventListener("click", function () {
//   if (true) {
//     this.value = +this.value + +1;
//   }
//   console.log(this.value);
// });
// Особое преимущество this (значение this имеет значения контекста в котором this  выполняется)

// Задача 160.3
// Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.
// let elem = document.querySelector("#elem");
// let elem1 = document.querySelector("#elem1");
// let elem2 = document.querySelector("#elem2");

// elem.addEventListener("click", func);
// elem1.addEventListener("click", func);
// elem2.addEventListener("click", func);

// function func() {
//   console.log(this.innerHTML + "!");
// }

// Получение группы элементов
// querySelectorAll, получает все теги, подпадающие под CSS селектор, в виде массива элементов.

// let elems = document.querySelectorAll(".www");
// for (let elem of elems) {
//   console.log(elem.innerHTML);
// }

// Задача 161.1
// Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом и установите текст каждого абзаца в значение text.
// let button = document.querySelector("#button");
// button.addEventListener("click", func);
// function func() {
//   let elems = document.querySelectorAll(".www");
//   for (let elem of elems) {
//     elem.innerHTML = "123";
//     console.log(elem);
//   }
// }

// Задача 161.2
// Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.
// let button = document.querySelector("#button");
// button.addEventListener("click", func);
// function func() {
//   let elems = document.querySelectorAll(".www");
//   for (let i = 0; i < elems.length; i++) {
//     elems[i].innerHTML = i + 1;
//   }
//   console.log(elems);
// }

// Задача 161.3
// Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.
// let button = document.querySelector("#button");
// button.addEventListener("click", f01);
// function f01() {
//   let inp = document.querySelectorAll("#d1 input");
//   let sum = 0;
//   for (var i = 0; i < inp.length; i++) {
//     sum += Number(inp[i].value);
//   }
//   console.log(sum);
// }

// Добавление обработчиков событий в цикле

// let elems = document.querySelectorAll("p");
// for (let elem of elems) {
//   elem.addEventListener("click", func);
// }
// function func() {
//   alert(this.innerHTML); // выводим текст абзаца
// }

// Задача 162.1
// Дана следующая функция:
// Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.
// let elems = document.querySelectorAll("#text");
// for (let elem of elems) {
//   elem.addEventListener("blur", function func() {
//     this.value = Number(this.value) + 1;
//   });
// }

// Задача 162.2
// Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.
// let items = document.querySelectorAll("#num");
// items.forEach(function (item) {
//   item.addEventListener("click", function func() {
//     item.innerHTML = item.textContent ** 2;
//   });
// });

// Задача 162.3
// Дан следующий код:
// let divs = document.querySelectorAll("div");
// for (let div of divs) {
//   div.addEventListener("click", function () {
//     this.innerHTML++;
//   });
// }

// Отвязывание событий через метод removeEventListener
// removeEventListener первым параметром принимает тип события, а вторым - ссылку на функцию, которую нужно отвязать.
// let button = document.querySelector("#button");
// button.addEventListener("click", func);
// function func() {
//   alert("!!!");
//   this.removeEventListener("click", func);
// }

// Задача 163.1
// Дана ссылка. По нажатию на эту ссылку добавьте в конец ее текста содержимое ее атрибута href в круглых скобках.
// Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
// let elems = document.getElementsByTagName("a");
// for (let i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("mouseover", function () {
//     this.innerHTML = this.innerHTML + this.href;
//   });
// }

// Задача 163.2
// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый
// раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы
// кнопка больше не реагировала на нажатие.

// const btn = document.getElementById("btn");
// btn.addEventListener("click", function func() {
//   if (btn.value < 10) {
//     btn.value = +btn.value + +1;
//     console.log(btn.value);
//   } else if (this.removeEventListener("click", func));
// });

// Отвязывание обработчиков событий в цикле
// Задача 164.1
// Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак.
//  Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
// let items = document.querySelectorAll("#text");
// items.forEach(function (item) {
//   item.addEventListener("click", function func() {
//     this.innerHTML = item.textContent + "!";
//     this.removeEventListener("click", func);
//   });
// });

// Отвязывание анонимных функций в JavaScript

// Работа с атрибутами через методы в JavaScript
// Задача 166.1
// Дан элемент:
// <input id="elem" value="text">
// Получите значение его атрибута value.
// let elem = document.querySelector("#elem");
// let value = elem.getAttribute("value");
// console.log(value);

// Задача 166.2
// Дан элемент:
// <input id="elem" class="www zzz">
// Получите значение его атрибута class.
// let elem = document.querySelector("#elem");
// let value = elem.getAttribute("class");
// console.log(value);

// Задача 166.3
// Дан элемент:
// <input id="elem">
// Установите его атрибут value в значение 'text'.
// let elem = document.querySelector("#elem");
// elem.setAttribute("value", "!!!");
// console.log(elem);

// Задача 166.4
// Дан элемент:
// <input id="elem">
// Установите ему атрибут class в значение 'valid'.
// let elem = document.querySelector("#elem");
// elem.setAttribute("class", "valid");
// console.log(elem);

// Удаление

// Задача 166.5
// Дан элемент:
// <input id="elem" value="text">
// Удалите у него атрибут value.
// let elem = document.querySelector("#elem");
// elem.removeAttribute("value");
// console.log(elem);

// Проверка;

// Задача 166.6
// Дан элемент:
// <input id="elem" value="text">
// Проверьте наличие у него атрибута value.
// let elem = document.querySelector("#elem");
// console.log(elem.hasAttribute("value"));

// Разница между способами получения атрибутов

// Работа с атрибутами через свойства и через метод getAttribute - это не одно и то же:
// при изменении свойства значение атрибута, полученное через метод, не меняется!

// Задача 167.1
// Дан инпут с каким-то начальным значением. Дана также кнопка. По нажатию на кнопку
// определите, было ли изменено пользователем начальное значение инпута.
// let elem = document.querySelector("#elem");
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", function () {
//   let value = elem.getAttribute("value");
//   console.log(value);
// });

// Изменение атрибута

// А вот изменение атрибута обновляет свойство:
// elem.setAttribute('value', 'new'); // поменяли атрибут
// let value = elem.value;
// console.log(value); // выведет 'new'

// Задача 167.2
// Дан инпут с каким-то начальным значением. Пусть пользователь меняет это значение. Сделайте рядом с инпутом кнопку,
//  по нажатию на которую value инпута вернется в изначальное значение.
// let elem = document.querySelector("#elem");
// let btn = document.querySelector("#btn");
// elem.value = "new";
// console.log(elem.value);
// btn.addEventListener("click", function () {
//   let value = elem.getAttribute("value");
//   console.log(value);
// });

// Стилизация элементов через атрибут style в JavaScript(elem.style.color)

// Задача 169.1
// Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.

// let elem = document.querySelector("#div");
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", function () {
//   elem.style.width = "100px";
//   elem.style.height = "100px";
//   elem.style.border = "10px";
//   elem.style.backgroundColor = "#ffb3b3";
// });

// Свойства с дефисом
// Свойства, которые записываются через дефис, например font-size, преобразуются в camelCase. То есть font-size станет fontSize:

// Манипулирование CSS классами в JavaScript
// Массив классов (classList)

// Задача 168.1
// <p id="elem" class="www ggg zzz"></p>
// Узнайте количество его классов.
// let elem = document.querySelector("#elem");
// let length = elem.classList.length;
// console.log(length);

// Задача 168.2
// Переберите в цикле его классы.
// let elem = document.querySelector("#elem");
// let classNames = elem.classList;
// for (let className of classNames) {
//   document.write(className + "<br>");
// }

// Добавление классов
// classList.add

// Задача 168.3
// Добавьте ему класс xxx.
// let elem = document.querySelector("#elem");
// elem.classList.add("xxx");
// console.log(elem);

// Удаление классов
// classList.remove
// let elem = document.querySelector('#elem');
// elem.classList.remove('ggg');

// Проверка классов
// classList.contains
// let elem = document.querySelector("#elem");
// let contains = elem.classList.contains("ggg");
// console.log(contains);

// Чередование классов
// classList.toggle
// Метод toggle объекта classList чередует заданный CSS класс элемента: добавляет класс, если его нет и удаляет, если есть.
// let elem = document.querySelector('#elem');
// elem.classList.toggle('zzz');

// Задача 169.2
// Дан див с текстом и кнопка. По клику на кнопку установите диву размер шрифта в 20px, а также верхнюю границу и фон.
// let elem = document.querySelector("#div");
// let btn = document.querySelector("#btn");
// let text = document.querySelector("#text");
// btn.addEventListener("click", function () {
//   elem.style.fontSize = "40px";
// });

// Исключение
// Свойство float является исключением, так как оно является специальным в JavaScript. Для него следует писать cssFloat:
// elem.style.cssFloat = 'right';

// Стилизация с помощью CSS классов на JavaScript

// Задача 170.1
// Объясните, почему я выбрал для названия класса слово colored, а не слово green, явно указывающее на желаемый нами цвет.
// Потому, что цвет могут поменять

// Задача 170.2
// Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. Пусть по нажатию на каждую кнопку
// заданное действие происходит с абзацем (становится красным, например).
// let text = document.querySelector("#text");
// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");
// let btn3 = document.querySelector("#btn3");
// btn1.addEventListener("click", function () {
//   text.classList.add("textDecoration");
// });
// btn2.addEventListener("click", function () {
//   text.classList.add("fontWeigth");
// });
// btn3.addEventListener("click", function () {
//   text.classList.add("colored");
// });

// Задача 170.3
// Модифицируйте предыдущую задачу так, чтобы повторное нажатие на кнопку отменяло действие этой кнопки.
// let text = document.querySelector("#text");
// let btn1 = document.querySelector("#btn1");
// let btn2 = document.querySelector("#btn2");
// let btn3 = document.querySelector("#btn3");
// btn1.addEventListener("click", function () {
//   text.classList.toggle("textDecoration");
// });
// btn2.addEventListener("click", function () {
//   text.classList.toggle("fontWeigth");
// });
// btn3.addEventListener("click", function () {
//   text.classList.toggle("colored");

// Нахождение элементов по родственным связям
// firstElementChild lastElementChild children

// Потомки элементов
// Задача 171.1 Задача 171.2 Задача 171.3
// Дан элемент #elem:
// Найдите первого потомка этого элемента и сделайте его текст красного цвета.
// let parent = document.querySelector("#elem");
// let text = parent.firstElementChild;
// text.style.color = "red";

// Родители элементов (parentElement)

// Поиск всех родителей(closest)

// Задача 171.6
// Найдите ближайшего родителя этого элемента, являющегося тегом div.
// let elem = document.querySelector("#child");
// let parent = elem.closest(".www");
// console.log(parent.id);

// Поиск соседей (previousElementSibling nextElementSibling)

// Другие полезные методы для поиска элементов
// getElementById getElementsByTagName getElementsByClassName

// Поиск элементов внутри другого элемента

// Задача 173.1
// Дан элемент #parent:
// Найдите внутри родителя элементы с классом www и запишите их в переменную elems1.
// Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.
// let parent = document.querySelector("#parent");
// let elems1 = document.querySelectorAll("#parent .www");
// console.log(elems1);
// let elems2 = document.querySelectorAll("#parent .ggg");
// console.log(elems2);

// Пользовательские атрибуты в JavaScript
// В HTML разрешено добавлять свои, пользовательские атрибуты тегам. Такие атрибуты должны
//  начинаться с data-, а затем должно идти любое название атрибута, которое вам удобно.
// Обращение к таким атрибутам устроено не стандартным образом. Нельзя просто обратиться к
// одноименному свойству элемента, как мы делали это раньше, а следует использовать специальное
// свойство dataset, после которого через точку пишется имя атрибута без data-. Например,
// если наш атрибут называется data-test, то для обращения к нему мы будем писать
// elem.dataset.test, где elem - переменная с нашим элементом.
// Давайте посмотрим на примере. Пусть у нас дан вот такой элемент:
// <div id="elem" data-num="1000"></div>
// Выведем на экран значение его атрибута data-num:
// let elem = document.querySelector('#elem');
// alert(elem.dataset.num); // выведет 1000
// А теперь присвоим этому атрибуту другое значение:
// let elem = document.querySelector('#elem');
// elem.dataset.num = 123;

// Задача 174.1
// <div id="elem" data-text="str">text</div>
// Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
// let div = document.querySelector("#elem");
// div.addEventListener("click", function () {
//   this.innerHTML = this.textContent + elem.dataset.text;
// });

// Задача 174.2
// Даны дивы, содержащие в атрибуте data-num свой порядковый номер:
// Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.

// let items = document.querySelectorAll("#text");
// items.forEach(function (item) {
//   item.addEventListener("click", function func() {
//     this.innerHTML = this.textContent + this.dataset.num;
//   });
// });

// Задача 174.3
// Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней,
// записывая их в какой-нибудь пользовательский атрибут. Пусть по двойному клику на эту кнопку
// на экран выводится, сколько кликов по этой кнопке было сделано.
// let btn = document.querySelector("#btn");
// let count = 0;
// btn.addEventListener("click", function () {
//   ++count;
//   console.log(count);
// });
// btn.addEventListener("dblclick", function () {
//   alert(count);
// });

// Задача 174.4
// <input id="elem" data-length="5">
// В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут.
// Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным,
//  выводилось сообщение об этом.
// let elem = document.getElementById("elem");
// elem.addEventListener("mouseout", function () {
//   if (elem.dataset.length > elem.value.length) {
//     alert("Введите символы");
//   }
// });

// Задача 174.5
// <input id="elem" data-min="5" data-max="10">
// В этом инпуте атрибуты data-min и data-max содержат диапазон. Сделайте так, чтобы по потери фокуса,
// если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.
// let elem = document.getElementById("elem");
// elem.addEventListener("mouseout", function () {
//   if (
//     elem.value.length < elem.dataset.min ||
//     elem.value.length > elem.dataset.max
//   ) {
//     alert("Введите корректное значение");
//   }
// });

// Имена с дефисами
// Пользовательские атрибуты могут содержать дефисы в своем названии, например, вот так:
// <div id="elem" data-my-test="1000"></div>
// Для обращения к таким атрибутам следует использовать camelCase:
// let elem = document.querySelector('#elem');
// alert(elem.dataset.myTest);

// Обращение через методы
// К пользовательским атрибутам можно также обращаться с помощью методов типа getAttribute,
// в этом случае следует писать полное название атрибута:
// <div id="elem" data-num="1000" data-my-num="2000"></div>
// let elem = document.querySelector('#elem');
// alert(elem.getAttribute('data-num'));    // выведет 1000
// alert(elem.getAttribute('data-my-num')); // выведет 2000

// Отработка изученного материала на работу с DOM

// Задача 175.1
// Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
// let input = document.getElementById("input");
// let elem = document.getElementById("elem");
// console.log(elem.textContent);
// input.addEventListener("mouseout", function () {
//   elem.innerHTML = elem.textContent + input.value;
//   console.log(input.value);
// });

// Задача 175.2
// Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
// let elem = document.getElementById("elem");
// let elem1 = document.getElementById("elem1");
// let btn = document.getElementById("btn");
// let text = document.getElementById("text");
// btn.addEventListener("click", function () {
//   text.innerHTML = +elem.value + +elem1.value;
// });

// Задача 175.3
// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// let elem = document.getElementById("num");
// elem.addEventListener("blur", func);
// function func() {
//   let sum = 0;
//   let str = elem.value;
//   let arr = str.split("");
//   for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
//   }
//   let newElem = document.getElementById("result");
//   newElem.innerHTML = sum;
// }

// Задача 175.4
// Дан инпут. В него вводятся числа через запятую. По потери фокуса
// найдите среднее арифметическое этих чисел (сумма делить на количество).
// let elem = document.getElementById("num");
// elem.addEventListener("blur", func);
// function func() {
//   let sum = 0;
//   let str = elem.value;
//   let arr = str.split(",");
//   for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
//   }
//   let sumDivide = sum / arr.length;
//   let newElem = document.getElementById("result");
//   newElem.innerHTML = sumDivide;
// }

// Задача 175.5
// Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери
// фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
// let elem = document.getElementById("input");
// elem.addEventListener("blur", func2);
// function func2() {
//   let elems = document.getElementsByClassName("name");
//   if (elem.value !== 0) {
//     let str = elem.value;
//     let arr = str.split(" ");
//     for (let i = 0; i < arr.length; i++) {
//       elems[i].value = arr[i];
//     }
//   }
// }

// Задача 175.6
// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы.
// Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество
// автоматически стали записанными с большой буквы (в этом же инпуте).
// let elem = document.getElementById("input");
// elem.addEventListener("focus", funcFocus);
// function funcFocus() {
//   let str = elem.value;
//   let arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     elem.style.textTransform = "lowercase";
//   }
// }
// elem.addEventListener("blur", funcBlur);
// function funcBlur() {
//   let str = elem.value;
//   let arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     elem.style.textTransform = "uppercase";
//   }
// }

// Задача 175.7
// Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
// let elem = document.getElementById("input");
// elem.addEventListener("blur", funcFocus);
// function funcFocus() {
//   let str = elem.value;
//   let arr = str.split(" ");
//   console.log(arr.length);
// }

// Задача 175.8
// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса
// в этом же инпуте поставьте эту дату в формате 2016-12-31.
// let elem = document.getElementById("num");
// elem.addEventListener("blur", func);
// function func() {
//   let arr2 = [];
//   let str = elem.value;
//   let arr = str.split(".");
//   arr2 = arr.reverse();
//   let str1 = arr2.join("-");
//   elem.value = str1;
// }

// Задача 175.9
// Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то,
// что это слово читается с начала и с конца одинаково (например, мадам).
// let elem = document.getElementById("num");
// let btn = document.getElementById("but");
// btn.addEventListener("click", func);
// function func() {
//   let str = elem.value;
//   let arr = str.split("");
//   let arr2 = str.split("").reverse();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr2[i]) {
//       alert("это слово не палиндром");
//       return;
//     }
//   }
//   alert("это слово палиндром");
//   return;
// }

// Задача 175.10
// Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let elem = document.getElementById("num");
// elem.addEventListener("click", func);
// function func() {
//   let str = elem.value;
//   let arr = str.split("");
//   arr = arr.map(Number);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//       alert("это число содержит 3");
//       return;
//     }
//   }
//   alert("это число не содержит 3");
//   return;
// }

// Задача 175.11
// Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// let elem = document.getElementsByTagName("p");
// let btn = document.getElementById("btn");
// btn.addEventListener("click", func);
// function func() {
//   for (let i = 0; i < elem.length; i++) {
//     elem[i].innerHTML = elem[i].innerHTML + " " + (i + 1);
//   }
// }

// Задача 175.12
// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
// let elems = document.getElementsByTagName("a");
// for (let i = 0; i < elems.length; i++) {
//   elems[i].addEventListener("mouseover", function () {
//     this.innerHTML = this.innerHTML + " " + "(" + this.href + ")";
//   });
// }

// Задача 175.14
// Даны несколько абзацев с числами. По нажатию на любой абзац
// запишите в него квадрат числа, которое в нем находится.
// let num = document.getElementsByTagName("p");
// console.log(num);
// for (let i = 0; i < num.length; i++) {
//   num[i].addEventListener("click", func);
// }
// function func() {
//   this.innerHTML = this.innerHTML ** 2;
// }

// Задача 175.15
// Дан инпут. В него вводится дата в формате 31.12.2016. По потери
//  фокуса узнайте день недели (словом), который приходится на эту дату.
// let elem = document.getElementById("num");
// elem.addEventListener("click", func);
// function func() {
//   let dayWeak = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
//   let arr = elem.value.split(".");
//   let arr2 = arr.reverse();
//   let str1 = arr2.join(",");
//   let date = new Date(str1);
//   let day = date.getDay();
//   let p = document.getElementById("text");
//   p.innerHTML = dayWeak[day];
// }

// Задача 175.16
// Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или
// уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
var elem = document.getElementById("num");
var btnElem = document.getElementsByClassName("cls");
for (var i = 0; i < elem.length; i++) {
  btnElem[i].addEventListener("click", func);
}

function func() {
  var number = +elem.value + +this.value;
  if (number >= 0) {
    elem.value = number;
  } else {
    elem.value = 0;
  }
}
