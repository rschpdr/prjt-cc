import React from 'react';

const FormInput = props => {
  const CustomTag = props.element;
  const className = props.error ? 'error' : '';
  return (
    <div className="contact-form__input">
      <CustomTag
        className={className}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        rows={props.rows}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      <span>{props.error}</span>
    </div>
  );
};

export default FormInput;
