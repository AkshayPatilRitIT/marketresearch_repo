import React, { Component } from 'react'
import { Landing } from "../../../images/landing"
import "./FirstSection.css"
export default class FirstSection extends Component {
    state = {
        navbarDropdown: false,
        width: 0,
        height: 0,
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            this.updateWindowDimensions()
            window.addEventListener("resize", this.updateWindowDimensions)
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
            <div style={{ marginTop: "-30px" }}>
                {this.state.width > 768 ?
                    <div className="Landing_desktop__wrapper">
                        <div className="Landing_desktop__container">
                            <div className="Landing_desktop__left">
                                <div className="Landing_desktop__title">Welcome to Market Report Expert</div>
                                <div className="Landing_desktop__text">Market Report Expert is a futuristic market intelligence company, helping customers flourish their business strategies and make better decisions using actionable intelligence.</div>
                                <div className="Landing_desktop__btns">
                                    <div className="Landing_desktop__btn__wrapper1"><button className="Landing_desktop__btn1">Get in Touch</button></div>
                                    <div className="Landing_desktop__btn__wrapper2"><button className="Landing_desktop__btn2">Learn More</button></div>
                                </div>
                            </div>
                            <div className="Landing_desktop__right">
                                <img src={Landing} className="Landing_desktop__right__img" alt="landing desktop" />
                            </div>
                        </div>
                    </div>
                    :
                    <div className="Landing__wrapper">
                        <div className="Landing__image__title">Welcome to Market Research Expert</div>
                        <div className="Landing__desktop__left__subtitle">Market Report Expert is a futuristic market intelligence company, helping customers flourish their business strategies and make better decisions using actionable intelligence.</div>
                        <div className="Landing_desktop__btns Landing_desktop__btns__mob ">
                            <div className="Landing_desktop__btn__wrapper1"><button className="Landing_desktop__btn1">Get in Touch</button></div>
                            <div className="Landing_desktop__btn__wrapper2"><button className="Landing_desktop__btn2">Learn More</button></div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
