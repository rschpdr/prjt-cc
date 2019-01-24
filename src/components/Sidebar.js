import logo from '../assets/images/logo.png';
import React, { Component } from 'react';
import jsonp from 'jsonp';
import _ from 'lodash';
import MenuItem from './MenuItem';
import CategoryMenu from './CategoryMenu';
import Icon from './Icon';

const API_KEY = 'dsLxU0oVIJdF25SQBZEwwEAL7N8aTLE3';
const USERNAME = 'carolcarretto';
const URL = `https://api.behance.net/v2/users/${USERNAME}/projects?client_id=${API_KEY}`;
const iconSize = '24px';

class Sidebar extends Component {
  state = {
    portfolioToggle: false,
    categories: []
  };

  async componentDidMount() {
    const response = await jsonp(URL, null, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let categories = _.uniq(
          _.flatten(data.projects.map(arr => arr.fields))
        );
        this.setState({ categories });
      }
    });
  }

  onPortfolioClick = () => {
    this.setState(prevState => ({
      portfolioToggle: !prevState.portfolioToggle
    }));
  };

  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar">
          <div className="sidebar__logo">
            <img src={logo} className="sidebar__logo-img" />
          </div>

          <div className="sidebar__menu">
            <ul>
              <MenuItem route="/" text="Início" />
              <MenuItem route="/sobre" text="Sobre" />
              <li onClick={this.onPortfolioClick}>Portfolio</li>
              {this.state.portfolioToggle ? (
                <CategoryMenu categories={this.state.categories} />
              ) : null}
              <MenuItem route="/contato" text="Contato" />
            </ul>
          </div>

          <div className="social-icons">
            <a href="" className="social-icons__icon">
              <Icon height={iconSize} width={iconSize} name="facebook" />
            </a>
            <a href="" className="social-icons__icon">
              <Icon height={iconSize} width={iconSize} name="instagram" />
            </a>
            <a href="" className="social-icons__icon">
              <Icon height={iconSize} width={iconSize} name="tumblr" />
            </a>
            <a href="" className="social-icons__icon">
              <Icon height={iconSize} width={iconSize} name="behance" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
