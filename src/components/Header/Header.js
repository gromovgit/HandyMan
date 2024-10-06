import Navbar from "../Navbar/Navbar";
// import bg from '../../img/Hiro.png';
import { useTranslation } from "react-i18next";
import React from "react";

import "./Header.css";
import ContUs from "../../HelpComp/ContUs/ContUs";
import ListLink from "../../HelpComp/ListLink/ListLink";
import BtnCall from "../../HelpComp/BtnCall/BtnCall";
const Header = () => {
  const {t} = useTranslation();
  return (
    <section className="Header">
      <div className="container">
        <Navbar />

        <div className="header__title">
          <div className="header__text">
            <h1>D&S Handyman!</h1>
            <h2>{t('A reliable assistant for your home')}</h2>
            <div className="list">
              <ListLink/>
            </div>
            <div>
              <div className="">
               <BtnCall  style={{ padding: '18px', fontSize: '20px' }}  text="Free consultation"/>
              </div>
            </div>
          </div>
          <div className="cont">
          <ContUs />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Header;
