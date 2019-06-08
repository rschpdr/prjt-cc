import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';

it('Renders without crashing', () => {
  const { getByTestId } = render(<Icon />);
  expect(getByTestId('icon')).toBeInTheDocument();
});
