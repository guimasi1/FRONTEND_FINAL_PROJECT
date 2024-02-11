import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import { getExercises, setPage } from "../redux/actions/exercisesActions";
import { useDispatch } from "react-redux";

const MyPagination = ({ itemsCount, itemsPerPage }) => {
  const [activePage, setActivePage] = useState(1);
  const dispatch = useDispatch();
  const pageCount = Math.ceil(itemsCount / itemsPerPage);
  let items = [];

  for (let number = 1; number <= pageCount; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === activePage}
        onClick={() => {
          setActivePage(number);
          dispatch(getExercises(number - 1));
          setPage(number - 1);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <Pagination className="flex-grow-1 ms-lg-5">{items}</Pagination>
    </div>
  );
};

export default MyPagination;
