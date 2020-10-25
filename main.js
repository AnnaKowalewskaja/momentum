const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    dream = document.getElementById('dream'),
    data = document.getElementById('data');



function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
        day = today.getDay();


    

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);

}

function showDay() {

    let today = new Date(),
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    data.textContent = `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]}, ${today.getFullYear()}`;


}





function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
        morning = ['01.jpg', '02.jpg','03.jpg', '04.jpg','05.jpg', '06.jpg', '07.jpg','08.jpg', '09.jpg','10.jpg', '11.jpg', '12.jpg','13.jpg', '14.jpg','15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg' ]
        afternoon = ['images/01.jpg', 'images/02.jpg','images/03.jpg', 'images/04.jpg','images/05.jpg', 'images/06.jpg', 'images/07.jpg','images/08.jpg', 'images/09.jpg','images/10.jpg', 'images/11.jpg', 'images/12.jpg','images/13.jpg', 'images/14.jpg','images/15.jpg', 'images/16.jpg', 'images/17.jpg', 'images/18.jpg', 'images/19.jpg', 'images/20.jpg' ]
        evening = ['01.jpg', '02.jpg','03.jpg', '04.jpg','05.jpg', '06.jpg', '07.jpg','08.jpg', '09.jpg','10.jpg', '11.jpg', '12.jpg','13.jpg', '14.jpg','15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg' ]
        night = ['01.jpg', '02.jpg','03.jpg', '04.jpg','05.jpg', '06.jpg', '07.jpg','08.jpg', '09.jpg','10.jpg', '11.jpg', '12.jpg','13.jpg', '14.jpg','15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg' ]
        let i=0;
        setTimeout(i+1,5000);

    if (hour >= 6 && hour < 12) {

        //document.body.style.backgroundImage = "url('images/morning[i].jpg')";
        greeting.textContent = 'Good Morning, '
    } else if (hour>= 12 && hour < 18) {
        //document.body.style.backgroundImage = "url(images/day/01.jpg)";
        greeting.textContent = 'Good Afternoon, ';
    } 
    else if (hour>= 18 && hour < 24) {
        //document.body.style.backgroundImage = "url('images/[i]')";
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    } 
    else {
        //document.body.style.backgroundImage = "url(images/night/'night[i]')";
        greeting.textContent = 'Good Night, ';
        document.body.style.color = 'white';
    }
}

const base = 'https://github.com/rolling-scopes-school/annalisovskaya-JS2020Q3/tree/master/images/evening/';
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;

function viewBgImage(data) {
  const body = document.querySelector('body');//Метод elem.querySelector(css) возвращает первый элемент, соответствующий данному CSS-селектору.
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}
function getImage() {
  const index = i % images.length;
  const imageSrc = base + images[index];
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
} 
const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);

function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {

            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    } else {
        localStorage.setItem('name', e.target.innerText);
    }

}

function setDream(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {

            localStorage.setItem('dream', e.target.innerText);
            dream.blur();
        }


    } else if (e.type === 'blur') {
        localStorage.setItem('dream', e.target.innerText);
    }/*else{
        dream.textContent = ' ';
        localStorage.setItem('dream', e.target.innerText);    

    }*/
    if (dream.textContent === '[Enter Dream]' || localStorage.getItem('dream').length === 0 || !localStorage.getItem('dream').trim()) {
        dream.textContent = '[Enter Dream]';
    }

}

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function getDream() {
    if (localStorage.getItem('dream') === null) {
        dream.textContent = '[Enter Dream]';
    } else {
        dream.textContent = localStorage.getItem('dream');
    }
}


name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

dream.addEventListener('keypress', setDream);
dream.addEventListener('blur', setDream);
dream.addEventListener('focus', setDream);




showDay();
showTime();
setBgGreet();
getName();
getDream();