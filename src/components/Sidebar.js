import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import _ from 'lodash';
import MenuItem from './MenuItem';
import CategoryMenu from './CategoryMenu';
import Icon from './Icon';
import Logo from './Logo';
import strings from '../strings';
import handleTranslation from '../helpers/handleTranslation';

const iconSize = '20px';
const { sidebarMenu } = strings.ui;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      portfolioToggle: false,
      sidebarToggle: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.toggleSidebar();
    }
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
                {/* <img src={Logo} className="sidebar__logo-img" alt="logo" /> */}
                <Logo name="logo" />
              </Link>
            </div>

            <div className="sidebar__menu">
              <ul>
                <MenuItem
                  route="/"
                  text={
                    sidebarMenu.home[handleTranslation(this.props.language)]
                  }
                />
                <MenuItem
                  route="/sobre"
                  text={
                    sidebarMenu.about[handleTranslation(this.props.language)]
                  }
                />
                <li onClick={this.onPortfolioClick}>
                  <span>
                    {
                      sidebarMenu.portfolio[
                        handleTranslation(this.props.language)
                      ]
                    }
                  </span>
                </li>
                <CategoryMenu
                  categories={this.state.categories}
                  onCategorieClick={this.props.onCategorieClick}
                  shouldShow={this.state.portfolioToggle}
                />
                <MenuItem
                  route="/contato"
                  text={
                    sidebarMenu.contact[handleTranslation(this.props.language)]
                  }
                />
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
                href="https://dribbble.com/carolcarretto"
                className="social-icons__icon"
              >
                <Icon height={iconSize} width={iconSize} name="dribbble" />
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

export default withRouter(Sidebar);
