import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
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

it('Should show the sidebar on hamburger icon click on mobile', () => {
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

it('Should correctly render a list of categories from received props when categories submenu is expanded', () => {
  const { getByTestId, getByText } = render(
    <HashRouter>
      <Sidebar
        onCategoryClick={onCategoryClick}
        windowWidth={windowWidth}
        projects={projects}
        language={language}
      />
    </HashRouter>
  );

  fireEvent.click(getByTestId('categoryMenu'));
  wait(() => {
    expect(
      getByText('Design Illustration UI/UX Branding Advertising')
    ).toBeInTheDocument();
  });
});
