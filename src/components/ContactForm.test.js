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
  const { getByTestId, getByText, queryByText } = render(
    <HashRouter>
      <ContactForm language="pt" />
    </HashRouter>
  );

  fireEvent.focus(getByTestId('form-input-nome'));
  fireEvent.blur(getByTestId('form-input-nome'));

  expect(getByText('Por favor preencha um nome')).toBeInTheDocument();

  fireEvent.change(getByTestId('form-input-nome'), {
    target: {
      value: 'John Doe'
    }
  });

  expect(queryByText('Por favor preencha um nome')).toBeNull();
});

it('Should display all errors if user tries to submit a blank form', () => {
  const { getByTestId, getByText } = render(
    <HashRouter>
      <ContactForm language="pt" />
    </HashRouter>
  );

  fireEvent.click(getByTestId('contact-form-submit-btn'));

  expect(getByText('Por favor preencha um nome')).toBeInTheDocument();
  expect(getByText('Por favor preencha um e-mail')).toBeInTheDocument();
  expect(getByText('Por favor preencha o assunto')).toBeInTheDocument();
});

it('Displays a loading icon while waiting for the request to resolve', () => {
  const { getByTestId } = render(
    <HashRouter>
      <ContactForm language="pt" />
    </HashRouter>
  );

  fireEvent.change(getByTestId('form-input-nome'), {
    target: {
      value: 'John Doe'
    }
  });

  fireEvent.change(getByTestId('form-input-email'), {
    target: {
      value: 'john@doe.com'
    }
  });

  fireEvent.change(getByTestId('form-input-assunto'), {
    target: {
      value: 'lorem ipsum dolor amet'
    }
  });

  fireEvent.click(getByTestId('contact-form-submit-btn'));

  expect(getByTestId('spinner')).toBeInTheDocument();
});
