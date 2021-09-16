import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Book from './Book/Book'
class LibaryBook extends Component {
  onChangeBookStatus = (shelf, book) => {
    if (this.props.onChangeBookStatus) {
      this.props.onChangeBookStatus(shelf, book);
    }
  };
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {typeof this.props.currentlyReading != "undefined" &&
                    this.props.currentlyReading.map((book, index) => {
                      return (
                        <li key={book.id}>
                          <Book
                            book={book}
                            onChangeBookStatus={this.onChangeBookStatus}
                          />
                        </li>
                      );
                    })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {typeof this.props.wantToRead != "undefined" &&
                    this.props.wantToRead.map((book, index) => {
                      return (
                        <li key={book.id}>
                          <Book
                            book={book}
                            onChangeBookStatus={this.onChangeBookStatus}
                          />
                        </li>
                      );
                    })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {typeof this.props.read != "undefined" &&
                    this.props.read.map((book, index) => {
                      return (
                        <li key={book.id}>
                          <Book
                            book={book}
                            onChangeBookStatus={this.onChangeBookStatus}
                          />
                        </li>
                      );
                    })}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default LibaryBook 