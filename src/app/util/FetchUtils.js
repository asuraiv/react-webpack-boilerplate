export function requestGet(url, params) {

	if (params && typeof params == "object") {
		url += "?" + Object.keys(params)
			.map(key => key + "=" + params[key])
			.join("&");
	}

	return fetch(url, {
			method: "GET"
		})
		.then(response => {
			return response.json();
		})
		.catch(err => {
			console.error(err);
		});
}