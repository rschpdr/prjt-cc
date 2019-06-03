import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import _ from 'lodash';
import FormInput from './FormInput';
import { FORMCARRY_API_BASE_URL } from '../constants';
import Spinner from './Spinner';
import strings from '../strings';
import handleTranslation from '../helpers/handleTranslation';

const { contact } = strings.pages;

const validate = (formValues, language) => {
  const errors = {};

  if (!formValues.nome) {
    errors.nome = contact.inputErrorMessages.name[handleTranslation(language)];
  }

  if (!formValues.email) {
    errors.email =
      contact.inputErrorMessages.email[handleTranslation(language)];
  }

  if (!formValues.assunto) {
    errors.assunto =
      contact.inputErrorMessages.message[handleTranslation(language)];
  }

  return errors;
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  componentDidMount() {
    document.title = `Carol Carretto | ${
      strings.ui.sidebarMenu.contact[handleTranslation(this.props.language)]
    }`;
  }

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
        // 'https://formcarry.com/s/S5Cq2p_d_Zj',
        `${FORMCARRY_API_BASE_URL}/${process.env.REACT_APP_FORMCARRY_API_KEY}`,
        data
      );

      if ((response.data.status = 200)) {
        this.setState({
          isPostingData: false,
          postResult:
            contact.submitMessages.success[
              handleTranslation(this.props.language)
            ]
        });
      } else {
        this.setState({
          isPostingData: false,
          postResult:
            contact.submitMessages.error[handleTranslation(this.props.language)]
        });
      }
      return response;
    } catch (e) {
      this.setState({
        isPostingData: false,
        postResult:
          contact.submitMessages.error[handleTranslation(this.props.language)]
      });
    }
  };

  render() {
    const errors = validate(this.state, this.props.language);

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
              {contact.header.pt}
              <strong className="content__title content__title--secondary">
                {contact.header.en}
              </strong>
            </h1>
          </Fade>
          <Fade bottom>
            <FormInput
              element="input"
              type="text"
              name="nome"
              placeholder={
                contact.inputPlaceholders.name[
                  handleTranslation(this.props.language)
                ]
              }
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
              placeholder={
                contact.inputPlaceholders.email[
                  handleTranslation(this.props.language)
                ]
              }
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
              placeholder={
                contact.inputPlaceholders.message[
                  handleTranslation(this.props.language)
                ]
              }
              rows="5"
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              error={shouldMarkError('assunto', errors)}
            />
          </Fade>
          <div className="contact-form__result">
            {this.state.isPostingData === null ? (
              <Fade bottom>
                <button className="btn btn--right" type="submit">
                  {contact.submitButton[handleTranslation(this.props.language)]}
                </button>
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
