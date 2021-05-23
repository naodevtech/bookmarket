import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rent from "../../molecules/rent/rent";
import "./_rentList.scss";
import api from "../../../utils/api";

function BookList({ books }) {
  const appState = useSelector((state) => state);
  const dispatch = useDispatch();
  const [rents, setRents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "RENT_FETCH" });
        let rents = await api.get(
          `/rents/users/${appState.auth.user.values.id}`
        );
        // let rents = await api.get(
        //   `/rents/users/${appState.auth.user.values.id}`
        // );
        console.log(rents);
        dispatch({ type: "RENT_FETCH_SUCCESS" });
        dispatch({ type: "RENT_SET", payload: rents.data.data });
        setRents(rents.data.data);
      } catch (err) {
        dispatch({ type: "RENT_FETCH_WRONG" });
        dispatch({ type: "RENT_RESET" });
      }
    }
    fetchData();
  }, [appState.auth.user.values.id, dispatch]);

  return (
    <div className="container_rent_list">
      <h2>Vos dernières locations 📅</h2>
      <div className="box_rents">
        {rents.map((rent, index) => {
          return <Rent key={rent.id} rent={rent}></Rent>;
        })}
      </div>
    </div>
  );
}

export default BookList;
