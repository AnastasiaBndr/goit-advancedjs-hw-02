import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delay = document.querySelector("input[name='delay']");
const form=document.querySelector("form")
const checkbox = document.querySelector('fieldset');

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

    makePromise(promiseValue, delay.value)
        .then(() => {
            iziToast.success({
				message: `Fulfilled promise in ${delay.value}ms`,
				closeOnClick: true,
				position: "topRight",
				displayMode: 0,
				progressBar: false,
			});
        })
        .catch(() => {
            iziToast.error({
				message: `Rejected promise in ${delay.value}ms`,
				closeOnClick: true,
				position: "topRight",
				displayMode: 0,
				progressBar: false,
			});});
}

const onCheckbox = e => {
    if (e.target.tagName === 'INPUT') {
        promiseValue = e.target.value.toLowerCase();
    };
}

form.addEventListener('submit', onSubmit);
checkbox.addEventListener('click', onCheckbox);