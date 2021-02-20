import React from "react";
import CategoryList from "./CategoryList";

const categoryLinks = ["sports", "kids", "tech", "music"];

class Categories extends React.Component {
  render() {
    return <CategoryList categories={categoryLinks} />;
  }
}
