import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import api from "../../../utils/api";
import Category from "../../molecules/category/category";
import "./_categoryList.scss";

function CategoryList() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "CATEGORY_FETCH" });
        let categories = await api.get("/categories");
        dispatch({ type: "CATEGORY_FETCH_SUCCESS" });
        dispatch({ type: "CATEGORY_SET", payload: categories.data.data });
        setCategories(categories.data.data);
      } catch (err) {
        dispatch({ type: "CATEGORY_FETCH_WRONG" });
        dispatch({ type: "CATEGORY_RESET" });
      }
    }
    fetchData();
  }, [dispatch]);

  return (
    <div className="container_category_list">
      <h2>Catégories 🎯</h2>
      <div className="box_categories">
        {categories.map((category, index) => {
          return <Category key={category.id} categories={category}></Category>;
        })}
      </div>
    </div>
  );
}

export default CategoryList;
