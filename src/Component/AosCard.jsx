import React, { useContext, useEffect, useState } from 'react';
import { Rate } from 'antd';
import { Context } from './Context';
import Timer from './Timer';
import { Link } from 'react-router-dom';

function AosCard(props) {
  const [change, setChange] = useState(false)
  const{pannier,setPannier,pannierGo,productGo}=useContext(Context)
  useEffect(() => {
    const chooseId = pannier.find(item => props.id.includes(item.id));
    if (chooseId) {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [props.addPannier, props.id]);

  const newAddPannier=()=>{
    props.addPannier()
  }
  return (
    <div className="AosCard">
      <div className="swiper-2-head">
        <span>Həftənin təklifi</span>
        <Timer targetDate={new Date(props.watch).getTime()} />
      </div>
      <div className="product-info">
        <div className="product-info-head">
          <h2>{props.model}</h2>
          <img src={props.brandImg} alt="" height={props.height} />
        </div>
        <div className="product-info-main">
          <Link onClick={productGo} to={`/product/${props.id}`}>
          <img src={props.productImg} alt="" />
          </Link>
          <div className="product-info-content">
            {props.stock == "true" ? <div className='stock'><i className="fas fa-warehouse"></i><span>Stokda var</span></div> : ""}
            <div className="discount">{props.discount}</div>
            {props.offer? <div className="offer">{props.offer}</div>:""}
            {props.Commission===true? <div className='commission'>Kommissiyasız</div> : ""}
            {props.buyDiscount ? <div className='buy-discount'>{props.buyDiscount}</div> : ""}
            {props.order ? <div className='order'>{props.order}</div> : ""}
          </div>
        </div>
        <div className="product-info-bottom">
          <div className="prices">
            <div className="discount-price"><span>{props.discountPrice} AZN</span></div>
            <div className="price"><span>{props.price} AZN</span></div>
          </div>
          <div className="product-info-bottom-buttons">
            <button>Bir klikle al</button>
            {
             !change?
              <button onClick={newAddPannier} ><i className="fas fa-shopping-cart"></i></button>:
              <button onClick={pannierGo} className='pannier-btn'><Link to={"/PrivatePannier"}><i className="fas fa-shopping-cart"></i></Link></button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AosCard