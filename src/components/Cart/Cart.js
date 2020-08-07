import React, { Component } from 'react'

import "./Cart.css"
import { Link } from 'gatsby'



export default class Cart extends Component {
    state = {
        navbarDropdown: false,
        width: 0,
        height: 0,
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.updateWindowDimensions()
            window.addEventListener("resize", this.updateWindowDimensions)
            // this.targetElement = document.querySelector('.navbar__mobile__wrapper');
        }

    }

    componentWillUnmount() {
        if (typeof window !== 'undefined') {
            window.removeEventListener("resize", this.updateWindowDimensions)
        }

    }

    updateWindowDimensions = () => {

        this.setState(
            { width: window.innerWidth, height: window.innerHeight },
            () => {
                if (this.state.width > 768) {
                    this.setState({ navbarDropdown: false }, () => {
                        var body = document.querySelector("body")
                        body.style.overflow = "auto"
                    })
                }
            }
        )
    }

    render() {


        return (
            <div className="Cart__wrapper">
                <div className="Cart__container">
                    <div className="Cart__block">

                        <div className="Cart__left">

                            {this.state.width > 768 ?
                                <div className="Cart__table__wrapper">
                                    <div className="Cart__table__header">
                                        <div className="Cart__table__header__product">Product</div>
                                        <div className="Cart__table__header__licence">Licence</div>
                                        <div className="Cart__table__header__quty">Qty.</div>
                                        <div className="Cart__table__header__total">Total</div>
                                    </div>
                                    <div className="Cart__table__header">
                                        {typeof window !== 'undefined' ?
                                            <div className="Cart__table__header__product color_blue">
                                                {localStorage.getItem("reportTitle")}</div> : ""}
                                        <div className="Cart__table__header__licence">SingleUser</div>
                                        <div className="Cart__table__header__quty">1</div>
                                        {typeof window !== 'undefined' ?
                                            <div className="Cart__table__header__total">${localStorage.getItem("reportValue")}</div>
                                            : ""}
                                    </div>
                                </div>
                                :
                                <div className="Cart__mobile__card__wrapper">
                                    <div className="Cart__mobile__card">
                                        <div>
                                            <div>
                                                <div className="Cart__mobile__card__title">Product</div>
                                                {typeof window !== 'undefined' ?
                                                    <div className="Cart__mobile__card__value color_blue">{localStorage.getItem("reportTitle")}</div>
                                                    : ""}
                                            </div>
                                            <div className="Cart__mobile__card__grid__view">
                                                <div>
                                                    <div className="Cart__mobile__card__title">Licence</div>
                                                    <div className="Cart__mobile__card__value">SingleUser</div>
                                                </div>
                                                <div>
                                                    <div className="Cart__mobile__card__title">Qty.</div>
                                                    <div className="Cart__mobile__card__value">1</div>
                                                </div>
                                                <div>
                                                    <div className="Cart__mobile__card__title">Total</div>
                                                    {typeof window !== 'undefined' ?
                                                        <div className="Cart__mobile__card__value">${localStorage.getItem("reportValue")}</div>
                                                        : ""}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }

                            <div className="Cart_total__wrapper">
                                <div className="Cart_total__flex">
                                    <div className="Cart_total__title">Cart Totals</div>
                                    <div className="Cart_total__value__line">
                                        <span className="Cart__mobile__card__title">Subtotal</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {typeof window !== 'undefined' ? <span>${localStorage.getItem("reportValue")}</span> : ""}
                                    </div>
                                    <div className="Cart_total__value__line">
                                        <span className="Cart__mobile__card__title">Subtotal</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        {typeof window !== 'undefined' ? <span className="Cart__mobile__card__title">${localStorage.getItem("reportValue")}</span> : ""}
                                    </div>

                                    <div >
                                        <Link to="/checkout" className="Cart_total__value__btn__link"> <button className="Cart_total__btn"> Proceed to checkout</button></Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="About__right">
                            <div className="About__right__block">
                                <div className="About__right__block__title">Latest Report</div>
                                <div className="About__right__report">Global Organic Carbon Analyzers Market Insights and Forecast to 2026</div>
                                <div className="About__right__report">Global Tube Mill Market Insights and Forecast to 2026</div>
                                <div className="About__right__report">Global Aluminium Titanic Boron Alloy Market Insights and Forecast to 2026</div>
                                <div className="About__right__report">Global License Plate Recognition Camera Market Insights and Forecast to 2026</div>
                            </div>
                            <div className="About__right__block">
                                <div className="About__right__block__title">Latest News</div>
                                <div className="About__right__report">Global Organic Carbon Analyzers Market Insights and Forecast to 2026</div>
                                <div className="About__right__report">Global Tube Mill Market Insights and Forecast to 2026</div>
                                <div className="About__right__report">Global Aluminium Titanic Boron Alloy Market Insights and Forecast to 2026</div>
                                <div className="About__right__report">Global License Plate Recognition Camera Market Insights and Forecast to 2026</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
