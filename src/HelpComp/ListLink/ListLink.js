import f  from '../../img/icons/Facebook.svg';
import t  from '../../img/icons/Telegram.svg';
import v  from '../../img/icons/Viber.svg';
import './ListLink.css' 

const ListLink = () => {
    return (
        <div className="List__Link">
            <ul>
                <li className='link__li'><a href="/"><img src={f} alt="img_Facebook"/></a></li>
                <li className='link__li'><a href="/"><img src={t} alt="img_Telegram"/></a></li>
                <li className='link__li' ><a href="/"><img src={v} alt="img_viber"/></a></li>
            </ul>
        </div>
      );
}
 
export default ListLink;