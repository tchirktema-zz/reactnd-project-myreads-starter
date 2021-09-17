import React  from 'react';
import { Link } from "react-router-dom";
import Book from './Book/Book'

const LibaryBook = (props) => {


  const onChangeBookStatus = (shelf, book) => {
    if (props.onChangeBookStatus) {
      props.onChangeBookStatus(shelf, book);
    }
  };

  const shelves = [
    { title: "Currently Reading", key: "currentlyReading" },
    { title: "Want To Read", key: "wantToRead" }, 
    { title: "Read", key: "read" }
  ];

  
  return(<div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelve, index) => (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{shelve.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {typeof props[shelve.key] != "undefined" &&
                    props[shelve.key].map((book, index) => {
                      return (
                        <li key={book.id}>
                          <Book
                            book={book}
                            onChangeBookStatus={onChangeBookStatus}
                          />
                        </li>
                      );
                    })}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>);
}

export default LibaryBook 