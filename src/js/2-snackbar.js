import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delay = document.querySelector("input[name='delay']");
const form = document.querySelector("form");
const [checkboxFulfilled, checkboxRejected] = document.querySelectorAll("input[type='radio']");

const makePromise = (value, timeout) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log(value);
        if (value === 'fulfilled') resolve("Success");
    else reject("Error");
    },timeout)
    })
    
    
}

let promiseValue = null;
const onSubmit = e => {
    e.preventDefault();

    const delayValue = parseInt(delay.value);

    promiseValue = checkboxFulfilled.checked ? checkboxFulfilled.value : checkboxRejected.value;

    makePromise(promiseValue, delayValue)
        .then(() => {
            iziToast.success({
				message: `Fulfilled promise in ${delayValue}ms`,
				closeOnClick: true,
				position: "topRight",
				displayMode: 0,
				progressBar: false,
			});
        })
        .catch(() => {
            iziToast.error({
				message: `Rejected promise in ${delayValue}ms`,
				closeOnClick: true,
				position: "topRight",
				displayMode: 0,
				progressBar: false,
			});});
}

form.addEventListener('submit', onSubmit);