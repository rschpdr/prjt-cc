import React from 'react';
import { Link } from 'react-router-dom';

const CategoryMenu = props => {
  const renderCategories = () => {
    return props.categories.map(categorie => {
      return (
        <li key={categorie}>
          <Link to={`/?filter=${categorie}`}>{categorie}</Link>
        </li>
      );
    });
  };

  return <ul>{renderCategories()}</ul>;
};

export default CategoryMenu;
