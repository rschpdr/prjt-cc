import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FormInput from './FormInput';

it('Renders without crashing', () => {
  const { getByPlaceholderText } = render(
    <FormInput element="input" type="text" placeholder="Insert a name" />
  );
  expect(getByPlaceholderText('Insert a name')).toBeInTheDocument();
});

it('Calls the correct event handler', () => {
  const onChange = jest.fn();
  const { getByPlaceholderText } = render(
    <FormInput
      element="input"
      type="text"
      placeholder="Insert a name"
      onChange={onChange}
    />
  );
  fireEvent.change(getByPlaceholderText('Insert a name'), {
    target: { value: 'test' }
  });
  fireEvent.blur(getByPlaceholderText('Insert a name'));
  expect(onChange).toHaveBeenCalled();
});

it('Calls the correct event handler', () => {
  const onBlur = jest.fn();
  const { getByPlaceholderText } = render(
    <FormInput
      element="input"
      type="text"
      placeholder="Insert a name"
      onBlur={onBlur}
    />
  );
  fireEvent.blur(getByPlaceholderText('Insert a name'));
  expect(onBlur).toHaveBeenCalled();
});

it("Displays error message when there's an error", () => {
  const { getByText } = render(
    <FormInput
      element="input"
      type="text"
      placeholder="Insert a name"
      error="Please insert a name"
    />
  );
  expect(getByText('Please insert a name')).toBeInTheDocument();
});
