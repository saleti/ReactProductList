import React from "react";

export default function SearchBar(props) {
  const handleChange = event => {
    props.onFilterTextChange(event.target.value);
  };
  const handleInStockChange = event => {
    props.onInStockChange(event.target.checked);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="search"
        value={props.filterText}
        onChange={handleChange}
      />
      <p>
        <input
          type="checkbox"
          checked={props.inStockOnly}
          onChange={handleInStockChange}
        />{" "}
        Only show products in stock
      </p>
    </form>
  );
}
