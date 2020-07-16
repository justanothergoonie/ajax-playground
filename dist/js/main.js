"use strict";

var api = new CircusApi();
var resultEl = document.querySelector('[name="result"]');
var messageEl = document.querySelector('[name="message"]');
var errorEl = document.querySelector('[name="error"]');
var successEl = document.querySelector('[name="success"]');
document.querySelector('body').addEventListener('got-data', function (event) {
  console.log('got some data to show', event);
  messageEl.textContent = event.detail.message;
  resultEl.textContent = event.detail.data.value;
  successEl.textContent = event.detail.status;
});
document.querySelector('body').addEventListener('got-error', function (event) {
  console.log('got an error to show', event.detail);
  errorEl.textContent = event.detail;
});
document.querySelector('body').addEventListener('got-status', function (event) {
  console.log('got an error to show', event);
  successEl.textContent = event.detail.status;
});
var getBtn = document.querySelector('[name="get"]');
getBtn.addEventListener('click', function (event) {
  event.preventDefault();
  errorEl.textContent = '';
  messageEl.textContent = '';
  resultEl.textContent = '';
  var key = document.querySelector('[name="key"]').value;
  api.getData(key);
});
var addBtn = document.querySelector('[name="send"]');
addBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var lock = document.querySelector('[name="lock"]').value;
  var lockValue = document.querySelector('[name="lock-value"]').value;
  api.saveData(lock, lockValue);
});
//# sourceMappingURL=main.js.map
