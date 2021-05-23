import React from "react";
import CategoryList from "../../organisms/categoryList/categoryList";
import RentList from "../../organisms/rentList/rentList";
function Home() {
  return (
    <div className="Homepage">
      <CategoryList />
      <RentList />
    </div>
  );
}

export default Home;
