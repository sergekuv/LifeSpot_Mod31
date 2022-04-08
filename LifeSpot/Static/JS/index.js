/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */ 
//let  session = {};


/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */
function handleSession(){
    // Сохраним время начала сессии
    //session.("startDate", new Date().toLocaleString())
    if (!window.sessionStorage.getItem("startDate")) {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString());
    }

    // Сохраним UserAgent
    //session.set("userAgent", window.navigator.userAgent)
    //session.userAgent = window.navigator.userAgent;
    if (!window.sessionStorage.getItem("userAgent")) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent);
    }
}

/*
* Проверка возраста пользователя
* 
* */
function checkAge() {

    if (sessionStorage.getItem("age") >= 18) {
        return;
    }


    let age = prompt("Пожалуйста, введите ваш возраст?", 33);
    
    if(age >= 18){
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        sessionStorage.setItem("age", age) ;
    }
    else{
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. ВыL будете перенаправлены");
        window.location.href = "http://www.google.com";
        sessionStorage.setItem("age", "");
    }
}


/*
* Вывод данных сессии в консоль
* 
* */
let sessionLog = function () {
    const keys = Object.keys(window.sessionStorage);
    for (let key of keys) {
        console.log(`${key}: ${sessionStorage.getItem(key)}`);
    }
}

/*
* Функция для фильтраци контента
* Будет вызываться благодаря атрибуту oninput на index.html
* 
* */

function filterContent(){
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++ ){
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if(!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())){
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Всплывающее окно будет показано по таймауту
* 
* */
// setTimeout(() =>
//     alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
// 7000);




