import React from "react";
import "./_category.scss";
function Category({ props }) {
  return (
    <div className="box_category">
      <h2>{props.emoji}</h2>
      <h4>{props.name}</h4>
    </div>
  );
}

export default Category;
