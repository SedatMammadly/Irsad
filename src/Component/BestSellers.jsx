import React, { useContext, useEffect, useState } from 'react'
import { Rate } from 'antd';
import { Context, product } from './Context';
import { Link } from 'react-router-dom';
function BestSellers(props) {
  const [selectMonth, setSelectMonth] = useState(6);
  const [selectPrice, setSelectPrice] = useState('');
  const [change, setChange] = useState(false)
  const { pannier, setPannier, pannierGo,productGo } = useContext(Context)
  const calculateMonthlyPrice = (productId, discountPrice, months) => {
    let monthly;
    if (months === 18) {
      monthly = (discountPrice * 1.16) / months;
    } else {
      monthly = discountPrice / months;
    }

    setSelectMonth(months);
    setSelectPrice(monthly.toFixed(2));
  };
  useEffect(() => {
    const chooseId = pannier.find(item => props.id.includes(item.id));
    if (chooseId) {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [props.addPannier, props.id]);

  const newAddPannier = () => {
    props.addPannier()
  }

  return (
    <div className="choose-card">
      <div className="choose-card-top-flex">
        <div className="choose-card-top">
          <i className="fas fa-balance-scale"></i>
          <button className="like">
            <i className="fas fa-heart"></i>
          </button>
        </div>
        <div className="choose-card-head">
          <Link onClick={productGo} to={`/product/${props.id}`}>
            <img src={props.img} alt="" />
          </Link>
          <h4 className="choose-card-category">{props.category}</h4>
          <h4 className="choose-card-model">{props.model}</h4>
        </div>
        <div className="choose-card-content">
          <ul className="circles">
            {props.colors.map((color) => (
              <li style={{ background: color }} className={`circle ${color}`} key={color}></li>
            ))}
          </ul>
          <div className="comment">
            <Rate classname="stars" disabled defaultValue={props.stars} />
            <div className="reference">
              <i className="far fa-comment"></i> <span>{props.reference}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="choose-card-bottom-flex">
        <div className="special">
          {props.stock && <p className="choose-card-stock"><i className="fas fa-warehouse"></i>Stokda var</p>}
          {props.offer && <p className="choose-card-offer">{props.offer}</p>}
          {props.order && <p className="choose-card-order">{props.order}</p>}
          {props.buyDiscount && <p className="choose-card-discount">{props.buyDiscount}</p>}
        </div>
        <div className="choose-card-arithmetics">
          <div className="choose-card-arithmetic">
            <div className="prices">
              <div className="discount-price">
                <span>{props.discountPrice} AZN</span>
              </div>
              <div className="price">
                <span>{props.price} AZN</span>
              </div>
            </div>
            <div className="credit">
              <div className="credit-month">
                {props.monthly.map((month) => (
                  <button
                    className={selectMonth === month ? 'border-active' : null}
                    key={month}
                    onClick={() => calculateMonthlyPrice(props.id, props.discountPrice, month)}
                  >
                    {month} ay
                  </button>
                ))}
              </div>
              {selectPrice ? (
                <div className="monthly-price">{selectPrice} AZN</div>
              ) : (
                <div className="monthly-price">{(props.discountPrice / 6).toFixed(2)} AZN</div>
              )}
            </div>
          </div>
          <div className={`choose-card-button ${change ? "pannier-go" : ""}`}>
            <i className="fas fa-shopping-cart"></i>
            {!change ?
              <button onClick={() => newAddPannier(props.id)}>Səbətə əlavə et</button> :
              <button onClick={pannierGo} ><Link to={"/PrivatePannier"}>Səbətə keç</Link></button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestSellers