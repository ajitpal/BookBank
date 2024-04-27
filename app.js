const bookList = document.getElementById('book-list');
const pdfViewer = document.getElementById('pdf-viewer');

// Replace with the actual list of PDF files in your repository
const books = [
    'https://github.com/ajitpal/BookBank/raw/master/Core%20Python.pdf',
    'https://github.com/ajitpal/BookBank/raw/master/97-things-every-software-architect-should-know.pdf',
    // Add more book URLs here
];

pdfjsLib.GlobalWorkerOptions.workerSrc = './pdfjs/pdf.worker.mjs';



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