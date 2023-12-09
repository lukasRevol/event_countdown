//VARIABLES =========================

//inputs - variables
const inputName = document.querySelector('.input-name');
const inputDate = document.querySelector('.input-date');
const inputPicture = document.querySelector('.input-picture');

//buttons - variables
const settingsBtn = document.querySelector('.settings-btn');
const saveEventBtn = document.querySelector('.save-event-btn');

//html container elements - variables
const settingsBox = document.querySelector('.settings-box');
const heroImg = document.querySelector('.hero_img');
const eventName = document.querySelector('.counter_heading');

//timer numbers - variables
const daysTimerBox = document.querySelector('.days .count');
const hoursTimerBox = document.querySelector('.hours .count');
const minutesTimerBox = document.querySelector('.minutes .count');
const secondsTimerBox = document.querySelector('.seconds .count');

//date variables - variables
let choosenDate;
let currentDate;

//FUNCTIONS =========================



//check date choosen in inpu
const checkInputDate = () => {
	let x = new Date(inputDate.value);
	choosenDate = x.getTime();
};
checkInputDate();

//check courrent date every second
const checkCurrentDate = () => {
	let y = new Date();
	currentDate = y.getTime();
};

const showTimer = () => {
	let days = Math.floor((choosenDate - currentDate) / (1000 * 60 * 60 * 24));
	let hours = Math.floor((choosenDate - currentDate) / (1000 * 60 * 60)) % 24;
	let minutes = Math.floor((choosenDate - currentDate) / (1000 * 60)) % 60;
	let seconds = Math.floor((choosenDate - currentDate) / 1000) % 60;

	daysTimerBox.textContent = days;
	hoursTimerBox.textContent = hours;
	minutesTimerBox.textContent = minutes;
	secondsTimerBox.textContent = seconds;
};

setInterval(() => {
	checkCurrentDate();
	showTimer();
}, 1000);

//show settings
const showSettings = () => {
	settingsBox.classList.toggle('filters');
	heroImg.classList.toggle('index-change');
};

const addEvent = () => {
    checkInputDate();
    eventName.textContent = `${inputName.value}:`
    heroImg.setAttribute('src', inputPicture.value);
    showSettings();
}

//EVENT LISTENERS ===================
settingsBtn.addEventListener('click', showSettings);
saveEventBtn.addEventListener('click', addEvent);
