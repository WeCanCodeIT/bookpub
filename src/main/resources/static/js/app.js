getRequest('/authors', authors => {
  getAppContext().innerHTML = renderAuthors(authors);
})

function getAppContext() {
  return document.querySelector("#app")
}

function getRequest(location, callback) {
  fetch(location)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.log(err));
}

function renderAuthors(authors) {
  return `
    <ul class="authors">
      ${authors.map(author => {
        return `
          <li class="author">
            <h3 class="author__name">${author.firstName} ${author.lastName}</h3>
            <ul class="books">
              ${renderBooks(author.books)}
            </ul>
          </li>
        `;
      }).join('')}
    </ul>
  `;
}

function renderBooks(books) {
  return books
    .map(book => {
      return `
        <li class="book">
          <h5 class="book__title">${book.title}</h5>
          <p class="book__description">${book.description}</p>
        </li>
      `;
    }).join('')
}