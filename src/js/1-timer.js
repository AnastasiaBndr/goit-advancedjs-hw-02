import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import convertMs from "./convertMs";

const startButton = document.querySelector("[data-start]");
startButton.disabled = true;
const timerDays = document.querySelector("[data-days]");
const timerHours = document.querySelector("[data-hours]");
const timerMinutes = document.querySelector("[data-minutes]");
const timerSeconds = document.querySelector("[data-seconds]");
const input = document.querySelector('#datetime-picker');

let userSelectedDate = null;
let timer;
const options = {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		if (selectedDates[0].getTime() > new Date().getTime()) {
			userSelectedDate = selectedDates[0];
			startButton.disabled = false;
			console.log(userSelectedDate);
		} else {
			iziToast.error({
				message: "Please choose a date in the future",
				closeOnClick: true,
				position: "topRight",
				displayMode: 0,
				progressBar: false,
			});
			startButton.disabled = true;
		}
	  	
	},
  };
flatpickr('#datetime-picker', options); 

const showRemaining = () => {
	var now = new Date();
        var distance = userSelectedDate - now;
        if (distance < 0) {
			clearInterval(timer);
			startButton.disabled = false;
			input.disabled = false;
            return;
        }
	const { days, minutes, hours, seconds } = convertMs(distance);
	timerDays.innerHTML = days;
	timerMinutes.innerHTML = minutes;
	timerHours.innerHTML = hours;
	timerSeconds.innerHTML = seconds;
       
}

const handleClick = (e) => {
	startButton.disabled = true;
	input.disabled = true;
	timer = setInterval(showRemaining, 1000);
}

startButton.addEventListener("click", handleClick);


 

  