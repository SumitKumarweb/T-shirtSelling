import BannerImage from './2.png'
import './Banner.css'
import shoppingCart from './shoppingCart.svg'
function Banner() {
    return (
        <div className='banner-wrapper'>
            <div className="banner-info" >
                <h1>Welcome to T-shirt Selling</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi blanditiis rerum commodi incidunt nobis eos libero deserunt soluta vero corporis? Quas, ipsam odit. Repellendus illo obcaecati voluptates tenetur est labore.</p>
                <button>
                    <img src={shoppingCart} alt="" />
                    <span>Buy Now</span>
                </button>
            </div >
            <img src={BannerImage} alt="" />
        </div >
    )
}
export default Banner;