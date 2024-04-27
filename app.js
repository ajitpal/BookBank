const bookList = document.getElementById('book-list');
const pdfViewer = document.getElementById('pdf-viewer');

// Replace with the actual list of PDF files in your repository
const books = [
    'https://github.com/ajitpal/BookBank/raw/main/book1.pdf',
    'https://github.com/ajitpal/BookBank/raw/main/book2.pdf',
    // Add more book URLs here
];

function renderBookList() {
    bookList.innerHTML = '';
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book.split('/').pop().replace('.pdf', '');
        li.addEventListener('click', () => renderPDFViewer(book));
        bookList.appendChild(li);
    });
}

function renderPDFViewer(pdfUrl) {
    pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
        const viewer = new pdfjsViewer.PDFViewer({
            container: pdfViewer
        });
        viewer.setDocument(pdf);
        viewer.defaultRenderingQueue = pdfRenderingQueue.RENDER_VIEWER;
    });
}

renderBookList();