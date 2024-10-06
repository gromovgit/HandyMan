import React  from "react";
import { useState } from "react";
import logo from "../../img/logo.svg";
import ContUs from "../../HelpComp/ContUs/ContUs";
// import { NavLink, Router } from "react-router-dom";
import BtnCall from "../../HelpComp/BtnCall/BtnCall";
import "./Navbar.css";
import ListLink from "../../HelpComp/ListLink/ListLink";
import ChangeLang from "../ChangeLang/ChangeLang";
import { useTranslation } from "react-i18next";
// import { useState } from "react";

const Navbar = () => {
  const {t} = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="main">
      <div className="container">
        {/* <Router> */}
        <div className="nav_main">
          <div className="logo">
            <img src={logo} alt="logo" />
            <span>D&S Handyman!</span>
          </div>
          <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <div className="logo">
            <img src={logo} alt="logo" />
            <span>D&S Handyman!</span>
          </div>
          <li><a href="/">{t('About us')} </a></li>
          <li><a href="/menu">{t('Services')}</a></li>
          <li><a href="/about">{t('Reviews')}</a></li>
          <li><a href="/contact">{t('Contacts')}</a></li>
          <ChangeLang/>
          <div className={`${isOpen ? 'conts' : 'none'}`}>
          <div className="text__cont">
        
                <p>Телефонуйте: (406) 555-0120</p>
                <p>Електронна пошта: manhhachkt08@gmail.com</p>
                <p>Адрес: Канада, провінція Альберта, регіон Калгарі.</p>
                <ListLink/>
            </div>
          </div>
          
          <div className="btn-about">
        <BtnCall text={t("Get in touch")} />
        </div>
        </ul>
        
      </div>
       
          
      </div>
    </div> 
  );
};

export default Navbar;
