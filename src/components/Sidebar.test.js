import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from '@testing-library/react';
import Sidebar from './Sidebar';

afterEach(cleanup);

const onCategoryClick = jest.fn();
const windowWidth = 400;
const projects = [
  { id: 1, fields: ['Design', 'Illustration', 'UI/UX'] },
  { id: 2, fields: ['Branding', 'Advertising'] }
];
const language = 'pt';

it('Renders without crashing', () => {
  const { getByText } = render(
    <HashRouter>
      <Sidebar
        onCategoryClick={onCategoryClick}
        windowWidth={windowWidth}
        projects={projects}
        language={language}
      />
    </HashRouter>
  );

  expect(getByText(/Copyright/)).toBeInTheDocument();
});

it('Should hide the sidebar on hamburger icon click', async () => {
  const { getByTestId } = render(
    <HashRouter>
      <Sidebar
        onCategoryClick={onCategoryClick}
        windowWidth={windowWidth}
        projects={projects}
        language={language}
      />
    </HashRouter>
  );

  expect(getByTestId('sidebar')).toHaveClass('sidebar-wrapper--hidden');

  fireEvent.click(getByTestId('hamburger-icon'));

  expect(getByTestId('sidebar')).not.toHaveClass('sidebar-wrapper--hidden');
});
