import React, { useState } from 'react';
import PDFViewer from './PDFViewer';

const Catalog = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBooks = books.filter((book) =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1>BookBank</h1>
      </header>
      <div className="container">
        <div className="sidebar">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search books..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        <nav>
          <ul>
            {filteredBooks.map((book, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={() => handleBookClick(book)}
                  title={book.name}
                >
                  {book.name} 

                  
                   {/* {book.name.length > 30
                    ? `${book.name.substring(0, 30)}...`
                    : book.name}  */}
                </a>
              </li>
            ))}
          </ul>
        </nav>
         </div>
        {selectedBook && (
          <div className="pdf-viewer">
            <PDFViewer pdfUrl={selectedBook.url} />
          </div>
        )}
      </div>
      <footer>&copy; BookBank</footer>
    </div>
  );
};

export default Catalog;