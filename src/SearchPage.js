import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book/Book';
import * as BooksAPI from "./BooksAPI";

class SearchPage extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.setState(() => ({ books: [] }));
  }

  searchBook = (query) => {
    if(query !== '') {
      BooksAPI.search(query).then((books) => {
        this.setState(() => ({ books: books }));
      });
    } else {
      this.setState(() => ({ books: [] }));
    }
  };
  render() {
    return <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">
                Close
              </button>
            </Link>
            <div className="search-books-input-wrapper">
              <input onChange={(e) => this.searchBook(e.target.value)} type="text" placeholder="Search by title or author" />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {typeof this.state.books !== "undefined" ? this.state.books.map(
                  (book) => {
                    let findbook = this.props.library.find(elem => elem.id === book.id)
                    if (typeof findbook !==  "undefined") {
                      return <li key={findbook.id}>
                          <Book book={findbook} onChangeBookStatus={this.props.onChangeBookStatus} />
                        </li>;
                    };
                    return <li key={book.id}>
                        <Book book={book} onChangeBookStatus={this.props.onChangeBookStatus} />
                      </li>;
                  }
                ) : <div />}
            </ol>
          </div>
        </div>
      </div>;
  }
}

export default SearchPage 