export function authors(authors) {
  return `
    <ul class="authors">
      ${authors.map(author => {
        return `
          <li class="author">
            <h3 class="author__name">${author.firstName} ${author.lastName}</h3>
            ${this.books(author.books)}
          </li>
        `;
      })}
    </ul>
    <section class="add-author">
      <input class="add-author__first-name" type="text" placeholder="Author First Name">
      <input class="add-author__last-name" type="text" placeholder="Author First Name">
      <button class="add-author__submit">Add Author</button>
    </section>
  `;
}

export function books(books) {
  return `
  <ul class="books">
    ${books
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
`;
}

export default {
  authors,
  books
};
