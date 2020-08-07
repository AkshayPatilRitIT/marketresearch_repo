import React, { Component } from 'react'
import './PressRelease.css'
import { navigate } from "@reach/router"

import { Pr1, Pr2, Pr3 } from '../../../images/landing'
export default class PressRelease extends Component {
    clickCard = () => {
        navigate("/news")
    }
    render() {
        return (
            <div className="Landing__pressrelease__wrapper">
                <div className="Landing__pressrelease__container">
                    <div className="Landing__pressrelease__tile"> Press Release</div>
                    <div className="Landing__pressrelease__block">
                        <div className="Landing__pressrelease__card" onClick={this.clickCard}>
                            <img src={Pr1} className="Landing__pressrelease__card__img" alt="press release pic" />
                            <div className="Landing__pressrelease__card__inner">
                                <div className="Landing__pressrelease__card__date"><span>2 feb 20</span> | <span>construction</span></div>
                                <div className="Landing__pressrelease__card__text">Do so written raising parlor sprirital Mr elderly</div>
                                <div className="Landing__pressrelease__card__readmore">Read more</div>
                            </div>
                        </div>
                        <div className="Landing__pressrelease__card" onClick={this.clickCard}>
                            <img src={Pr2} className="Landing__pressrelease__card__img" alt="press release pic" />
                            <div className="Landing__pressrelease__card__inner">
                                <div className="Landing__pressrelease__card__date"><span>2 feb 20</span> | <span>construction</span></div>
                                <div className="Landing__pressrelease__card__text">Do so written raising parlor sprirital Mr elderly</div>
                                <div className="Landing__pressrelease__card__readmore">Read more</div>
                            </div>
                        </div>
                        <div className="Landing__pressrelease__card" onClick={this.clickCard}>
                            <img src={Pr3} className="Landing__pressrelease__card__img" alt="press release pic" />
                            <div className="Landing__pressrelease__card__inner">
                                <div className="Landing__pressrelease__card__date"><span>2 feb 20</span> | <span>construction</span></div>
                                <div className="Landing__pressrelease__card__text">Do so written raising parlor sprirital Mr elderly</div>
                                <div className="Landing__pressrelease__card__readmore">Read more</div>
                            </div>
                        </div>
                        <div className="Landing__pressrelease__card" onClick={this.clickCard}>
                            <img src={Pr1} className="Landing__pressrelease__card__img" alt="press release pic" />
                            <div className="Landing__pressrelease__card__inner">
                                <div className="Landing__pressrelease__card__date"><span>2 feb 20</span> | <span>construction</span></div>
                                <div className="Landing__pressrelease__card__text">Do so written raising parlor sprirital Mr elderly</div>
                                <div className="Landing__pressrelease__card__readmore">Read more</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
