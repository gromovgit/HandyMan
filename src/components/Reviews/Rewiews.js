import RevieItem from '../../HelpComp/ReviewsItem/RevieItem';
import './Reviews.css'
const Reviews = () => {
    return (
        <section className="reviews-main">
            <div className="container">
                <div className='reviews-title'>
                    <h2>Відгуки</h2>
                    <div className='btn'>Залишити відгук</div>
                </div>
                <ul className='reviews-list'>
                    {<li> <RevieItem /></li>}
                    {<li> <RevieItem /></li>}
                    {<li> <RevieItem /></li>}
                </ul>
                <div className='numbers-list'>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        </ul>
                </div>
            </div>

        </section>
      );
}
 
export default Reviews;