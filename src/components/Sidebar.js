import logo from '../assets/images/logo.png';
import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import Icon from './Icon';

const iconSize = '24px';

const Sidebar = () => {
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
            <MenuItem route="/portfolio" text="Portfolio" />
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
};

export default Sidebar;
