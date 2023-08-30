import DropZone from "./DropZone";
import front from './front.png'
import back from './back.png'
import { useState } from "react";
import rightArrow from './arrow-right-solid.svg'
import shoppingCart from './shophingCart.svg'
import React, { useCallback } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import plus from './plus-solid.svg'
import minus from './minus-solid.svg'

function CustemDesign() {
    const [preivew, setPreview] = useState(true);
    const [isZoomed, setIsZoomed] = useState(false);
    const [noOfOrder, setNoOfOrder] = useState(0);

    function handdleNoofOrder() {
        if (noOfOrder <= 0) {
            return 0;
        }
        setNoOfOrder(noOfOrder - 1)
    }

    const handleZoomChange = useCallback(shouldZoom => {
        setIsZoomed(shouldZoom)
    }, [])

    return (
        <div className="CustemDesign">
            <div className="previewTshirt">
                <img src={rightArrow} className="btn" onClick={() => setPreview(!preivew)} />
                <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
                    {
                        (preivew) ?
                            (<img src={front} alt="" />)
                            :
                            (<img src={back} alt="" />)
                    }
                </ControlledZoom>
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
                <div className="noOfOrder">
                    <button onClick={handdleNoofOrder}>
                        <img src={minus} alt="" />
                    </button>
                    <div>
                        {noOfOrder}
                    </div>
                    <button onClick={() => setNoOfOrder(noOfOrder + 1)}>
                        <img src={plus} alt="" />
                    </button>
                </div>
                <button>
                    <img src={shoppingCart} alt="" />
                    <span>Buy Now</span>
                </button>
            </div>
        </div >

    )
}
export default CustemDesign;