const app = document.querySelector("#app");

app.textContent = "Hello JS!";

fetch("/authors")
  .then(response => response.json())
  .then(authors => {
    let content = `<ul class="authors">`;
    authors.forEach(author => {
      content += `
			 	<li class="author">
			 		<h3 class="author__name">${author.firstName} ${author.lastName}</h3>
			 		<ul class="books">
			 			${author.books
              .map(book => {
                return `
								<li class="book">
									<h5 class="book__title">${book.title}</h5>
									<p class="book__description">${book.description}</p>
								</li>
							`;
              })
              .join("")}
			 		</ul>
			 	</li>
		 	`;
    });
    content += `</ul>`;
    let commentsContent = '<ul>';
    authors[0].comments.forEach(comment => {
    	commentsContent += `<li>${comment.content}</li>`
    })
    commentsContent += '</ul>'
    app.innerHTML = commentsContent;
  })
  .catch(err => console.log(err));
