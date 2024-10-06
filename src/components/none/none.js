import ContUs from "../../HelpComp/ContUs/ContUs";
import ModalForm from "../../HelpComp/Modal/ModalForm";
import  './none.css';
const None = () => {
    return (
        <section className="none-main">
            <div className="container">
                <div className="ara">
                <div className="block-1">
                <ContUs />
                </div>
                <div className="block-2">
                    <ModalForm />
                </div>
                </div>
            </div>
        </section>
      );
}
 
export default None;