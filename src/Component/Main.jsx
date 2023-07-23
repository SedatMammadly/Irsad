import React, { useContext, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Main.css"
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper";
import ChooseCard from './ChooseCard';
import { Context, markImg } from './Context';
import AosCard from './AosCard';
import PopularCard from './PopularCard';
import NewCard from './NewCard';
import BestSellers from './BestSellers';
import DiscountProduct from './DiscountProduct';
import { Link } from 'react-router-dom';
function Main() {
  const [popular, setPopular] = useState(false)
  const { pannier, setPannier } = useContext(Context)
  const [discount, setDiscount] = useState(false)
  const { deleteBtn, pannierGo, incrementCount, decrementCount, pannierClose, modal7, setModal, addPannier, offers, setOffers } = useContext(Context)
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)
  const [modal6, setModal6] = useState(false)
  const [isOverview, setIsOverview] = useState(false)

  // console.log(offers.filter(item=>item.type==="offers").map(item=>item.model));

  const popularProduct = () => {
    setPopular(false)
  }
  const newProduct = () => {
    setPopular(true)
  }
  const discountProduct = () => {
    setDiscount(true)
  }
  const bestSellerProduct = () => {
    setDiscount(false)
  }
  const overview = () => {
    setIsOverview(false)
  }
  const youtube = () => {
    setIsOverview(true)
  }
  const handleInput1 = () => {
    setModal1(!modal1)
  }
  const handleInput2 = () => {
    setModal2(!modal2)
  }
  const handleInput3 = () => {
    setModal3(!modal3)
  }
  const handleInput4 = () => {
    setModal4(!modal4)
  }
  const handleInput5 = () => {
    setModal5(!modal5)
  }
  const handleInput6 = () => {
    setModal6(!modal6)
  }


  const close = () => {
    setModal1(false)
    setModal2(false)
    setModal3(false)
    setModal4(false)
    setModal5(false)
    setModal6(false)
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="Aos">
          <div className="row">
            <div className="col-md-8">
              <Swiper
                spaceBetween={50}
                pagination={{
                  clickable: true,
                }}
                grabCursor="true"
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 3000 }}
                speed={1000}
                className="mySwiper"
              >
                <SwiperSlide className='slide-1'></SwiperSlide>
                <SwiperSlide className='slide-2'></SwiperSlide>
                <SwiperSlide className='slide-3'></SwiperSlide>
                <SwiperSlide className='slide-4'></SwiperSlide>
                <SwiperSlide className='slide-5'></SwiperSlide>
                <SwiperSlide className='slide-6'></SwiperSlide>
                <SwiperSlide className='slide-7'></SwiperSlide>
                <SwiperSlide className='slide-8'></SwiperSlide>
              </Swiper>
            </div>
            <div className="col-md-4">
              <Swiper
                spaceBetween={50}
                grabCursor={true}
                effect={"fade"}
                autoplay={{ delay: 3000 }}
                speed={1000}
                modules={[EffectFade, Autoplay]}
                className='swiper-2'
              >
                {offers.filter(data => data.type === "offers").map(data =>
                  <SwiperSlide className='swiper-2-slider' key={data.id}>
                    <AosCard
                      Commission={data.Commission}
                      buyDiscount={data.buyDiscount}
                      productImg={data.productImg}
                      brandImg={data.brandImg}
                      height={data.height}
                      stock={data.stock}
                      reference={data.reference}
                      offer={data.offer}
                      discount={data.discount}
                      model={data.model}
                      watch={data.watch}
                      order={data.order}
                      discountPrice={data.discountPrice}
                      price={data.price}
                      id={data.id}
                      pannier={pannier}
                      setPannier={setPannier}
                      addPannier={() => addPannier(data.id, data.model, data.discount, data.offer, data.discountPrice, data.productImg, data.category, data.discounte, data.count)}
                    />
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="Container">
        <div className="services">
          <div className="service-card">
            <i className="fas fa-store-alt"></i>
            <span>40-dan çox mağaza</span>
          </div>
          <div className="service-card">
            <i className="fas fa-mobile-android"></i>
            <span> 30 mindən çox seçim </span>
          </div>
          <div className="service-card">
            <i className="fas fa-truck"></i>
            <span>Sürətli çatdırılma</span>
          </div>
          <div className="service-card">
            <i className="fas fa-globe"></i>
            <span>Rəsmi zəmanət</span>
          </div>
          <div className="service-card">
            <i className="fas fa-gift"></i>
            <span>Bonus proqramı</span>
          </div>
          <div className="service-card">
            <i className="fas fa-shopping-cart"></i>
            <span>Sürətli alış-veriş</span>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="choose">
          <div className="choose-head">
            <h2>Sizin üçün Seçimlərimiz</h2>
          </div>
          <Swiper slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            grabCursor="true"
            autoplay={{ delay: 3000 }}
            speed={1000}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 4,
                // spaceBetween: 50,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="Swiper-3">
            {offers.filter(item => item.type === "choose").map(item =>
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
                  pannier={pannier}
                  reference={item.reference}
                  setPannier={setPannier}
                  offer={item.offer}
                  order={item.order}
                  buyDiscount={item.buyDiscount}
                  discountPrice={item.discountPrice}
                  deleteBtn={() => deleteBtn(item.id)}
                  addPannier={() => addPannier(item.id, item.model, item.discount, item.offer, item.discountPrice, item.productImgs[0], item.category, item.discounte, item.count)}
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div >
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
                    <div className="offers-about">
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
              <button onClick={pannierGo} ><Link to={"/PrivatePannier"}>Səbətə keç</Link></button>
            </div>
          </div>
        </div>
      }
      <div className={modal7 ? "popup" : ""}></div>
      <div className="container-fluid">
        <div className="populars_new_products">
          <div className="populars_new_products_head">
            <button className={!popular ? "button-active" : ""} onClick={popularProduct}>Populyar məhsullar</button>
            <button className={popular ? "button-active" : ""} onClick={newProduct}>Yeni məhsullar</button>
          </div>
          {!popular &&
            <Swiper slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              grabCursor="true"
              autoplay={{ delay: 3000 }}
              speed={1000}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 4,
                  // spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="Swiper-4">
              {offers.filter(item => item.type === "popular").map(item =>

                <SwiperSlide key={item.id} className='swiper-3-slider'>
                  {
                    <PopularCard
                      id={item.id}
                      img={item.productImgs[0]}
                      category={item.category}
                      model={item.model}
                      colors={item.colors}
                      price={item.price}
                      monthly={item.monthly}
                      discount={item.discount}
                      reference={item.reference}
                      stars={item.stars}
                      stock={item.stock}
                      pannier={pannier}
                      setPannier={setPannier}
                      offer={item.offer}
                      order={item.order}
                      buyDiscount={item.buyDiscount}
                      discountPrice={item.discountPrice}
                      deleteBtn={() => deleteBtn(item.id)}
                      addPannier={() => addPannier(item.id, item.model, item.discount, item.offer, item.discountPrice, item.productImgs[0], item.category, item.discounte, item.count)}

                    />
                  }
                </SwiperSlide>
              )}
            </Swiper>
          }
          {popular &&
            <Swiper slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              grabCursor="true"
              autoplay={{ delay: 3000 }}
              speed={1000}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 4,
                  // spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="Swiper-5">
              {offers.filter(item => item.type === "newproduct").map(item =>
                <SwiperSlide key={item.id} className='swiper-3-slider'>
                  {
                    <NewCard
                      id={item.id}
                      img={item.productImgs[0]}
                      category={item.category}
                      model={item.model}
                      colors={item.colors}
                      reference={item.reference}
                      price={item.price}
                      monthly={item.monthly}
                      discount={item.discount}
                      stars={item.stars}
                      stock={item.stock}
                      pannier={pannier}
                      setPannier={setPannier}
                      offer={item.offer}
                      order={item.order}
                      buyDiscount={item.buyDiscount}
                      discountPrice={item.discountPrice}
                      deleteBtn={() => deleteBtn(item.id)}
                      addPannier={() => addPannier(item.id, item.model, item.discount, item.offer, item.discountPrice, item.productImgs[0], item.category, item.discounte, item.count)}

                    />
                  }
                </SwiperSlide>
              )}
            </Swiper>
          }
        </div>
      </div>
      <div className="container">
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          grabCursor="true"
          autoplay={{ delay: 3000 }}
          speed={1000}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          modules={[Autoplay]}
          className='mark-swiper'
        >
          {markImg.map(item => item.productmarkimg.map(img =>
            <SwiperSlide key={item.id}>
              <div className="mark-imgs">
                <img src={img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container-fluid">
        <div className="populars_new_products">
          <div className="populars_new_products_head">
            <button className={!discount ? "button-active" : ""} onClick={bestSellerProduct}>Çox satılanlar</button>
            <button className={discount ? "button-active" : ""} onClick={discountProduct}>Endirimli məhsullar</button>
          </div>
          {!discount &&
            <Swiper slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              grabCursor="true"
              autoplay={{ delay: 3000 }}
              speed={1000}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 4,
                  // spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="Swiper-4">
              {offers.filter(item => item.type === "discountproducts").map(item =>

                <SwiperSlide key={item.id} className='swiper-3-slider'>
                  {
                    <DiscountProduct
                      id={item.id}
                      img={item.productImgs[0]}
                      category={item.category}
                      model={item.model}
                      reference={item.reference}
                      colors={item.colors}
                      price={item.price}
                      monthly={item.monthly}
                      discount={item.discount}
                      stars={item.stars}
                      stock={item.stock}
                      pannier={pannier}
                      setPannier={setPannier}
                      offer={item.offer}
                      order={item.order}
                      buyDiscount={item.buyDiscount}
                      discountPrice={item.discountPrice}
                      deleteBtn={() => deleteBtn(item.id)}
                      addPannier={() => addPannier(item.id, item.model, item.discount, item.offer, item.discountPrice, item.productImgs[0], item.category, item.discounte, item.count)}

                    />
                  }
                </SwiperSlide>
              )}
            </Swiper>
          }
          {discount &&
            <Swiper slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              grabCursor="true"
              autoplay={{ delay: 3000 }}
              speed={1000}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 4,
                  // spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="Swiper-5">
              {offers.filter(item => item.type === "bestsellers").map(item =>
                <SwiperSlide key={item.id} className='swiper-3-slider'>
                  {
                    <BestSellers
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
                      pannier={pannier}
                      reference={item.reference}
                      setPannier={setPannier}
                      offer={item.offer}
                      order={item.order}
                      buyDiscount={item.buyDiscount}
                      discountPrice={item.discountPrice}
                      deleteBtn={() => deleteBtn(item.id)}
                      addPannier={() => addPannier(item.id, item.model, item.discount, item.offer, item.discountPrice, item.productImgs[0], item.category, item.discounte, item.count)}

                    />
                  }
                </SwiperSlide>
              )}
            </Swiper>
          }
        </div>
      </div>

      {
        modal1 &&
        <div className="video-modal">
          <div className="modal-head">
            <h2>Sehrin gücünü bu icmalda hiss et - Honor Magic5 Pro</h2>
            <button onClick={close}><i className="fas fa-times"></i></button>
          </div>
          <div className="modal-iframe">
            <iframe width="920" height="500" src="https://www.youtube.com/embed/NRBQevgGK00" title="Sehrin gücünü bu icmalda hiss et - Honor Magic5 Pro" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      }
      {
        modal2 &&
        <div className="video-modal">
          <div className="modal-head">
            <h2>Mətbəxtdəki dadlı dostun Fakir!</h2>
            <button onClick={close}><i className="fas fa-times"></i></button>
          </div>
          <div className="modal-iframe">
            <iframe width="920" height="500" src="https://www.youtube.com/embed/PPyiW9DWvTE" title="Mətbəxtdəki dadlı dostun Fakir!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      }
      {
        modal3 &&
        <div className="video-modal">
          <div className="modal-head">
            <h2>Sağlıqlı və dadlı yeməklər hazırlamaq istəyirsən?😋</h2>
            <button onClick={close}><i className="fas fa-times"></i></button>
          </div>
          <div className="modal-iframe">
            <iframe width="920" height="500" src="https://www.youtube.com/embed/U12rMTA7LPc" title="Sağlıqlı və dadlı yeməklər hazırlamaq istəyirsən?😋" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      }
      {
        modal4 &&
        <div className="video-modal">
          <div className="modal-head">
            <h2>Bərəkətli təklif! 23 iyun - 2 iyul</h2>
            <button onClick={close}><i className="fas fa-times"></i></button>
          </div>
          <div className="modal-iframe">
            <iframe width="920" height="500" src="https://www.youtube.com/embed/TAeJAaDsYLE" title="Bərəkətli təklif!  23 iyun - 2 iyul" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      }
      {
        modal5 &&
        <div className="video-modal">
          <div className="modal-head">
            <h2>Bu icmal həm öyrədici, həm də sərfəli olacaq!</h2>
            <button onClick={close}><i className="fas fa-times"></i></button>
          </div>
          <div className="modal-iframe">
            <iframe width="920" height="500" src="https://www.youtube.com/embed/I3GcX-ie-tQ" title="Bu icmal həm öyrədici, həm də sərfəli olacaq!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      }
      {
        modal6 &&
        <div className="video-modal">
          <div className="modal-head">
            <h2>Taube TV alana, Taube TV hədiyyə! </h2>
            <button onClick={close}><i className="fas fa-times"></i></button>
          </div>
          <div className="modal-iframe">
            <iframe width="920" height="500" src="https://www.youtube.com/embed/5cGoKA5ZteQ" title="Taube TV alana, Taube TV hədiyyə! 😍" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      }
      <div className={modal1 || modal2 || modal3 || modal4 || modal5 || modal6 ? "popup" : ""}></div>
      <div className="container-fluid">
        <div className="overview">
          <div className="overview-head">
            <a href="https://www.youtube.com/c/irshad"><i className="fab fa-youtube"></i> Youtube hesabına keç</a>

            <div className="overwiev-head-button">
              <button className={!isOverview ? "button-active" : ""} onClick={overview}>Məhsul icmalı</button>
              <button className={isOverview ? "button-active" : ""} onClick={youtube}>İrşad Youtube</button>
            </div>
          </div>
          {!isOverview &&
            <div className="overview-cards">
              <div className="overview-card">
                <div className="overview-img">
                  <label htmlFor='open-input1' title="Videonu izlə" className="img-container">
                    <span>
                    </span>
                    <img src="https://img.youtube.com/vi/NRBQevgGK00/maxresdefault.jpg" alt="" />
                  </label>
                  <input onClick={handleInput1} id='open-input1' type="checkbox" />
                </div>
                <h2>Sehrin gücünü bu icmalda hiss et - Honor Magic5 Pro</h2>
                <p>
                  Dizaynında və çəmən yaşılı rəngində rəqib tanımayan "HONOR Magic5 Pro" əsl flaqman performansı sərgiləyir. 😎
                  Onun 50 MP-lik Periskop telefoto kamerası istənilən anda bütün dünyanı dondurmaq gücünə sahibdir. Bu smarfonun kamerasından heç bir görüntü qaçmır. 😍
                </p>
              </div>
              <div className="overview-card">
                <div className="overview-img">
                  <label htmlFor='open-input2' title="Videonu izlə" className="img-container">
                    <span>
                    </span>
                    <img src="https://img.youtube.com/vi/PPyiW9DWvTE/maxresdefault.jpg" alt="" />
                  </label>
                  <input onClick={handleInput2} id='open-input2' type="checkbox" />
                </div>
                <h2> Mətbəxtdəki dadlı dostun Fakir! </h2>
                <p>
                  Bu icmala baxan kimi səni aclıq tutacaq. 😋😅
                  Çünki növbəti icmalımızda sənə "Fakir"in mətbəxtdəki əvəzsiz rolundan və hazırladığı dadlı təamlardan bəhs edəcəyik.🙂
                  Sona qədər izlədikdən sonra atışdırmalıq bir şey tapmasan, daha doğrusu, hazırlamaq üçün məhsul yoxdursa, o zaman aşağıdakı ünvanlarımıza onlayn sifariş üçün müraciət edə bilərsən: 😃👇
                </p>
              </div>
              <div className="overview-card">
                <div className="overview-img">
                  <label htmlFor='open-input3' title="Videonu izlə" className="img-container">
                    <span>
                    </span>
                    <img src="https://img.youtube.com/vi/U12rMTA7LPc/maxresdefault.jpg" alt="" />
                  </label>
                  <input onClick={handleInput3} id='open-input3' type="checkbox" />
                </div>
                <h2>Sağlıqlı və dadlı yeməklər hazırlamaq istəyirsən?😋</h2>
                <p>
                  Sağlam qidalanma çox vacibdir. 💚
                  Üstəlik dadı damağımızda qalacaq ləziz təamları kim dadmaq istəməz ki? 😋
                  Bir sözlə, həm dadlı, həm sağlıqlı, həm də sürətli yeməklər hazırlamaq istəyirsənsə, bu icmalı mütləq izlə. 😎
                  𝐓𝐞𝐟𝐚𝐥 𝐄𝐚𝐬𝐲 𝐅𝐫𝐲&𝐆𝐫𝐢𝐥𝐥 fritoz modeli - 18 aylıq ilkin ödənişsiz, faizsiz və komissiyasız, ayda cəmi 27.78 AZN-ə "İrşad"da!
                </p>
              </div>
            </div>
          }
          {isOverview &&
            <div className="overview-cards">
              <div className="overview-card">
                <div className="overview-img">
                  <label htmlFor='open-input4' title="Videonu izlə" className="img-container">
                    <span>
                    </span>
                    <img src="https://img.youtube.com/vi/TAeJAaDsYLE/maxresdefault.jpg" alt="" />
                  </label>
                  <input onClick={handleInput4} id='open-input4' type="checkbox" />
                </div>
                <h2>Bərəkətli təklif! 23 iyun - 2 iyul</h2>
                <p>
                  Bayramda paylaşmaq daha mənalı, daha bərəkətli, daha gözəl olur.🥰
                  Biz də Qurban bayramına özəl kampaniyamızı paylaşırıq ki, hər biriniz üçün sərfəli olsun! 😎
                </p>
              </div>
              <div className="overview-card">
                <div className="overview-img">
                  <label htmlFor='open-input5' title="Videonu izlə" className="img-container">
                    <span>
                    </span>
                    <img src="https://img.youtube.com/vi/I3GcX-ie-tQ/maxresdefault.jpg" alt="" />
                  </label>
                  <input onClick={handleInput5} id='open-input5' type="checkbox" />
                </div>
                <h2> Bu icmal həm öyrədici, həm də sərfəli olacaq! </h2>
                <p>
                  Tam fərqli bir velosiped icmalı ilə qarşınızdayıq. 😎🚴🏻‍♀️
                  Bu icmalda Şəfiqə və Şəbnəm bizə hansı velosipedi seçmək mövzusunda maksimum dəstək olmağa çalışacaqlar. Min dəfə danışmaqdansa, bir dəfə bu icmalı izləmək bəs edəcək. 😉
                </p>
              </div>
              <div className="overview-card">
                <div className="overview-img">
                  <label htmlFor='open-input6' title="Videonu izlə" className="img-container">
                    <span>
                    </span>
                    <img src="https://img.youtube.com/vi/5cGoKA5ZteQ/maxresdefault.jpg" alt="" />
                  </label>
                  <input onClick={handleInput6} id='open-input6' type="checkbox" />
                </div>
                <h2>Taube TV alana, Taube TV hədiyyə! 😍</h2>
                <p>
                  Mənim futbolum başlayır. 😇 -Mənim də serialım! 😏 Evdə TV üstündə mübahisə düşür? 😂 Daha ehtiyac qalmadı. Çünki "İrşad"da TAUBE TV-lərinə 1+1 hədiyyə kampaniyası başlayır! 😎 10 iyun - 30 iyun tarixlərində "Taube" 50, 55, və ya 65 düym Smart TV əldə edən hər bir kəsə, üzərində "Taube 32 LED TV" hədiyyə! 🤩 Ən əsası, bu şərtlər həm 18 aylıq ilkin ödənişsiz, faizsiz və komissiyasız, həm də nağd. taksit kartları ilə alış zamanı da keçərlidir.
                </p>
              </div>
            </div>
          }
        </div>
      </div>
      <div className="container-fluid">
        <div className="reklam-banner">
          <img src="https://irshad.az/resized/fit648x222/center/pages/828/3-8-0.jpg" alt="" />
          <img src="https://irshad.az/resized/fit648x222/center/pages/781/velosiped-0018-az.jpg" alt="" />
        </div>
      </div>
      <div className="container-fluid">
        <div className="qr">
          <div className="qr-text">
            <h2>Skan et, Qeydiyyatdan keç 10 AZN BONUS qazan!</h2>
            <span>Daha ətraflı</span>
          </div>
          <div className="qr-code">
            <div className="qr-code-background">
              <img src="https://irshad.az/resized/resize144/center/pages/1116/324r.png" alt="" />
            </div>
            <span>Yükləmək üçün skan et</span>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Main