import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function FixedBar(props) {
    const [view, setView] = useState(props.productImgs[0])
    const [isSticky, setIsSticky] = useState(false)
    const fixedImg = (img) => {
        setView(img)
    }
    const stickyControl = () => {
        const fixedBar = document.querySelector(".view-fixed-bar")
        if (fixedBar.getBoundingClientRect().top <= 0) {
            setIsSticky(true)
        }
        else {
            setIsSticky(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", stickyControl)
        return () => {
            window.removeEventListener('scroll', stickyControl);
        };
    }, [])
    return (
        <div className="view-fixed-bar-components">
            <div className="view-fixed-bar">
                <div className="view-fixed-bar-small-imgs">
                    {props.productImgs.map(img =>
                        <div className={`view-fixed-bar-small-img ${view === img ? "fixed-border" : ""}`}>
                            <img onClick={() => fixedImg(img)} src={img} alt="" />
                        </div>

                    )}
                </div>
                <div className="view-fixed-bar-big-img">
                    <img src={view} alt="" />
                </div>
            </div>
            <div className={`view-fixed-bar-bottom ${isSticky?"block":"none"}`}>
                <div className="fixed-bar-bottom-head">
                    <h2>{props.model}</h2>
                </div>
                <div className="price-info">
                    <div className="prices">
                        <div className="product-discount-price">{props.discountPrice} AZN</div>
                        <div className="product-price">{props.price} AZN</div>
                    </div>
                    <div className="price-info-buttons">
                        <div className="price-info-click">Bir klikle al</div>
                        {
                            !props.change ?
                                <button onClick={props.newAddPannier} ><i className="fas fa-shopping-cart"></i></button> :
                                <button onClick={props.pannierGo} className='pannier-btn'><Link to={"/PrivatePannier"}><i className="fas fa-shopping-cart"></i></Link></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FixedBar