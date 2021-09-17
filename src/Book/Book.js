import React, { Component } from 'react';

class Book extends Component {
    
    
    onChangeBookStatus=(event,book) => {
        event.preventDefault();
      
        if(this.props.onChangeBookStatus){
            this.props.onChangeBookStatus(event.target.value,book);
        }
    }
    render(){
        return <div>
            {typeof this.props.book !== "undefined" ? <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${typeof this.props.book.imageLinks != "undefined" && this.props.book.imageLinks["thumbnail"]})` }} />
                  <div className="book-shelf-changer">
                    <select defaultValue={this.props.book.shelf || "none"} onChange={(e) => this.onChangeBookStatus(e, this.props.book)}>
                      <option value="move" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">
                  {this.props.book.title}
                </div>
                <div className="book-authors">
                  {typeof this.props.book.authors !== "undefined" && this.props.book.authors.join()}
                </div>
              </div> : <div />}
          </div>;
    }
}

export default Book 