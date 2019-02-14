import logo from '../assets/images/logo.png';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import MenuItem from './MenuItem';
import CategoryMenu from './CategoryMenu';
import Icon from './Icon';

const iconSize = '24px';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      portfolioToggle: false,
      sidebarToggle: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projects !== this.props.projects) {
      let categories = _.uniq(
        _.flatten(nextProps.projects.map(arr => arr.fields))
      );
      this.setState({ categories });
    }
  }

  onPortfolioClick = () => {
    this.setState(prevState => ({
      portfolioToggle: !prevState.portfolioToggle
    }));
  };

  toggleSidebar = () => {
    this.setState(prevState => ({
      sidebarToggle: !prevState.sidebarToggle,
      portfolioToggle: false
    }));
  };

  setSidebarVisibility = () => {
    let className;
    if (this.props.windowWidth < 1010) {
      className = this.state.sidebarToggle
        ? 'sidebar-wrapper'
        : 'sidebar-wrapper sidebar-wrapper--hidden';
    } else {
      className = 'sidebar-wrapper';
    }

    return className;
  };

  render() {
    return (
      <>
        <header className="header-menu">
          <div className="header-menu__icon" onClick={this.toggleSidebar}>
            <div className="header-menu__icon__middle" />
          </div>
        </header>
        <div className={this.setSidebarVisibility()}>
          <div className="sidebar">
            <div className="sidebar__logo">
              <Link to="/">
                <img src={logo} className="sidebar__logo-img" alt="logo" />
              </Link>
            </div>

            <div className="sidebar__menu">
              <ul>
                <MenuItem route="/" text="Início" />
                <MenuItem route="/sobre" text="Sobre" />
                <li onClick={this.onPortfolioClick}>Portfolio</li>
                {this.state.portfolioToggle ? (
                  <CategoryMenu
                    categories={this.state.categories}
                    onCategorieClick={this.props.onCategorieClick}
                  />
                ) : null}
                <MenuItem route="/contato" text="Contato" />
              </ul>
            </div>

            <div className="social-icons">
              <a
                href="https://www.facebook.com/carolcarrettoart/"
                className="social-icons__icon"
              >
                <Icon height={iconSize} width={iconSize} name="facebook" />
              </a>
              <a
                href="https://www.instagram.com/carolcarretto/"
                className="social-icons__icon"
              >
                <Icon height={iconSize} width={iconSize} name="instagram" />
              </a>
              <a
                href="http://carolsketches.tumblr.com/"
                className="social-icons__icon"
              >
                <Icon height={iconSize} width={iconSize} name="tumblr" />
              </a>
              <a
                href="https://www.behance.net/carolcarretto"
                className="social-icons__icon"
              >
                <Icon height={iconSize} width={iconSize} name="behance" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;
