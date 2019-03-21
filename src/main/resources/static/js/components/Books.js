export default function Books(books) {
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