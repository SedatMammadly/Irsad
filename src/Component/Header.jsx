import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Context, catalouge, product } from './Context';
import "./Header.css"
import axios from 'axios';
import Typewriter from 'typewriter-effect'
import { Link } from 'react-router-dom';
function Header() {
    const { isActive, setIsActive, setPannierCount, pannierCount, offers, setOffers } = useContext(Context)
    const [paymentModal, setPaymentModal] = useState(false)
    const [isCategory, setIsCategory] = useState([])
    const [searchOffers, setSearchOffers] = useState([])
    const [searchValue, setSearchValue] = useState(null)
    const [offers2, setOffers2] = useState(product)
    const [searchPopup, setSearchPopup] = useState(false)
    const [isDefault, setIsDefault] = useState([])
    const menu = useRef()
    const modalRef = useRef()
    const catalouged = () => {
        setIsActive(!isActive)
        if (menu.current.style.display == "block") {
            menu.current.style.display = "none"
        }
        else {
            menu.current.style.display = "block"
        }
    }
    const payment = () => {
        setPaymentModal(true)
    }
    const closePayment = () => {
        setPaymentModal(false)
    }
    const menuItem = (event) => {
        const subMenu = event.target
        subMenu.style.color = "green"
    }

    useEffect(() => {
        const category = [...new Set(offers2.map(item => item.category))];
        setIsCategory(category);
    }, [offers2]);

    const searchProduct = (category) => {
        const filteredOffers = offers2.filter(item =>
            category.includes(item.category)
        );
        setSearchOffers(filteredOffers.slice(0, 5));
        setSearchValue("");
    };

    const search = (searchVal) => {
        const newOffers = offers2.filter(item =>
            item.model.toLowerCase().includes(searchVal.toLowerCase())
        );
        if (searchVal === "") {
            setSearchOffers(null)
        }
        else {
            setSearchOffers(newOffers.slice(0, 5));
        }
        setSearchPopup(true);
        setSearchValue(searchVal);
    };
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                setSearchPopup(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);

 
    }, []);
    const Goproduct=()=>{
        setSearchPopup(false);
        setSearchValue("")
    }
    return (
        <div className="Header">

            <div className='Header-top-background'>
                <div className='Container'>
                    <div className="Header-top">
                        <div className="Header-top-left">
                            <ul>
                                <li><a href="">Kampaniyalar</a></li>
                                <li><a href="">Mağazalar</a></li>
                                <li><a className='animated' href="">Outlet</a></li>
                                <li><a className='head-button' href="">Kondisonerlər</a></li>
                                <li><a className='head-button' href="">Velosipedlər</a></li>
                                <li><img src="https://irshad.az/storage/pages/1429/samsung-wordmark-2.svg" alt="" /></li>
                            </ul>
                        </div>
                        <div className="Header-top-right">
                            <img style={{ width: "60px", height: "18px" }} src="https://irshad.az/images/svg-icons/ulduz171-black.svg" alt="" />
                            <ul>
                                <li className='Az'>
                                    <div className="Azerbaijan">
                                        <img src="https://irshad.az/images/svg-icons/flag-az.svg" alt="" />
                                        <span>Azərbaycan dili </span>
                                    </div>
                                    <img style={{ width: "12px" }} src="	https://irshad.az/images/svg-icons/arrow-bottom.svg" alt="" />
                                    <div className="dropdown">
                                        <img src="data:image/jpeg;base64,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AAAAB5K/42P3fkuUXog5yvffm+O0Fsn8kq/qqP6YK9L65v22tm/iUPth2XMa8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8lf8bH7vyXKL0Qc5XvvzfHaC2T+SVf1VH9MFel9c37bWzfxKH2w7LmNeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeSv+Nj935LlF6IOcr335vjtBbJ/JKv6qj+mCvS+ub9trZv4lD7YdlzGvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPJX/Gx+78lyi9EHOV7783x2gtk/klX9VR/TBXpfXN+21s38Sh9sOy5jXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHjr/jY/d+S5ReiDm699+b47QVy3qErQlqFClW/1QoUYR/pj7YQ/0ikq9JGeMYQeqlbFTo6vRyTTf3CWH+R5Lbzk8btpaPG60nJZ45UsekS85PG7aWhutJyOOVLHpEvOTxu2lobrScjjlSx6RLzk8btpaG60nI45UsekS85PG7aWhutJyOOVLHpEvOTxu2lobrScjjlSx6RLzk8btpaG60nI45UsekS85PG7aWhutJyOOVLHpEvOTxu2lobrScjjlSx6RLzk8btpaG60nI45UsekS85PG7aWhutJyOOVLHpEvOTxu2lobrScjjlSx6RLzk8btpaG60nI45UsekS85PG7aWhutJyOOVLHpEvOTxu2lobrScjjlSx6RLzk8btpaG60nI45UsekS85PG7aWhutJyOOVLHpEvOTxu2lobrScjjlSx6RLzk8btpaG60nI45UsekS85PG7aWhutJyOOVLHpEvOTxu2lobrScjjlSx6RLzk8btpaG60nI45UsekS85PG7aWhutJyOOVLHpEvOTxu2lobrScjjlSx6RLzk8btpaG60nI45UsekS85PG7aWhutJyOOVLHpEvOTxu2lobrScjjlSx6RLzk8btpaG60nI45UsekS85PG7aWhutJyOOVLHpEvOTxu2lobrScjjlSx6RLzk8btpaG60nI45UsekS85PG7aWhutJyOOVLHpEvOTxu2lobrScjjlSx6ReWunpalWRjRrPg/8x/t/pYkopoSwhFpa3aNWpKWaaE2keT/2Q==" alt="" />
                                        <span> Русский язык </span>
                                    </div>
                                </li>

                            </ul>
                            <div className="user">
                                <i className="far fa-user"></i>
                                <span>Şəxsi kabinet</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Container">
                <div className="Header-bottom">
                    <div className="Header-logo">
                        <Link to={"/"}><img src="https://irshad.az/images/svg-icons/logo.svg?v=6" alt="" /></Link>
                    </div>
                    <button onClick={catalouged} className={`catalouge-background ${isActive ? "active" : ""}`}>
                        <div className="catalouge">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <span>Kataloq</span>
                    </button>
                    {catalouge.map(item => {
                        return (
                            <div ref={menu} className="menus">
                                <div className="menu-section">
                                    <div className="menu-tools">
                                        <a href=""></a>
                                        <span></span>
                                        <a href=""></a>
                                    </div>
                                    <div className="menu-items">
                                        <li className='menu-item outlet'><div className="menu-1"><img src="https://irshad.az/images/svg-icons/outlet.svg" /><span className='animated'>Outlet</span></div></li>
                                        <li className='menu-item'><div className="menu menu-2"><img src="https://irshad.az/images/svg-icons/online.svg" /> <span>Yalnız onlayn məhsullar</span></div></li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-3">
                                                <img src="https://irshad.az/storage/product-categories/1/1.svg" alt="" /><span >Telefon ve aksesuarlar</span>
                                            </div>
                                            <div key={item.id} className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.mobile.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.mobile.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.accessories.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.accessories.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.headset.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.headset.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.electronicbook.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.electronicbook.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.containerbook.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.containerbook.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.kidwatch.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.kidwatch.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.watches.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.watches.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.Smartwatces.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.Smartwatces.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.bracelets.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.bracelets.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.landlinephones.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.landlinephones.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu-4 menu">
                                                <img src="https://irshad.az/storage/product-categories/27/icons8-appliances-1-1.svg" alt="" /><span>Boyuk meiset texnikasi</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.climate.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.climate.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.Stasionary.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.Stasionary.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.equipment.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.equipment.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-5">
                                                <img src="https://irshad.az/storage/product-categories/2287/icons8-microwave-1.svg" alt="" /><span>Kicik meiset texnikasi</span>

                                            </div>
                                            <div className="sub-menu">

                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.kitchen.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.kitchen.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.vacuum.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.vacuum.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.dishes.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.dishes.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.vacuum.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.vacuum.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.personalcare.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.personalcare.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.irons.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.irons.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.steamcleaner.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.steamcleaner.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.scales.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.scales.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.Robotvacuum.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.Robotvacuum.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.sewing.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.sewing.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.kitchenaccessory.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.kitchenaccessory.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.cofeeaccessory.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.cofeeaccessory.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-6">
                                                <img src="https://irshad.az/storage/product-categories/36/3.svg" alt="" /><span>TV və Audio </span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.TV.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.TV.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.tvaccessory.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.tvaccessory.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.hometheater.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.hometheater.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.sound.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.sound.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.soundbars.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.soundbars.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.musiccenter.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.musiccenter.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-7">
                                                <img src="https://irshad.az/storage/product-categories/2288/icons8-camera-1.svg" alt="" /><span>Foto texnika </span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.cameras.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.cameras.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.camerasaccessory.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.camerasaccessory.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.lenses.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.lenses.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-8">
                                                <img src="https://irshad.az/storage/product-categories/38/4.svg" /><span>Notbuk, planşet və kompüter texnikası</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.laptops.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.laptops.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.tablets.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.tablets.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.tabletbox.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.tabletbox.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.Monobloklar.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.Monobloklar.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.Netbook.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.Netbook.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.Desktop.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.Desktop.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.Monitorlar.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.Monitorlar.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.designtablet.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.designtablet.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.MFA.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.MFA.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.laptopbags.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.laptopbags.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.computerequipment.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.computerequipment.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.computeraccessory.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.computeraccessory.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.Projector.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.Projector.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.Projectoraccessory.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.Projectoraccessory.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-9">
                                                <img src="https://irshad.az/storage/product-categories/2290/icons8-furniture-1.svg" /><span>Mebellər və tekstil</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.furniture.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.furniture.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.textile.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.textile.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-10">
                                                <img src="https://irshad.az/storage/product-categories/519/5.svg" /><span>Evə uyğun məhsullar</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.homeaccessory.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.homeaccessory.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.hamam.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.hamam.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.cookingequipment.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.cookingequipment.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.petproducts.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.petproducts.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-12">
                                                <img src="https://irshad.az/storage/product-categories/520/6.svg" /><span>Əyləncə və Uşaq Aləmi</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.kidworld.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.kidworld.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.gameconsoles.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.gameconsoles.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.toys.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.toys.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-13">
                                                <img src="https://irshad.az/storage/product-categories/2280/icons8-fiat-500-1.svg" /><span>Avtomobil üçün məhsullar</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.autoaccessory.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.autoaccessory.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.carvash.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.carvash.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.autoequipment.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.autoequipment.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.autooil.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.autooil.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-14">
                                                <img src="https://irshad.az/storage/product-categories/530/7.svg" /><span>Nəqliyyat</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.Skuter.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.Skuter.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.elektromobile.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.elektromobile.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.smartvheel.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.smartvheel.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.Moped.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.Moped.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-15">
                                                <img src="https://irshad.az/storage/product-categories/532/8.svg" /><span>İdman və sağlamlıq</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.gymword.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.gymword.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.medical.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.medical.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.tourism.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.tourism.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.autooil.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.autooil.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-16">
                                                <img src="https://irshad.az/storage/product-categories/1103/inshaat.svg	" /><span>İnşaat</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.construction.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.construction.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-17">
                                                <img src="https://irshad.az/storage/product-categories/2286/icons8-moleskine-1-1.svg" /><span>Dəftərxana ləvazimatları</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.school.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.school.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.office.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.office.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.bags.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.bags.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-18">
                                                <img src="https://irshad.az/storage/product-categories/2289/icons8-guitar-1.svg" /><span>Musiqi avadanlıqları</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.musicinstrument.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.musicinstrument.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.djinstrument.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.djinstrument.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.studioaccessory.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.studioaccessory.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.studioinstrument.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.studioinstrument.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-19">
                                                <img src="https://irshad.az/storage/product-categories/1507/shexsi-eshya.svg" /><span>Şəxsi əşyalar</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.Aksesuarlar.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.Aksesuarlar.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.cosmetic.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.cosmetic.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li key={item.id} className='menu-item'>
                                            <div className="menu menu-20">
                                                <img src="https://irshad.az/storage/product-categories/2087/icons8-gift-2.svg" /><span>Hədiyyə kartları</span>
                                            </div>
                                            <div className="sub-menu">
                                                <div className="sub-menu-items">
                                                    <div className="sub-menu-item">
                                                        <div className="sub-menu-head">
                                                            <span>{item.presentcard.catalog}</span>
                                                        </div>
                                                        <ul>
                                                            {[item.presentcard.title][0].map(item => <li>{item}</li>)}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="search">
                        <input onChange={(e) => search(e.target.value)} value={searchValue} className='search-input' type="text" />
                        <a href=""> <i className="fas fa-search"></i></a>
                        {searchValue===""?
                        <Typewriter
                        options={{
                            strings: ['ayda 29.99 AZN-dən kondisionerlər'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 1,
                            delay: 100,

                        }}
                        className="auto-string"
                    />:""
                        }

                        {searchPopup ?
                            <div ref={modalRef} className="search-modal">
                                <div className="search-modal-left">
                                    <h3>Kateqoriyalar</h3>
                                    <ul>
                                        {isCategory.map(item =>
                                            <li onMouseOver={() => searchProduct(item)}>{item}</li>
                                        )}
                                    </ul>

                                </div>
                                <div className="search-modal-right">
                                    <div className="product-offers">
                                        {searchOffers !== null
                                            ? searchOffers.map(item => (
                                                <div className="product-offer" key={item.id}>
                                                    <div className="product-offer-img">
                                                       <Link to={`/product/${item.id}`}> <img onClick={Goproduct} src={item.productImgs[0]} alt={item.model} /></Link>
                                                    </div>
                                                    <div className="product-offer-right">
                                                        <p>{item.category}</p>
                                                        <p>{item.model}</p>
                                                        <p>{item.discountPrice} AZN</p>
                                                        <p>{item.price} AZN</p>
                                                    </div>
                                                </div>
                                            ))
                                            : offers.slice(0, 5).map(item => (
                                                <div className="product-offer" key={item.id}>
                                                    <div className="product-offer-img">
                                                    <Link to={`/product/${item.id}`}> <img onClick={Goproduct} src={item.productImgs[0]} alt={item.model} /></Link>
                                                    </div>
                                                    <div className="product-offer-right">
                                                        <p>{item.category}</p>
                                                        <p>{item.model}</p>
                                                        <p>{item.discountPrice} AZN</p>
                                                        <p>{item.price} AZN</p>
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>

                            </div> : ""

                        }
                    </div>
                    <div className="Header-tools">
                        <div className="scale">
                            <div><i className="fas fa-balance-scale"></i></div>
                            <span>Müqayisə</span>
                        </div>
                        <div className="heart">
                            <div><i className="far fa-heart"></i></div>
                            <span>Bəyəndim</span>
                        </div>
                        <div className='pannier' >
                            <div><Link to={"/PrivatePannier"}><i className="fas fa-shopping-cart"></i></Link></div>
                            <span>Səbət</span>
                            <span className='header-pannier-count'>{pannierCount === 0 ? "" : pannierCount}</span>
                        </div>
                        <label htmlFor='payment-input' className="payment">
                            <div><i className="far fa-credit-card"></i></div>
                            <span>Aylıq ödəniş</span>
                        </label>
                        <input onClick={payment} type='checkbox' id="payment-input"></input>
                        {paymentModal && <div className="payment-modal">
                            <div className="payment-modal-head">
                                <h2>Aylıq ödəniş</h2>
                                <button onClick={closePayment}><i class="fas fa-times"></i></button>
                            </div>
                            <div className="payment-modal-terminals">
                                <a href="https://www.million.az/attributes/Irshad"><img src="https://irshad.az/images/million.jpeg" alt="" /></a>
                                <a href="https://www.e-pul.az/epay/az/category/online_store/irshad"><img src="https://irshad.az/images/epul.jpeg" alt="" /></a>
                                <a href="https://emanat.az/"><img src="https://irshad.az/images/emanat.jpeg" alt="" /></a>
                                <a href="https://hesab.az/unregistered/#/direct-pay/store/irshad/parameters"><img src="https://irshad.az/images/hesabaz.jpeg" alt="" /></a>
                            </div>
                        </div>
                        }
                        <div className={paymentModal ? "payment-blur" : ""}></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header