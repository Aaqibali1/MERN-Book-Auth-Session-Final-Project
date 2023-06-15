import React, { useState } from 'react';
import './Card.css'
function Card() {
  const [bookName, setBookName] = useState('');
  const [writerName, setWriterName] = useState('');

  const handleBookNameChange = (e) => {
    setBookName(e.target.value);
  };

  const handleWriterNameChange = (e) => {
    setWriterName(e.target.value);
  };

  const handleAddBook = async () => {
    const bookData = {
        title: bookName, // Replace with the actual book title
        author:writerName, // Replace with the actual author name
      };
    await  fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Book added successfully:', data);
          setBookName('')
          setWriterName('')
          // Handle the successful addition of the book and provide a response if needed
        })
        .catch((error) => {
          console.error('Failed to add the book:', error);
          // Handle the error and provide an appropriate response
        });
      
};

  return (
    <div className="card">
      <div className="input-container">
        <input
          type="text"
          placeholder="Book name"
          value={bookName}
          onChange={handleBookNameChange}
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Writer name"
          value={writerName}
          onChange={handleWriterNameChange}
        />
      </div>
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
}

export default Card;
