import "./ModalForm.css";
import x from '../../img/icons/cross.svg'
import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
const ModalForm = ({onClose, isModal}) => {

  const {t} = useTranslation();
 const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  postcode: '',
  service: ''

 });


  // const [modal, setModal] = useState(false)

const handleChange = (e) =>{
  const { name, value} = e.target;
  console.log(e.target);
  
  setFormData({
    ...formData,
    [name]: value
  })
};


const handleSubmit = (e) =>{
   e.preventDefault();

   emailjs.sendForm('service_grg0lzp', 'template_7rhs0e6', e.target, 'EmpF6HUy0oyhojLKy')
   .then((result) => {
     alert('Сообщение успешно отправлено!');
   }, (error) => {
     alert('Ошибка при отправке сообщения.');
   });
   e.target.reset();
};


  const clickbaground = (e)=>{
    if(e.target === e.currentTarget){
      onClose();
    }
  }

  return (
    <div className={isModal ? 'modal-form' : 'modal-based'} onClick={clickbaground}>
      <div className={isModal ? "modal-content" : "modal" }>
        <button  onClick={onClose} className={isModal ? "btn-close" : 'none'}><img src={x} alt="" /></button>
        <h2>{t("Do you want to order a service?")}</h2>
        <h3>{t("Leave a request for a free consultation")}</h3>
        <form onSubmit={handleSubmit}>
          <div className="group">
          <div className="form-group">
            <input
              value={formData.firstName}
              onChange={handleChange}
              name="firstName"
              placeholder={t("Name")}
              type="text"
              id="name"
            
              required
            />
          </div>
          <div className="form-group">
            <input
              value={formData.lastName}
              onChange={handleChange}
              name="lastName"
              placeholder={t("Surname")}
              type="text"
              id="surnname"
             
              required
            />
          </div>
          <div className="form-group">
            <input
              value={formData.phone}
              onChange={handleChange}
              name="phone"
              placeholder={t("Phone")}
              type="tel"
              id="phone"
              
              required
            />
          </div>
          <div className="form-group">
            <input
              
              value={formData.postcode}
              onChange={handleChange}
              name="postcode"
              placeholder={t("Zip code")}
              type="text"
              id="postcode"
              
              required
            />
          </div>
          </div>
       

          <div className="form-group">
            <input
            value={formData.email}
            onChange={handleChange}
              name="email"
              type="email"
              placeholder={t("Email")}
              
              id="email"
             
              required
            />
          </div>

          <div className="form-chan">
          
           
            <select id="service" name="service" 
            value={formData.service}
            onChange={handleChange}  required>
            <div className="btn-list">
              <button></button>
            </div>
              <option value="" disabled selected>
              {t("Select a service")}
              </option>
              <option value="Folding furniture"> {t("Folding furniture")}</option>
              <option value="Installation of cornice"> {t("Installation of cornice")}</option>
              <option value="Installing the TV"> {t("Installing the TV")}</option>
              <option value="Plasterboard works"> {t("Plasterboard works")}</option>
              <option value="Delivery + moving assistance"> {t("Delivery + moving assistance")}</option>
              <option value="Floor installation"> {t("Floor installation")}</option>
              <option value="Mowing the lawn"> {t("Mowing the lawn")}</option>
              
            </select>
          </div>
          <h4>{t('I want to receive a message as a text alert')}</h4>
          <h5>{t('By submitting the form, you agree to receive calls, messages or emails from D&S Handyman! by the indicated contacts.Message charges may apply. Send STOP to opt out of messages.')}
           </h5>
          <button type="submit" className="button_call btn-ara">
           {t("Free consultation")} 
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
