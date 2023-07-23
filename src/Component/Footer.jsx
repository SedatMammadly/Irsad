import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div className='footer'>
            <div className="footer-line">
            </div>
            <div className="container-fluid">
                <div className="row footer-items">
                    <div className="col-md-3">
                        <div className="footer-qr-code">
                            <img src="https://irshad.az/images/mobile-qr.png" alt="" />
                            <p>Skan et, Qeydiyyatdan keç 10 AZN BONUS qazan!</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu-head">
                            <h2>Şirkət</h2>
                        </div>
                        <ul className="footer-menu-items">
                            <li>Haqqımızda</li>
                            <li>Mağazalar</li>
                            <li>Vakansiyalar</li>
                            <li>Kampaniyalar</li>
                            <li>Şərtlərimiz</li>
                            <li>Bonusdan istifadə qaydaları</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu-head">
                            <h2>Müştəri üçün</h2>
                        </div>
                        <ul className="footer-menu-items">
                            <li>Şadkart</li>
                            <li>Sual-Cavab</li>
                            <li>Hissə-hissə ödəniş</li>
                            <li>Məxfilik siyasəti</li>
                            <li>Korporativ satışlar</li>
                            <li>İstifadə qaydaları</li>
                            <li>Bloq</li>
                            <li>Şikayət və təkliflər</li>
                        </ul>
                    </div>
                    <div className="col-md-4 ms-auto">
                        <div className="footer-menu-head">
                            <h2>Əlaqə</h2>
                        </div>
                        <div className="footer-menu-contacts">
                            <img src="https://irshad.az/images/svg-icons/ulduz171-white.svg" alt="" />
                            <i className="fas fa-home"></i>
                            <p>Əhməd Rəcəbli 1/9,
                                Azərbaycan, Bakı şəhəri
                            </p>
                        </div>
                        <div className="footer-social-media">
                            <span>Bizi izləyin</span>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/irshad0171" target='_blank'><i className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com/irshad" target='_blank' ><i className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/c/irshad" target='_blank'><i className="fab fa-youtube"></i></a>
                                <a href="https://api.whatsapp.com/send?phone=994777770171" target='_blank'><i className="fab fa-whatsapp"></i></a>
                                <a href="https://t.me/irshad" target='_blank'><i className="fab fa-telegram"></i></a>
                                <a href="https://www.tiktok.com/@irshad.az" target='_blank'><i className="fab fa-tiktok"></i></a>
                                <a href="https://www.linkedin.com/company/irshad" target='_blank'><i className="fab fa-linkedin"></i></a>
                                <a href="https://twitter.com/irshad" target='_blank'><i className="fab fa-tiwitter"></i></a>
                            </div>
                        </div>

                    </div>
                    <div className="footer-bottom">
                        <div className="container-fluid">
                            <div className="row footer-bottom-items">
                                <div className="col-md-3 footer-bottom-logo" >
                                    <img src="https://irshad.az/images/svg-icons/footer-logo.svg?ver=6" alt="" />
                                </div>
                                <div className="col-md-5 footer-bottom-author">
                                    <span>İrşad © 2000 - 2023. Bütün hüquqlar qorunur. </span>
                                </div>
                                <div className="col-md-4 author-signature">
                                    <span>Site by</span>
                                    <img src="https://irshad.az/images/svg-icons/JIS.svg" alt="" />
                                    <span>Jeykhun Imanov Studio</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer