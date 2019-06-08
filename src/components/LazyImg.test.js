import React from 'react';
import { render } from '@testing-library/react';
import LazyImg from './LazyImg';

it('Renders without crashing', () => {
  const { getByAltText } = render(<LazyImg alt="test alt text" />);
  expect(getByAltText('test alt text')).toBeInTheDocument();
});
