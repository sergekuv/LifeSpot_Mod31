// -- Review --
function getReview() {
    let review = {}
    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?")
    if (review["userName"] == null) {
        return
    }

    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }
    review["date"] = new Date().toLocaleString()

    writeReview(review)
}

const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}


// -- Листание слайдов при помощи стрелок

let slideIndex = 1;
showSlides(slideIndex);

// Инициируем показ картинки, расположенной на н-ной позиции
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Инициируем показ картинки, расположенной на н-ной по отношению к текущей
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Процецц отображения н-ной картинки
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// теперь листание мышью

var initMouseX;
var isMonitored = false;
function startListen() {
    showSlides(1);
    ssContainer = document.getElementById('slideContainer');
    //console.log(ssContainer);
    //ssContainer.addEventListener('mouseclick', (event) => { plusSlides(1); });

    ssContainer.addEventListener('mousedown', (event) => {
        event.preventDefault();
        console.log('mouse is down');
        if (isMonitored == false) {
            isMonitored = true;
            initMouseX = event.clientX;
            ssContainer.addEventListener('mousemove', (e) => {
                let currentMouseX = event.clientX;
                console.log(`Mouse X: ${currentMouseX} from startListen`);
                if (currentMouseX - initMouseX > 100) {
                    initMouseX = currentMouseX;
                    plusSlides(1);
                }

            });
        } else {
            isMonitored = false;
        }

    });

    ssContainer.addEventListener('mouseup', (evt) => { evt.preventDefault(); console.log('mouse is up'); });
    //onmousedown = "mouseDownProcess(event)" onmouseup = "mouseUpProcess(event)"
    //slideshowContainer.addEventListener('touchstart', swipeStart);
    //slideshowContainer.addEventListener('mousedown', swipeStart);

}


var mouseXStartPosition;
function mouseDownProcess(event) {
    console.log('--mouseDownProcess started--');
    mouseXStartPosition = event.clientX;
    console.log(mouseXStartPosition);
    document.addEventListener('mouseup', (event) => {
        event.preventDefault();
        console.log('mouseup happened');
    });
    //document.addEventListener('mousemove', (event) => {console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);});
}

function mouseUpProcess(event) {
    event.preventDefault();
    console.log('--mouseUpProcess started--');
    let mouseXEndPosition = event.clientX;
    console.log(`Mouse X: ${event.clientX}`);
    console.log(mouseXEndPosition - mouseXStartPosition);

}

function miceUpImg1(event) {
    event.preventDefault();
    console.log('--mouseUpImg1 started--');
    let miceUpPosition = event.clientX;
    console.log(miceUpPosition);

}


