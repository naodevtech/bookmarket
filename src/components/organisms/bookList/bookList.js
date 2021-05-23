import React from "react";
import Book from "../../molecules/book/book";
import "./_bookList.scss";

function BookList({ books }) {
  return (
    <div className="container_book_list">
      <h2>Livres trouvés ({books.length}) 🔍 </h2>
      <div className="box_books">
        {books.map((book, index) => {
          return <Book key={book.id} book={book}></Book>;
        })}
      </div>
    </div>
  );
}

export default BookList;
