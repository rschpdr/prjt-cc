import React from 'react';
import { render } from '@testing-library/react';
import ImgLoader from './ImgLoader';

it('Renders without crashing', () => {
  const { getByTestId } = render(<ImgLoader />);
  expect(getByTestId('imgloader')).toBeInTheDocument();
});
