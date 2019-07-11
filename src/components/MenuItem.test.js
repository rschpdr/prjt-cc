import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import MenuItem from './MenuItem';

it('Should render without crashing', () => {
  const { getByText } = render(
    <HashRouter>
      <MenuItem route="home" text="Home" />
    </HashRouter>
  );

  expect(getByText('Home')).toBeInTheDocument();
});
