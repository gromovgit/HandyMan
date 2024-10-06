import BtnCall from "../../HelpComp/BtnCall/BtnCall";
import us1 from '../../img/icons/image/us1.png';
import us2 from '../../img/icons/image/us2.png';
import us3 from '../../img/icons/image/us3.png';
import { useTranslation } from "react-i18next";
import './AboutUs.css';
const AboutUs = () => {
    const {t} = useTranslation();
    return ( 
        <section className="AboutUs">
            <div className="container">
                <div className="About-main">
                <div className="btn-none"><BtnCall   text="Зв’язатися" /></div>
                    <div className="about-photo">
                        <div className="colm">
                        <img  className="about-photo-1" src={us1} alt=""/>
                        <img  className="about-photo-2" src={us2} alt=""/>
                        </div>
                        <img  className="about-photo-3" src={us3}alt=""/>
                       
                    </div>
                   
                    <div className="about-title">
                        <div className="About-text">
                            <h2>{t("About us")}</h2>
                            <p>{t("Hello everyone, we are D&S Handyman. We are looking for work in Calgary and around the area.What do you need pick up furniture, install")} 
                            {t("TV,cornice,earn moneyminor repairs,for example,installation of underlay or plasterboardrobots - we can help.We also offer delivery,")}
                            {t("I will help you with moving and getting a haircut lawn. You can take a lookour remaining projects. How about you Need help - write to us Privacy!")}
                            </p>
                        </div>
                        <div className="btn-about">
                        <BtnCall text={t("Get in touch")}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default AboutUs;