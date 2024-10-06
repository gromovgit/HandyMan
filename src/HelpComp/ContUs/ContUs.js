import { useTranslation } from "react-i18next";
import ListLink from "../ListLink/ListLink";
 import './ContUs.css';
const ContUs = () => {
    const {t} = useTranslation();
    return (
        <div className="form__contUs">
            <div className="text__cont">
                <h3>{t("How to contact us?")}</h3>
                <p>{t("Call")}: (406) 555-0120</p>
                <p>{t("Email")}: manhhachkt08@gmail.com</p>
                <p>{t("Address Canada, province of Alberta, region of Calgary")}</p>
                <ListLink/>
            </div>
           

        </div>
      );
}
 
export default ContUs;