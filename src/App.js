import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage';
import { Route } from "react-router-dom";
import LibaryBook from './LibaryBook';

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    read: [],
    wantToRead : []
  };

  componentDidMount() {
    this.fetchBooks();
  }

  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.filterBookByShelf(books);
    });
  }

  filterBookByShelf = (books) => {
    const filterBooks  = books.reduce((acc, item) => {
      if (!acc[item.shelf]) {
        acc[item.shelf] = [];
      }
      acc[item.shelf].push(item);
      return acc;
    }, {});
    this.setState((currentState) => ({
      read: filterBooks["read"],
      currentlyReading: filterBooks["currentlyReading"],
      wantToRead: filterBooks["wantToRead"],
      books: books
    }));
    
  }

  onShowSearchPage = (status) => {
    console.log(status);
    this.setState(() => ({
      showSearchPage: status,
    }));
  };

  onChangeBookStatus = (shelf,book) => {
    BooksAPI.update(book,shelf).then((res) => {
      this.fetchBooks();
    });
  }

  

  render() {
    return <div className="app">
        <Route exact path="/" render={
          () => <LibaryBook 
            onChangeBookStatus={this.onChangeBookStatus} 
            currentlyReading = {this.state.currentlyReading}
            read = {this.state.read}
            wantToRead = {this.state.wantToRead}
            />} />
        <Route  path="/search" render={() => <SearchPage 
          onChangeBookStatus={this.onChangeBookStatus}
          library={this.state.books}/>} />
        
      </div>;
  }
}

export default BooksApp
