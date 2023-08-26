import './Card.css'
import Jacket from './jacket-5.jpg'
import Jacket1 from './jacket-6.jpg'
import starIcon from './star.svg'
function Card(){
    return (
        <div className="cart">
        <div className="cartempty"></div>
        <img src={Jacket1} alt="" className="block"/>
        <img src={Jacket} alt="" className="unblock"/>
        <div className="cartbrandname">JACKET</div>
        <div className="brandwearname">Men Yarn Fieece Full-Zip Jacket</div>
        <div className="flex">
          <img src={starIcon} alt="" className="star"/>
          <img src={starIcon} alt="" className="star"/>
          <img src={starIcon} alt="" className="star"/>
        </div>
          <div className="cartPrice">
            <span>55.00</span>
            <span>
              <del>$96.00</del>
            </span>
          </div>
        </div>
    )
}

export default Card;