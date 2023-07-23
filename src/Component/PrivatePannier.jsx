import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from './Context';
import "./PrivatePannier.css";
import ChooseCard from './ChooseCard';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function PrivatePannier() {
    const { modal7,local,setLocal, incrementCount, decrementCount, setModal7, deleteBtn, pannierClose, pannier, setPannier, isActive,pannierGo, setIsActive, setOffers, offers, addPannier } = useContext(Context);
    const [totalPrice, setTotalPrice] = useState(0);
    const [deleteCount, setDeleteCount] = useState(0)
    const [totalDiscount, setTotalDiscount] = useState(0)
    useEffect(() => {
        calculateTotalPrice();
        calculateTotalDiscount()
    }, [pannier, offers, addPannier]);
  
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        pannier.forEach(item => {
            const itemTotalPrice = (item.discountPrice * item.count).toFixed(2);
            totalPrice += Number(itemTotalPrice)

        });
        setTotalPrice(totalPrice);
    };
    const calculateTotalDiscount = () => {
        let totalDiscount = 0;
        pannier.forEach(item => {
            const itemTotalDiscount = (item.discounte * item.count).toFixed(2);
            totalDiscount += Number(itemTotalDiscount)
        });
        setTotalDiscount(totalDiscount)

    };

    const newDelete = (id) => {
        deleteBtn(id)
        setDeleteCount(deleteCount + 1)
    }
    return (
        <div className='Private-Pannier'>
            <div className="container-fluid">
                <div className="Private-Pannier-content">
                    <div className="links">
                        <Link to={"/"}>İrşad</Link>
                        <li> <Link to={"/sebet"}>Səbət</Link></li>
                    </div>
                    <div className='Pannier1'>
                        <h2>Səbət</h2>
                        {deleteCount !== 0 ? <p className='delete-count'><i className="fas fa-trash"></i> {deleteCount} məhsul silinmişdir</p> : ""}
                    </div>
                    <div className="Private-Pannier-Content-Items">
                        <div className="Private-pannier-content-left">
                            {pannier.length === 0?
                                <p className='empty-pannier'>Səbətinizdə məhsul yoxdur</p> :
                                pannier.slice(0,4).map(item => {
                                    const pannierPrice = (item.discountPrice * item.count).toFixed(2);
                                    return (
                                        <div className="Pannier-items" key={item.id}>
                                            <div className="Pannier-item">
                                                <div className="pannier-img">
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="pannier-content">
                                                    <div className="pannier-content-top">
                                                        <div className="pannier-content-top-left">
                                                            <div className="pannier-category">{item.category}</div>
                                                            <div className="pannier-model">{item.model}</div>
                                                        </div>
                                                        <button onClick={() => newDelete(item.id)} className="pannier-delete">
                                                            <i className="fas fa-trash"></i>
                                                        </button>
                                                    </div>
                                                    <div className="pannier-discount2">
                                                        {item.discount && <span className="pannier-discount">{item.discount}</span>}
                                                        {item.offer && <span className="pannier-offer">{item.offer}</span>}
                                                    </div>
                                                    <div className="pannier-content-alt">
                                                        <div className="pannier-count">
                                                            <button onClick={() => decrementCount(item.id)}><i className="fa-solid fa-minus"></i></button>
                                                            <span>{item.count}</span>
                                                            <button onClick={() => incrementCount(item.id)}><i className="fa-solid fa-plus"></i></button>
                                                        </div>
                                                        <div className="price">{item.discountPrice} AZN</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                        {pannier.length !== 0 ?
                            <div className='Private-pannier-content-left-items'>
                                <div className="Private-pannier-content-left-item">
                                    <div className="content-left-head">
                                        <h2>Səbətdəki məhsullar</h2>
                                    </div>
                                    <dl>
                                        <dt>Məhsulların qiyməti</dt>
                                        <dd>{totalPrice.toFixed(2)} AZN</dd>
                                        <dt>Endirim</dt>
                                        <dd>- {totalDiscount.toFixed(2)} AZN</dd>
                                    </dl>
                                    <div className="total-price">
                                        <span>Toplam qiymət:  </span>
                                        <span>{(totalPrice - totalDiscount).toFixed(2)} AZN</span>
                                    </div>
                                    <div className="content-left-button">
                                        <span>Sifarişi rəsmiləşdir</span>
                                    </div>
                                </div>
                            </div> : ""
                        }
                    </div>
                </div>
            </div>
            <div className={`${isActive ? "blur" : ""}`}></div>
            <div className="container-fluid">
                <div className="choose">
                    <div className="choose-head">
                        <h2>Səbətə xüsusi məhsullar</h2>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        navigation={true}
                        grabCursor={true}
                        autoplay={{ delay: 3000 }}
                        speed={1000}
                        breakpoints={{
                            768: { slidesPerView: 2, spaceBetween: 0 },
                            1024: { slidesPerView: 4 },
                        }}
                        modules={[Autoplay, Navigation]}
                        className="Swiper-3"
                    >
                        {offers.filter(item => item.type==="choose").map(item=>
                        
                        <SwiperSlide key={item.id} className='swiper-3-slider'>
                                    <ChooseCard
                                        id={item.id}
                                        img={item.productImgs[0]}
                                        category={item.category}
                                        model={item.model}
                                        colors={item.colors}
                                        price={item.price}
                                        monthly={item.monthly}
                                        discount={item.discount}
                                        stars={item.stars}
                                        stock={item.stock}
                                        offer={item.offer}
                                        order={item.order}
                                        buyDiscount={item.buyDiscount}
                                        discountPrice={item.discountPrice}
                                        addPannier={() => addPannier(item.id, item.model, item.discount, item.offer, item.discountPrice, item.productImgs[0], item.category, item.discounte, item.count)}
                                    />
                                </SwiperSlide>
                            )}
                    </Swiper>
                </div>
            </div>
            {modal7 &&
                <div className="pannier-modal">
                    <div className="pannier-modal-head">
                        <h2>Birbaşa almaq istəyirsiniz?</h2>
                        <button onClick={pannierClose}><i className="fas fa-times"></i></button>
                    </div>
                    {
                        pannier.map(item => {
                            const price = item.count * item.discountPrice
                            return (
                                <div className="Pannier">
                                    <div className="pannier-modal-content">
                                        <img src={item.img} alt="" />
                                        <div className="product-about">
                                            <div className='pannier-category'>{item.category}</div>
                                            <div className='pannier-model'>{item.model}</div>
                                            <div className="pannier-discounts">
                                                {item.discount && <span className='pannier-discount'>{item.discount}</span>}
                                                {item.offer && <span className='pannier-offer'>{item.offer}</span>}
                                            </div>
                                        </div>
                                        <div className='pannier-price'>{price.toFixed(2)} AZN</div>
                                        <div className="pannier-count">
                                            <button onClick={() => decrementCount(item.id)}><i className="fa-solid fa-minus"></i></button>
                                            <span>{item.count}</span>
                                            <button onClick={() => incrementCount(item.id)}><i className="fa-solid fa-plus"></i></button>
                                        </div>
                                        <button onClick={() => deleteBtn(item.id)} className='pannier-delete'><i className="fas fa-trash"></i></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="pannier-buttons">
                        <div className="pannier-button-1">
                            <button onClick={pannierClose}>Alışverişə davam et</button>
                        </div>
                        <div className="pannier-button-2">
                            <button onClick={pannierGo}><Link to={"/PrivatePannier"}>Səbətə keç</Link></button>
                        </div>
                    </div>
                </div>
            }
            <div className={modal7 ? "popup" : ""}></div>
        </div>
    );
}

export default PrivatePannier;
