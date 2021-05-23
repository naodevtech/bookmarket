import React from "react";
import "./_rent.scss";

function Book({ rent }) {
  return (
    <div className="box_rent">
      <h4>{rent.in}</h4>
      <h4>{rent.back}</h4>
    </div>
  );
}

export default Book;
