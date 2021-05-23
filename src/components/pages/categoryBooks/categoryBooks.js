import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import BookList from "../../organisms/bookList/bookList";
import api from "../../../utils/api";
import "./_categoryBooks.scss";

function CategoryBooks() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "BOOK_FETCH" });
        let booksByCategories = await api.get(`/category/${id}/books`);
        dispatch({ type: "BOOK_FETCH_SUCCESS" });
        dispatch({ type: "BOOK_SET", payload: booksByCategories.data.data });
        setBooks(booksByCategories.data.data);
      } catch (err) {
        dispatch({ type: "BOOK_FETCH_WRONG" });
        dispatch({ type: "BOOK_RESET" });
      }
    }
    fetchData();
  }, [dispatch, id]);

  return (
    <div>
      <BookList books={books} />;
    </div>
  );
}

export default CategoryBooks;
