import React from "react";

export default function ProductCategoryRow(props) {
  const category = props.category;

  return (
    <tr>
      <th colspan="2">{category}</th>
    </tr>
  );
}
