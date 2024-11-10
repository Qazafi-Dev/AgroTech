import React from "react";
import { IoIosSearch } from "react-icons/io";

function Searchbox() {
  return (
    <div className="search-box position-relative d-flex align-items-center">
      <IoIosSearch className="mr-2" />
      <input type="text" placeholder="Search here..." />
    </div>
  );
}

export default Searchbox;
