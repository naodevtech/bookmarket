import React from "react";
import { Link } from "react-router-dom";
import "./_category.scss";

function Category({ categories }) {
  return (
    <Link to={`/category/${categories.id}/books`}>
      <div className="box_category">
        <h2>{categories.emoji}</h2>
        <h4>{categories.name}</h4>
      </div>
    </Link>
  );
}

export default Category;
