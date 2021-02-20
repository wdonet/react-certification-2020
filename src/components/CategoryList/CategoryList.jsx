import React from "react";

function CategoryList(props) {
  const categories = props.categoryLinks;
  const listItems = categories.map((categories) => (
    <CategoryItem key={props.key.toString()} value={categories} />
  ));
  return <ul>{listItems}</ul>;
}

function CategoryItem(props) {
  return <li>{props.value}</li>;
}