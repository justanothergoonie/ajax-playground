const api = new CircusApi();

const resultEl = document.querySelector('[name="result"]');
const messageEl = document.querySelector('[name="message"]');
const errorEl = document.querySelector('[name="error"]');
const successEl = document.querySelector('[name="success"]');

document.querySelector('body').addEventListener('got-data', (event) => {
	console.log('got some data to show', event);

	messageEl.textContent = event.detail.message;
	resultEl.textContent = event.detail.data.value;
	// successEl.textContent = event.detail.status;
});

document.querySelector('body').addEventListener('got-error', (event) => {
	console.log('got an error to show', event.detail);

	errorEl.textContent = event.detail;
});

document.querySelector('body').addEventListener('got-status', (event) => {
	console.log('got an error to show', event);

	successEl.textContent = event.detail.status;
});

const getBtn = document.querySelector('[name="get"]');
getBtn.addEventListener('click', (event) => {
	event.preventDefault();

	errorEl.textContent = '';
	messageEl.textContent = '';
	resultEl.textContent = '';

	const key = document.querySelector('[name="key"]').value;
	api.getData(key);
});

const addBtn = document.querySelector('[name="send"]');
addBtn.addEventListener('click', (event) => {
	event.preventDefault();

	const lock = document.querySelector('[name="lock"]').value;
	const lockValue = document.querySelector('[name="lock-value"]').value;
	api.saveData(lock, lockValue);
});
