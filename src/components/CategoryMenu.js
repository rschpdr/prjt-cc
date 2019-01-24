import React from 'react';

const CategoryMenu = props => {
  const renderCategories = () => {
    return props.categories.map(categorie => {
      return <li key={categorie}>{categorie}</li>;
    });
  };

  return <ul>{renderCategories()}</ul>;
};

export default CategoryMenu;
