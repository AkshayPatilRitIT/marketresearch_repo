import React, { Component } from 'react'
import "./Footer.css"
import { Link } from 'gatsby'
import Logo from '../../images/logo.png'
import {
    Facebook,
    Instagram,
    Twitter,
    Paypal,
    Visa,
    Debit,
    WireTransfer
} from '../../images/landing'


export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="Footer__container">
                    <div className="Footer__wrapper">
                        <div className="Footer__block1">
                            {/* <div className="Footer__title">Service</div>
                            <div style={{ paddingRight: "30px", lineHeight: "1.5rem" }}>Aliqua ea eu voluptate consectetur ipsum Lorem.Nisi do anim cillum id pariatur cillum. Qui est Lorem aliqua consequat aliquip labore laborum excepteur velit ullamco commodo. Exercitation velit ipsum commodo cupidatat quis qui aute proident deserunt cillum quis. Voluptate mollit consectetur cupidatat ea in veniam excepteur dolor occaecat tempor cillum.</div> */}

                            <div className="Footer__logo">
                                <Link to="/">
                                    <img src={Logo} className="Footer__logo__img" alt="footer logo" />
                                </Link>
                                <div className="Footer__logo__block">
                                    <div className="Footer__logo__wrapper"><img src={Facebook} className="Footer__logo__icon" alt="social icon" /></div>
                                    <div className="Footer__logo__wrapper"><img src={Twitter} className="Footer__logo__icon" alt="social icon" /></div>
                                    <div className="Footer__logo__wrapper"><img src={Instagram} className="Footer__logo__icon" alt="social icon" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="Footer__block2">
                            <div className="Footer__title">Company</div>
                            <div className="Footer__link__wrapper">
                                <Link className="Footer__link" to="/about_us">About us</Link>
                            </div>
                            <div className="Footer__link__wrapper">
                                <Link className="Footer__link" to="/contact">Contact us</Link>
                            </div>

                            <div className="Footer__title">Quick Link</div>
                            <div className="Footer__link__wrapper">
                                <Link className="Footer__link" to="/faq">FAQ</Link>
                            </div>
                            <div className="Footer__link__wrapper">
                                <Link className="Footer__link" to="/privacy">Privacy Policy</Link>
                            </div>
                        </div>
                        <div className="Footer__block3">
                            <div className="Footer__title">We accept</div>
                            <div className="Footer__block__img">
                                <img src={Paypal} className="payment__icon" alt="payment icon" />
                                <img src={Debit} className="payment__icon" alt="payment icon" />
                                <img src={Visa} className="payment__icon" alt="payment icon" />
                                <img src={WireTransfer} className="payment__icon" alt="payment icon" />
                            </div>
                        </div>
                        <div className="Footer__block4">
                            <div className="Footer__title">About us</div>
                            <div style={{ lineHeight: "1.5rem" }}>Market Report Expert is a futuristic market intelligence company, helping customers flourish their business strategies and make better decisions using actionable intelligence. With transparent information pool, we meet clients’ objectives, commitments on high standard and targeting possible prospects for SWOT analysis and market research reports.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer__copyrights">
                    Copyrights &copy;2020 Market Report Expert | Privacy Policy
                </div>
            </div>
        )
    }
}
