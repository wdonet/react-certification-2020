import React from 'react';

const CategoryList = (props) => {
  const categoryLinks = props.categories;

  //const listItems = categoryLinks.map((category) =>
  //  <li key={category.name}> {category.name} </li>
  //);

  return (
    <ul className="category-list">
      {categoryLinks.map((category) => (
        <li key={category.name} className="category-item">
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
