import React from 'react';

const CategoryMenu = props => {
  const renderCategories = () => {
    return props.categories.map(categorie => {
      return (
        <li key={categorie} onClick={props.onCategorieClick}>
          {categorie}
        </li>
      );
    });
  };

  return <ul>{renderCategories()}</ul>;
};

export default CategoryMenu;
