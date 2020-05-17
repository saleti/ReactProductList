import React, { useState } from "react";
import "./styles.css";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default function FilterableProductTable(props) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = text => {
    setFilterText(text);
    console.log(filterText);
  };

  const handleInStockChange = change => {
    setInStockOnly(change);
    console.log(inStockOnly);
  };

  return (
    <>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockChange={handleInStockChange}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={props.products}
      />
    </>
  );
}
