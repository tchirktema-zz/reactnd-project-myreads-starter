import React from 'react';

const Book = (props) => {
    
    
  const onChangeBookStatus=(event,book) => {
      event.preventDefault();
      if(props.onChangeBookStatus){
          props.onChangeBookStatus(event.target.value,book);
      }
  }
  return(
    <div>
      {typeof props.book !== "undefined" ? <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${typeof props.book.imageLinks != "undefined" && props.book.imageLinks["thumbnail"]})` }} />
            <div className="book-shelf-changer">
              <select defaultValue={props.book.shelf || "none"} onChange={(e) => onChangeBookStatus(e, props.book)}>
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
            {props.book.title}
          </div>
          <div className="book-authors">
            {typeof props.book.authors !== "undefined" && props.book.authors.join()}
          </div>
        </div> : <div />}
    </div>
  )
}

export default Book 