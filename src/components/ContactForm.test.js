import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render, fireEvent, cleanup, wait } from '@testing-library/react';
import ContactForm from './ContactForm';

afterEach(cleanup);

it('Renders without crashing', () => {
  const { getByText } = render(
    <HashRouter>
      <ContactForm language="pt" />
    </HashRouter>
  );

  expect(getByText('Work with me!')).toBeInTheDocument();
});

it('Displays an error if user focuses an input and blurs out without typing anything, and hides the error if user types something', () => {
  const { getByTestId, getByText } = render(
    <HashRouter>
      <ContactForm language="pt" />
    </HashRouter>
  );

  fireEvent.focus(getByTestId('form-input-nome'));
  fireEvent.blur(getByTestId('form-input-nome'));

  expect(getByText('Por favor preencha um nome')).toBeInTheDocument();

  fireEvent.change(getByTestId('form-input-nome'), {
    target: {
      nome: 'John Doe'
    }
  });

  expect(getByText('Por favor preencha um nome')).not.toBeInTheDocument();
});

// it('Should show the sidebar on hamburger icon click on mobile', () => {
//   const { getByTestId } = render(
//     <HashRouter>
//       <ContactForm language="pt" />
//     </HashRouter>
//   );

//   expect(getByTestId('sidebar')).toHaveClass('sidebar-wrapper--hidden');

//   fireEvent.click(getByTestId('hamburger-icon'));

//   expect(getByTestId('sidebar')).not.toHaveClass('sidebar-wrapper--hidden');
// });

// it('Should correctly render a list of categories from received props when categories submenu is expanded', () => {
//   const { getByTestId, getByText } = render(
//     <HashRouter>
//       <ContactForm language="pt" />
//     </HashRouter>
//   );

//   fireEvent.click(getByTestId('categoryMenu'));
//   wait(() => {
//     expect(
//       getByText('Design Illustration UI/UX Branding Advertising')
//     ).toBeInTheDocument();
//   });
// });
