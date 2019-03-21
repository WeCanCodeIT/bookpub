getRequest('/authors', authors => {
  getAppContext().innerHTML = renderAuthors(authors);
})

on(getAppContext(), 'click', () => {
  if (event.target.classList.contains('add-author__submit')) {
    // const submitButton = event.target
    const firstName = document.querySelector('.add-author__first-name').value
    const lastName = document.querySelector('.add-author__last-name').value

    postRequest('/authors/add', {
      firstName: firstName,
      lastName: lastName
    }, (authors) => console.log(authors))
  }
})

function getAppContext() {
  return document.querySelector("#app")
}

// API functions

function getRequest(location, callback) {
  fetch(location)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.log(err));
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody)
  })
    .then(response => response.json())
    .then(data => callback(data))
    .catch(err => console.log(err));
}

// Rendering Functions

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
    <section class="add-author">
      <input type="text" class="add-author__first-name" placeholder="Author First Name">
      <input type="text" class="add-author__last-name" placeholder="Author Last Name">
      <button class="add-author__submit">Add Author</button>
    </section>
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

// Event Functions

function on(element, eventType, callback) {
  element.addEventListener(eventType, (event) => callback(event))
}