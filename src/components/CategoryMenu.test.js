import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import CategoryMenu from './CategoryMenu';

const categories = ['UI/UX', 'Advertising', 'Design'];

it('Should render without crashing', () => {
  const { getByText } = render(
    <HashRouter>
      <CategoryMenu categories={categories} />
    </HashRouter>
  );

  expect(getByText('UI/UX')).toBeInTheDocument();
});

it('Should hide the category menu when prop is false', () => {
  const { getByTestId } = render(
    <HashRouter>
      <CategoryMenu categories={categories} shouldShow={false} />
    </HashRouter>
  );

  expect(getByTestId('InnerCategoryMenu')).not.toHaveClass(
    'categories-menu--visible'
  );
});
