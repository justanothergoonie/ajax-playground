console.log(`Hello World from main.js! 
Change this message, and make sure it changes in the browser 
to verify that you're working in the right files.`);

class CircusApi {
	API_URL = 'http://circuslabs.net:3000/data';
	getData(key) {
		console.log('getting data for key: ' + key);

		axios
			.get(`${this.API_URL}/${key}`) //.then((data) => console.log(data))
			.then(this.handleSuccessfulResponse)
			.catch(this.handleError);
	}

	saveData(key, value) {
		console.log('saving some data' + key + ' = ' + value);

		axios.post(`${this.API_URL}/${key}`, {
			type: 'string',
			value: value,
		});
	}
	handleSuccessfulResponse(response) {
		console.log('got a response', response);

		const value = response.data;

		const event = new CustomEvent('got-data', { detail: value });
		document.querySelector('body').dispatchEvent(event);
	}

	handleError(error) {
		console.log('got an error', error);

		const event = new CustomEvent('got-error', { detail: error });
		document.querySelector('body').dispatchEvent(event);
	}

	handleStatus(status) {
		console.log('Status is', status);

		const event = new CustomEvent('got-status', { detail: status });
		document.querySelector('body').dispatchEvent(event);
	}
}
