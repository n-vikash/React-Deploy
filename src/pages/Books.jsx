import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <>
      <div className="books">
        <Link className="book-btn" to="materials">
          Materials
        </Link>
        <Link className="book-btn" to="novels">
          Novels
        </Link>
        <Link className="book-btn" to="papars">
          Papars
        </Link>
      </div>
      <Outlet />
    </>
  );
};
export default Books;
