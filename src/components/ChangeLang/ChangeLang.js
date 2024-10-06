// src/components/YourComponent.js
import React, { useState } from 'react';
import  './change.css';
import { useTranslation } from 'react-i18next';
import use from '../../img/icons/use.png'
import ua from '../../img/icons/ukraine.png';

// const ChangeLang = () => {
//   const { t, i18n } = useTranslation();

  // Функция для смены языка
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };
  const ChangeLang = () => {
    const { i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
  // const [leng, setLeng] = useState('')
    const toggleMenu = () => setIsOpen(!isOpen);
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      setIsOpen(false); // Закрыть меню после выбора языка
    };



  return (
    <div  className="dropdown-container">
      <div  className="dropdown-button" onClick={toggleMenu}>
      <div  >
           {i18n.language === 'en' ? <div><img style={{width:"20px"}} src={use} alt="English" />Eng</div> :  <div><img style={{width:"20px"}} src={ua} alt="Украинский" />Ua</div>}
           {/* {i18n.language === 'en' ? 'English' : i18n.language === 'ru' ? 'Русский' : 'Español'} */}
        </div>
        {/* <div  className="menu-item " onClick={() => changeLanguage('ua')}>
          <img style={{width:"20px"}} src={ua} alt="Украинский" />
          
        </div> */}
{/* <div className='dropdown-menu'>
<img style={{width:"20px"}} src={use} alt="English" />
</div>
        {/* {i18n.language === 'en' ? 'English' : i18n.language === 'ru' ? 'Русский' : 'Español'} */}
      {/* </div> */} 
      <div className={`dropdown-menu show ${isOpen ? 'show': 'hide'}`}>


      
        <div  className="menu-item " onClick={() => changeLanguage('en')}>
          <img style={{width:"20px"}} src={use} alt="English" />
          
        </div>
        <div   className="menu-item " onClick={() => changeLanguage('ua')}>
          <img style={{width:"20px"}} src={ua} alt="Украинский" />
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeLang;