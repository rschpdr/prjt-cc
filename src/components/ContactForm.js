import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
  state = {
    nome: '',
    email: '',
    assunto: '',
    error: null
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://formcarry.com/s/S5Cq2p_d_Zj',
        this.state
      );
      this.setState({ sucess: true });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    console.log(this.state.message);
    return (
      <div className="content content--gray-bg">
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <h1 className="content__title">
            Contato
            <strong className="content__title content__title--secondary">
              Work with me!
            </strong>
          </h1>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={this.handleChange}
          />
          <textarea
            type="text"
            name="assunto"
            rows="5"
            placeholder="Assunto"
            onChange={this.handleChange}
          />
          <input className="btn btn--right" type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

export default ContactForm;
