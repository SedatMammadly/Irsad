import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context, cards, product } from "./Context";
import { Autoplay } from "swiper";
import { Rate } from 'antd';
import "./Product.css"
import { Swiper, SwiperSlide } from "swiper/react";
import FixedBar from "./FixedBar";
const Product = () => {
    const { pannier, setPannier, addPannier, offers, setOffers, isActive, setIsActive, modal7, setModal7, pannierClose, pannierGo, decrementCount, incrementCount, deleteBtn } = useContext(Context)
    const [mainImage, setMainImage] = useState("")
    const [card, setCard] = useState(cards)
    const [change, setChange] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        const chooseId = pannier.find(item => id.includes(item.id));
        if (chooseId) {
            setChange(true);
        } else {
            setChange(false);
        }
    }, [id, pannier, setPannier, addPannier]);

    const newAddPannier = (id, model, discount, offer, discountPrice, img, category, discounte, count) => {
        addPannier(id, model, discount, offer, discountPrice, img, category, discounte, count)
    }
    return (
        <div>
            {offers.filter(item => item.id === id).map(item =>
                <div key={item.id} className="All-parts">
                    <div className="container-fluid">
                        <div className="product">
                            <ul className="breadcrumbs">
                                <li><Link to={"/"}>İrşad</Link></li>
                                {item.category ? <li><a href="#">{item.category}</a></li> : ""}
                                {item.className ? <li><a href="#">{item.className}</a></li> : ""}
                                {item.brand ? <li><a href="#">{item.brand}</a></li> : ""}
                                {item.model ? <li><a href="#">{item.model}</a></li> : ""}
                            </ul>
                            <div className="product-head">
                                <div className="product-head-left">
                                    <h2>{item.model}</h2>
                                    <div className="product-head-left-bottom">
                                        {item.stock === true ? <span className="stock"><i className="fas fa-warehouse"></i> Stokda var</span> : <span className="stock"><i className="fas fa-warehouse"></i> Stokda yoxdur</span>}
                                        {item.buyDiscount ? <span className='buy-discount'>{item.buyDiscount}</span> : ""}
                                        {item.order ? <span className='order'>{item.order}</span> : ""}
                                        {item.commission ? <span className='commission'>{item.commission}</span> : ""}
                                    </div>
                                </div>
                                <div className="product-head-right">
                                    <Swiper
                                        direction={'horizontal'}
                                        spaceBetween={50}
                                        autoplay={{ delay: 3000 }}
                                        modules={[Autoplay]}
                                        speed={1000}
                                        className="cart-slider"
                                    >
                                        {card.map(item =>
                                            <SwiperSlide className="product-slider">
                                                <div className="card-slide-img">
                                                    <img src={item.cardImg} alt="" />
                                                </div>
                                                <div className="card-slide-paragraph">
                                                    <h3>{item.cardDiscount}</h3>
                                                    <p>{item.cardName} ilə 18 aya faizsiz ödə</p>
                                                </div>
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                </div>
                            </div>
                            <div className={`${isActive ? "blur" : ""}`}></div>
                            <div className="product-content">
                                <div className="row">
                                    <div className="col-md-4 fixed-items">
                                        <FixedBar
                                            productImgs={item.productImgs}
                                            newAddPannier={() => newAddPannier(item.id, item.model, item.discount, item.offer, item.discountPrice, item.productImgs[0], item.category, item.discounte, item.count)}
                                            price={item.price}
                                            discountPrice={item.discountPrice}
                                            setChange={setChange}
                                            change={change}
                                            pannierGo={pannierGo}
                                            model={item.model}
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="product-view-body">
                                                    <div className="product-discounts">
                                                        {item.discount ? <span className="pannier-discount">{item.discount}</span> : ""}
                                                        {item.offer ? <span className="pannier-offer">{item.offer}</span> : ""}
                                                    </div>
                                                    <div className="product-cash">
                                                        <span>Nağd alışda {((item.price) / 10).toFixed(2)} AZN bonus</span>
                                                        <span>Hissəli alışda  {((item.price) / 9).toFixed(2)} AZN bonus</span>
                                                    </div>
                                                    <div className="product_tools">
                                                        <a className="scale"><i className="fas fa-balance-scale"></i></a>
                                                        <a className="heart" ><i className="fas fa-heart"></i></a>
                                                        <a className="share"><i className="fas fa-share-alt"></i> <span>Paylaş</span></a>
                                                    </div>
                                                    {item.typed === "Telefon" &&
                                                        <div>
                                                            {
                                                                item.colors ?
                                                                    <div className="product-colors">
                                                                        <span>Rəng:</span>
                                                                        <ul className="circles">
                                                                            {item.colors.map((color) => (
                                                                                <li style={{ background: color }} className={`circle ${color}`} key={color}></li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                    : ""
                                                            }
                                                            {item.storage ?
                                                                <div className="product-storage">
                                                                    <p>Daxili yaddaş</p>
                                                                    <p>{item.storage}</p>
                                                                </div>
                                                                : ""
                                                            }
                                                        </div>
                                                        }
                                                    <div className="product-code">
                                                        <span>Malın kodu:</span>
                                                        <span>{item.code}</span>
                                                    </div>
                                                    <div className="product-comment">
                                                        <Rate classname="stars" disabled defaultValue={item.stars} />
                                                        <i className="far fa-comment"></i> <span>{item.reference} Rəy</span>
                                                    </div>
                                                </div>
                                                <div className="Commission">
                                                    <span><i className="fas fa-info"></i></span>
                                                    {item.commission === true ? <span>Komissiyasız</span> : <span>Məhsulun rəsmiləşdirilməsi zamanı 5-10% komissiya məbləği əlavə oluna bilər.</span>}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="price-info">
                                                    <div className="prices">
                                                        <div className="product-discount-price">{item.discountPrice} AZN</div>
                                                        <div className="product-price">{item.price} AZN</div>
                                                    </div>
                                                    <div className="price-info-buttons">
                                                        <div className="price-info-click">Bir klikle al</div>
                                                        {
                                                            !change ?
                                                                <button onClick={() => newAddPannier(item.id, item.model, item.discount, item.offer, item.discountPrice, item.productImgs[0], item.category, item.discounte, item.count)} ><i className="fas fa-shopping-cart"></i></button> :
                                                                <button onClick={pannierGo} className='pannier-btn'><Link to={"/PrivatePannier"}><i className="fas fa-shopping-cart"></i></Link></button>
                                                        }
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
                                                <div className="credit-info">
                                                    <div className="credit-info-head">
                                                        <h3>İlkin ödənişsiz hissə - hissə ödə!</h3>
                                                    </div>
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Seçim</th>
                                                                <th>İlkin ödəniş</th>
                                                                <th>Müddət</th>
                                                                <th>Aylıq ödəniş</th>
                                                                <th>Yekun məbləğ</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <label className="custom-radio-label-0" htmlFor="choose-input-0">
                                                                        <input id="choose-input-0" type="radio" name="price" />
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label htmlFor="choose-input-0" >0</label>
                                                                </td>
                                                                <td>
                                                                    <label htmlFor="choose-input-0">6 ay</label>
                                                                </td>
                                                                <td>
                                                                    <label htmlFor="choose-input-0">{(item.discountPrice / 6).toFixed(2)}</label>
                                                                </td>
                                                                <td>
                                                                    <label htmlFor="choose-input-0">{item.discountPrice}</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label htmlFor="choose-input-1" className="custom-radio-label-1" >
                                                                        <input id="choose-input-1" type="radio" className="inp" name="price" />
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label htmlFor="choose-input-1">0</label>
                                                                </td>
                                                                <td>
                                                                    <label htmlFor="choose-input-1">12 ay</label>
                                                                </td>
                                                                <td>
                                                                    <label htmlFor="choose-input-1">{(item.discountPrice / 12).toFixed(2)}</label>
                                                                </td>
                                                                <td>
                                                                    <label htmlFor="choose-input-1">{item.discountPrice}</label>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <label htmlFor="choose-input-2" className="custom-radio-label-2">
                                                                        <input id="choose-input-2" type="radio" name="price" />
                                                                    </label>
                                                                </td>
                                                                <td>
                                                                    <label htmlFor="choose-input-2">0</label>
                                                                </td>
                                                                <td>
                                                                    <label htmlFor="choose-input-2">18 ay</label>
                                                                </td>
                                                                <td>
                                                                    <label htmlFor="choose-input-2">{((item.discountPrice * 1.16) / 18).toFixed(2)}</label>
                                                                </td>
                                                                <td>
                                                                    <label htmlFor="choose-input-2">{(item.discountPrice * 1.16).toFixed(2)}</label>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="credit-info-bottom">
                                                        <button>Hissəli alış kalkulyatoru</button>
                                                        <button>Hissə-hissə al</button>
                                                    </div>
                                                </div>
                                                <div className="price-info-delivery">
                                                    <a href=""><i className="fas fa-truck"></i> Çatdırılma pulsuz </a>
                                                    <a href=""><i className="fas fa-shield"></i>Zəmanət 2 il</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-charactheristics">
                                            <div className="btn-group">
                                                <span>Texniki xüsusiyyətləri</span>
                                                <p className="hr"></p>
                                                <span>Reytinq və rəylər {item.reference}</span>
                                            </div>
                                            {
                                                item.category === "Telefon və aksesuarlar" ?
                                                    <div className="product-charactheristic">
                                                        <div className="network">
                                                            <img src="https://irshad.az/storage/product-attribute-sets/2/shebeke-0-2.svg" />
                                                            <div className="network-content">
                                                                <div className="network-content-head">
                                                                    <h2>Şəbəkə</h2>
                                                                </div>
                                                                <ul>
                                                                    {item.lte && item.lte === true ? <li>LTE: Var</li> : ""}
                                                                    {item.nfc && item.nfc === true ? <li>NFC: Var</li> : ""}
                                                                    {item.gtech && item.gtech === true ? <li>5G: Var</li> : ""}
                                                                    {item.simcard ? <li>SIM-kart növü:{item.simcard}</li> : ""}
                                                                    {item.simcardcount ? <li>SIM-kart sayı: {item.simcardcount}</li> : ""}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="battery">
                                                            <img src="https://irshad.az/storage/product-attribute-sets/3/akkumlyator.svg" />
                                                            <div className="battery-content">
                                                                <div className="battery-content-head">
                                                                    <h2>Akkumlyator</h2>
                                                                </div>
                                                                <ul>
                                                                    {item.batterycapacity ? <li>Batareya tutumu (mAh): {item.batterycapacity}</li> : ""}
                                                                    {item.batterytype ? <li>Batareyanın növü: {item.batterytype}</li> : ""}
                                                                    {item.supercharge ? <li>{item.supercharge}</li> : ""}
                                                                    {item.magsafe ? <li>{item.magsafe}</li> : ""}
                                                                    {item.magnetic ? <li>{item.magnetic}</li> : ""}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="processor">
                                                            <img src="https://irshad.az/storage/product-attribute-sets/4/prossesor.svg" />
                                                            <div className="processor-content">
                                                                <div className="processor-content-head">
                                                                    <h2>Prosessor</h2>
                                                                </div>
                                                                <ul>
                                                                    {item.operatingsystem ? <li>Əməliyyat sistemi: {item.operatingsystem}</li> : ""}
                                                                    {item.processortype ? <li>Prosessor tipi (Chipset): {item.processortype}</li> : ""}
                                                                    {item.cpu ? <li>Prosessor tezliyi (CPU): {item.cpu}</li> : ""}
                                                                    {item.gpu ? <li>Qrafik prosessor (GPU): {item.gpu}</li> : ""}
                                                                    {item.nucleuscount ? <li>Nüvə sayı: {item.nucleuscount}</li> : ""}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="screen">
                                                            <img src="https://irshad.az/storage/product-attribute-sets/5/ekran.svg" />
                                                            <div className="screen-content">
                                                                <div className="screen-content-head">
                                                                    <h2> Ekran</h2>
                                                                </div>
                                                                <ul>
                                                                    {item.screentype ? <li>Ekran tipi: {item.screentype}</li> : ""}
                                                                    {item.screensize ? <li>Ekran ölçüsü: {item.screensize}</li> : ""}
                                                                    {item.screencapabilities ? <li>Ekran imkanları: {item.screensize}</li> : ""}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="camera">
                                                            <img src="https://irshad.az/storage/product-attribute-sets/6/kamera.svg" />
                                                            <div className="camera-content">
                                                                <div className="camera-content-head">
                                                                    <h2>Kamera</h2>
                                                                </div>
                                                                <ul>
                                                                    {item.maincamera ? <li>Əsas kamera: {item.maincamera}</li> : ""}
                                                                    {item.maincamerafeatures ? <li>Özəlliklər: {item.maincamerafeatures}</li> : ""}
                                                                    {item.frontcamera ? <li>Ön kamera: {item.frontcamera}</li> : ""}
                                                                    {item.frontcamerafeatures ? <li>Özəlliklər: {item.frontcamerafeatures}</li> : ""}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="video">
                                                            <img src="https://irshad.az/storage/product-attribute-sets/7/video.svg" />
                                                            <div className="video-content">
                                                                <div className="video-content-head">
                                                                    <h2> Video</h2>
                                                                </div>
                                                                <ul>
                                                                    {item.mainvideocamera ? <li>Əsas kamera: {item.mainvideocamera}</li> : ""}
                                                                    {item.frontvideocamera ? <li>Ön kamera: {item.frontvideocamera}</li> : ""}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="storage">
                                                            <img src="https://irshad.az/storage/product-attribute-sets/8/yaddash.svg" />
                                                            <div className="storage-content">
                                                                <div className="storage-content-head">
                                                                    <h2>Yaddaş</h2>
                                                                </div>
                                                                <ul>
                                                                    {item.ram ? <li>Operativ yaddaş (RAM): {item.ram}</li> : ""}
                                                                    {item.storage ? <li>Daxili yaddaş: {item.storage}</li> : ""}
                                                                    {item.memorycard ? <li>Yaddaş kartı dəstəyi: {item.memorycard}</li> : ""}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="case">
                                                            <img src="https://irshad.az/storage/product-attribute-sets/8/yaddash.svg" />
                                                            <div className="case-content">
                                                                <div className="case-content-head">
                                                                    <h2>Korpus</h2>
                                                                </div>
                                                                <ul>
                                                                    {item.sizes ? <li>Ölçülər (H x E x Q):  {item.sizes}</li> : ""}
                                                                    {item.weight ? <li>Çəki: {item.weight}</li> : ""}
                                                                    {item.glass ? <li>{item.glass}</li> : ""}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div> :
                                                    <div className="product-charactheristic">
                                                        <ul>
                                                            {item.brand ? <li>Brend : {item.brand}</li> : ""}
                                                            {item.bluetooh ? <li>Bluettoh: {item.bluetooh}</li> : ""}
                                                            {item.strapMaterial ? <li>Kəmərin materialı : {item.strapMaterial}</li> : ""}
                                                            {item.numberSupport ? <li>Nömrə Dəstəyi : {item.numberSupport}</li> : ""}
                                                            {item.wifi ? <li>Wi-Fi : {item.wifi}</li> : ""}
                                                            {item.microphone ? <li>Mikrofon : {item.microphone}</li> : ""}
                                                            {item.color ? <li>Rəng : {item.color}</li> : ""}
                                                            {item.waterResistance ? <li>Sudan qorunma : {item.waterResistance}</li> : ""}
                                                            {item.nfc ? <li>NFC : {item.nfc}</li> : ""}
                                                            {item.control ? <li>İdarəetmə : {item.control}</li> : ""}
                                                            {item.camera ? <li>Kamera : {item.camera}</li> : ""}
                                                            {item.screenSize ? <li>Ekran ölçüsü : {item.screenSize}</li> : ""}
                                                            {item.casingMaterial ? <li>Korpusun materialı : {item.casingMaterial}</li> : ""}
                                                            {item.batteryCapacity ? <li>Akkumulyatorun həcmi (mAh) : {item.batteryCapacity}</li> : ""}
                                                            {item.batteryLife ? <li>İşləmə müddəti : {item.batteryLife}</li> : ""}
                                                            {item.plugins ? <li>Plugins : {item.plugins}</li> : ""}
                                                            {item.specialFeatures ? <li>Özəlliklər : {item.specialFeatures}</li> : ""}
                                                            {item.speaker ? <li>Səs ucaldıcı : {item.speaker}</li> : ""}
                                                            {item.languageOptions ? <li>Dil seçimləri : {item.languageOptions}</li> : ""}
                                                            {item.Airconditioner ? <li>Kondisioner növü : {item.Airconditioner}</li> : ""}
                                                            {item.roomArea ? <li>Tövsiyə edilən otaq sahəsi : {item.roomArea}</li> : ""}
                                                            {item.HeatingpowerHeatingpower ? <li>İsitmə gücü : {item.Heatingpower}</li> : ""}
                                                            {item.Coolingpower ? <li>Soyutma gücü : {item.Coolingpower}</li> : ""}
                                                            {item.Refrigeranttype ? <li>Freon növü : {item.Refrigeranttype}</li> : ""}
                                                            {item.Compressortype ? <li>Kompressor tipi : {item.Compressortype}</li> : ""}
                                                            {item.BTU ? <li>BTU : {item.BTU}</li> : ""}
                                                            {item.Energyclass ? <li>Enerji sinifi : {item.Energyclass}</li> : ""}
                                                            {item.Warrantyperiod ? <li>Zəmanət müddəti : {item.Warrantyperiod}</li> : ""}
                                                            {item.Mainmodes ? <li>Əsas rejimlər : {item.Mainmodes}</li> : ""}
                                                            {item.Filters ? <li>Filterlər : {item.Filters}</li> : ""}
                                                            {item.storage2 ? <li>Daxili yaddaş : {item.storage2}</li> : ""}
                                                            {item.screensize ? <li>Ekran ölçüsü : {item.screensize}</li> : ""}
                                                            {item.displayResolution ? <li>Görüntü imkanı : {item.displayResolution}</li> : ""}
                                                            {item.HDMI ? <li>HDMI : {item.HDMI}</li> : ""}
                                                            {item.keyboardBacklight ? <li>Klavişlərin ışıqlandırması : {item.keyboardBacklight}</li> : ""}
                                                            {item.LAN ? <li>LAN : {item.LAN}</li> : ""}
                                                            {item.microphone ? <li>Mikrofon : {item.microphone}</li> : ""}
                                                            {item.RAM ? <li>Operativ yaddaş : {item.RAM}</li> : ""}
                                                            {item.opticalDrive ? <li>Optik sürücü : {item.opticalDrive}</li> : ""}
                                                            {item.processor ? <li>Prosessor : {item.processor}</li> : ""}
                                                            {item.graphicsMemory ? <li>Qrafik yaddaş : {item.graphicsMemory}</li> : ""}
                                                            {item.USB ? <li>USB : {item.USB}</li> : ""}
                                                            {item.webcam ? <li>Veb-kamera : {item.webcam}</li> : ""}
                                                            {item.WiFi ? <li> WiFi : {item.WiFi}</li> : ""}
                                                            {item.weight ? <li>Çəki : {item.weight}</li> : ""}
                                                            {item.operatingSystem ? <li>Əməliyyat sistemi : {item.operatingSystem}</li> : ""}

                                                        </ul>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    )
}
export default Product