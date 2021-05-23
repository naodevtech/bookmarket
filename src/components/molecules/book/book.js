import React from "react";

function Book({ book }) {
  return (
    <div className="box_book">
      <div className="box_category">
        <h4>{book ? book.title : null}</h4>
      </div>
    </div>
  );
}

export default Book;
