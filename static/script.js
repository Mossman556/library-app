document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/books')
        .then(response => response.json())
        .then(books => {
            const booksList = document.getElementById('books-list');
            books.forEach(book => {
                const listItem = document.createElement('li');
                listItem.textContent = `${book.Title} by ${book.Author}`;
                booksList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching books:', error));
});