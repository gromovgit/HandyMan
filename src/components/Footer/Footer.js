import ListLink from "../../HelpComp/ListLink/ListLink";
import logo from "../../img/logo.svg";
import './Footer.css';
 
 const Footer = () => {
    return (
        <section className="footer-main">
            <div className="container">
                <div className="footer">
            <div className="footer-call">
                <p>Телефонуйте:<span>(406) 555-0120</span> </p>
                <p> Електронна пошта:<p><span> manhhachkt08@gmail.com</span></p></p>
            </div>
            <div className="footer-block">
                <a href="/#" ><img className="footer-logo" src={logo} alt="logo" /> </a>
                <ListLink/>
            </div>
            <div className="footer-adress">
                <p>Адрес:</p>
                <p> Канада, провінція Альберта,<p>регіон Калгарі:</p> </p>
            </div>
            </div>
            </div>
        </section>
      );
 }
  
 export default Footer;