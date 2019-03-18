const app = document.querySelector("#app");

app.textContent = "Hello JS!";

fetch('/books')
	.then(response => response.json())
	.then(jsonData => {
		let content = `<ul>`
		jsonData.forEach((book) => {
			content += `<li>${book.title}: ${book.description}</li>`;
		})
		content += `</ul>`;
		app.innerHTML = content;
	})
	.catch(err => console.log(err))