import logo from '../assets/images/logo.png';
import React, { Component } from 'react';
import MenuItem from './MenuItem';
import CategoryMenu from './CategoryMenu';
import Icon from './Icon';

const iconSize = '24px';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioToggle: false
    };
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
                <CategoryMenu
                  categories={this.props.categories}
                  onCategorieClick={this.props.onCategorieClick}
                />
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
