import Books from './Books'

export default function Authors(authors) {
    return `
      <ul class="authors">
        ${authors.map(author => {
            return `
                <li class="author">
                <h3 class="author__name">${author.firstName} ${author.lastName}</h3>
                <ul class="books">
                    ${Books(author.books)}
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