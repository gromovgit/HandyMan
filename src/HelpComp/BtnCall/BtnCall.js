import {React, useState}from "react";
import './BtnCall.css'
import ModalForm from "../Modal/ModalForm";
const BtnCall = ({onClose, style,  text, isModal}) => {
    
    const [isOpen,  setIsOpen] = useState(false);
  
    // Функция для открывытиfgffя модального окна
    const openModal = () => {
      setIsOpen(true);
     
    };
  
    
    const closeModal = () => {
      setIsOpen(false);
    };
  
    return (
      <>
        <button  style={style} className="button_call" onClick={openModal}>{text}</button>
        {isOpen && <ModalForm  isModal={true} onClose={closeModal} />} 
      </>
    );
  };
 
export default BtnCall;