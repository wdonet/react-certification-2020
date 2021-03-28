import React from 'react';
import CategoryList from '../CategoryList';

const Categories = () => {
  const categoryLinks = [
    { name: 'sports' },
    { name: 'kids' },
    { name: 'tech' },
    { name: 'music' },
  ];

  return (
    <div className="category-table">
      <CategoryList categories={categoryLinks} />
    </div>
  );
};

export default Categories;
