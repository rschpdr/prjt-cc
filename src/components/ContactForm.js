import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import _ from 'lodash';
import FormInput from './FormInput';
import Spinner from './Spinner';

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
    },
    isPostingData: null,
    postResult: null
  };

  handleBlur = e => {
    this.setState({
      touched: { ...this.state.touched, [e.target.name]: true }
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e, errors) => {
    e.preventDefault();

    const { touched, isPostingData, postResult, ...data } = this.state;
    const isAllBlank = _.values(data).every(_.isEmpty);

    // If all fields are blank, return this function and show all errors
    if (isAllBlank) {
      return this.setState({
        touched: _.mapValues(this.state.touched, () => true)
      });
    }

    // Return this function if there are errors
    if (!_.isEmpty(errors)) {
      return;
    }

    try {
      this.setState({ isPostingData: true });

      const response = await axios.post(
        'https://formcarry.com/s/S5Cq2p_d_Zj',
        data
      );

      if ((response.data.status = 200)) {
        this.setState({
          isPostingData: false,
          postResult: 'Sua mensagem foi enviada! Logo entrarei em contato ;)'
        });
      } else {
        this.setState({
          isPostingData: false,
          postResult:
            'Desculpe! Algo deu errado e sua mensagem não pôde ser enviada. Por favor, me avise pelas redes sociais ou e-mail.'
        });
      }
      return response;
    } catch (e) {
      this.setState({
        isPostingData: false,
        postResult:
          'Desculpe! Algo deu errado e sua mensagem não pôde ser enviada. Por favor, me avise pelas redes sociais ou e-mail.'
      });
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

    return (
      <div className="content content--gray-bg">
        <form
          className="contact-form"
          onSubmit={e => this.handleSubmit(e, errors)}
        >
          <Fade bottom>
            <h1 className="content__title">
              Contato
              <strong className="content__title content__title--secondary">
                Work with me!
              </strong>
            </h1>
          </Fade>
          <Fade bottom>
            <FormInput
              element="input"
              type="text"
              name="nome"
              placeholder="Nome"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={shouldMarkError('nome', errors)}
            />
          </Fade>
          <Fade bottom>
            <FormInput
              element="input"
              type="email"
              name="email"
              placeholder="E-mail"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={shouldMarkError('email', errors)}
            />
          </Fade>
          <Fade bottom>
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
          </Fade>
          <div className="contact-form__result">
            {this.state.isPostingData === null ? (
              <Fade bottom>
                <input
                  className="btn btn--right"
                  type="submit"
                  value="Enviar"
                />
              </Fade>
            ) : this.state.isPostingData ? (
              <Spinner />
            ) : (
              <Fade bottom>{this.state.postResult}</Fade>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
