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
              }).join('')
              }
			 		</ul>
			 	</li>
		 	`;
    });
    content += `</ul>`;
    let commentsContent = `<ul class="comments">`;
    authors[0].books[0].comments.forEach((comment, index) => {
    	commentsContent += `<li class="comment" data-key="${index}">${comment.content}<button class="comment__delete-button">Delete Me!</button></li>`
    })
    commentsContent += '</ul>'
    app.innerHTML = commentsContent;
  })
  .catch(err => console.log(err));

document.body.addEventListener('click', event => {
    if (event.target.classList.contains('comment__delete-button')) {
        const deleteButton = event.target;
        const commentIndex = deleteButton.parentElement.getAttribute('data-key')

        removeComment(commentIndex)
    }
})

function removeComment(commentIndex) {
    fetch('/books/3/delete-comment', {
        method: 'DELETE',
        body: JSON.stringify({
            commentIndex
        })
    }).then(res => res.json()).then(data => console.log(data))
} 