export default function authors(authors) {
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
