import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import About from './About';

it('Should render without crashing', () => {
  const { getByText } = render(
    <HashRouter>
      <About language="pt" />
    </HashRouter>
  );

  expect(getByText('Quem sou eu?')).toBeInTheDocument();
});
