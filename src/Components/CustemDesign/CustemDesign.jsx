import DropZone from "./DropZone";
import front from './front.png'
import back from './back.png'
import { useState } from "react";
import rightArrow from './arrow-right-solid.svg'
import shoppingCart from './shophingCart.svg'


function CustemDesign() {
    const [preivew, setPreview] = useState(true);
    return (
        <div className="CustemDesign">
            <div className="previewTshirt">
                <img src={rightArrow} className="btn" onClick={() => setPreview(!preivew)} />
                {
                    preivew ?
                        (<img src={front} alt="" />)
                        :
                        (<img src={back} alt="" />)
                }
                <img src={rightArrow} className="btn" onClick={() => setPreview(!preivew)} />
            </div>
            <div className="dropZoneArea">
                <h1>Upload Your Design</h1>
                <DropZone />
                <div className="size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button>
                    <img src={shoppingCart} alt="" />
                    <span>Buy Now</span>
                </button>
            </div>
        </div>

    )
}
export default CustemDesign;