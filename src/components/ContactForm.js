import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import FormInput from './FormInput';

const validate = formValues => {
  const errors = {};

  if (!formValues.nome) {
    errors.nome = 'Por favor preencha um nome';
  }

  if (!formValues.email) {
    errors.email = 'Por favor preencha um e-mail';
  }

  if (!formValues.assunto) {
    errors.assunto = 'Por favor preencha o assunto';
  }

  return errors;
};

class ContactForm extends Component {
  state = {
    nome: '',
    email: '',
    assunto: '',
    touched: {
      nome: false,
      email: false,
      assunto: false
    }
  };

  handleBlur = e => {
    this.setState({
      touched: { ...this.state.touched, [e.target.name]: true }
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { touched, ...data } = this.state;

    try {
      const response = await axios.post(
        'https://formcarry.com/s/S5Cq2p_d_Zj',
        data
      );
      return response;
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const errors = validate(this.state);

    const shouldMarkError = (name, errors) => {
      if (this.state.touched[name]) {
        return errors[name];
      }

      return null;
    };

    console.log(errors);
    return (
      <div className="content content--gray-bg">
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <h1 className="content__title">
            Contato
            <strong className="content__title content__title--secondary">
              Work with me!
            </strong>
          </h1>
          <FormInput
            element="input"
            type="text"
            name="nome"
            placeholder="Nome"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error={shouldMarkError('nome', errors)}
          />
          <FormInput
            element="input"
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error={shouldMarkError('email', errors)}
          />
          <FormInput
            element="textarea"
            type="text"
            name="assunto"
            placeholder="Assunto"
            rows="5"
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            error={shouldMarkError('assunto', errors)}
          />
          <input
            className="btn btn--right"
            type="submit"
            value="Enviar"
            disabled={!_.isEmpty(errors)}
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
