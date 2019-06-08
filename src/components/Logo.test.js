import React from 'react';
import { render } from '@testing-library/react';
import Logo from './Logo';

it('Renders without crashing', () => {
  const { getByTestId } = render(<Logo />);
  expect(getByTestId('logo')).toBeInTheDocument();
});
