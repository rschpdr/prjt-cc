import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

it('Renders without crashing', () => {
  const { getByTestId } = render(<Spinner />);
  expect(getByTestId('spinner')).toBeInTheDocument();
});
