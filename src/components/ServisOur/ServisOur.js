import "./ServisOur.css";
import { useTranslation } from "react-i18next";
import BtnCall from "../../HelpComp/BtnCall/BtnCall";
import s1 from "../../img/icons/image/Service.png";
import s3 from "../../img/icons/image/Service3.png";
import s4 from "../../img/icons/image/Service4.png";
import s5 from "../../img/icons/image/Service5.png";
import s6 from "../../img/icons/image/Service6.png";
import s7 from "../../img/icons/image/Service7.png";
import s8 from "../../img/icons/image/Service8.png";
import strick  from '../../img/icons/image/strick.png';

const ServisOur = () => {

  const {t} = useTranslation();
  const items = [
    { title: t("Folding furniture"), img: s1 },
    { title: t("Installation of cornice"), img: s3 },
    { title: t("Installing the TV"), img: s4 },
    { title: t("Plasterboard works"), img: s5 },
    { title: t("Delivery + moving assistance"), img: s6 },
    { title: t("Floor installation"), img: s7 },
    { title: t("Mowing the lawn"), img: s8 },
  ];
  return (
    <div className="service-main">
      <div className="container">
        <div className="title-service">
          <h1>{t("Services")}</h1>
          <p>{t("Our craftsmen have experience working with various home projects. Wewe work promptly, using high-quality materials and tools,to ensure maximum durability and comfort")}
            
          </p>
        </div>
        <div className="coll-service">
          {items.map((itm, index) => {
            return ( 
              <div className="service-block-img">
                <img key={index} src={itm.img} alt={itm.title} />
                <div className="text-service"><span>{itm.title}</span></div>
              </div>
            );
          })}
        </div>
        <div className="title-service">
         
          <p>
          {t("Didn't find the service you were looking for? We can help with many other tasks even if they are not listed. Write to us and we will find a soluation for your project!")}
          </p>
          <div className="btn-about">
                        <BtnCall  text={t("Get in touch")}/>
                        </div>
        </div>
      </div>
    </div>
  );
};

export default ServisOur;
