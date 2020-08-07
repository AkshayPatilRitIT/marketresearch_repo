import React, { Component } from 'react'

import "./LatestNews.css"

import { Pr1, Pr2, Pr3 } from '../../../images/landing'

export default class LatestNews extends Component {
    render() {
        return (

            <div className="Landing__pressrelease__wrapper ">
                <div className="Landing__pressrelease__container">
                    <div className="Landing__pressrelease__tile" > Latest News</div>
                    <div className="Landing__pressrelease__block">
                        <div className="Landing__pressrelease__card">
                            <img src={Pr1} className="Landing__pressrelease__card__img" alt="press release pic" />
                            <div className="Landing__pressrelease__card__inner">
                                <div className="Landing__pressrelease__card__date"><span>2 feb 20</span> | <span>construction</span></div>
                                <div className="Landing__pressrelease__card__text">Do so written raising parlor sprirital Mr elderly</div>
                                <div className="Landing__pressrelease__card__readmore">Read more</div>
                            </div>
                        </div>
                        <div className="Landing__pressrelease__card">
                            <img src={Pr2} className="Landing__pressrelease__card__img" alt="press release pic" />
                            <div className="Landing__pressrelease__card__inner">
                                <div className="Landing__pressrelease__card__date"><span>2 feb 20</span> | <span>construction</span></div>
                                <div className="Landing__pressrelease__card__text">Do so written raising parlor sprirital Mr elderly</div>
                                <div className="Landing__pressrelease__card__readmore">Read more</div>
                            </div>
                        </div>
                        <div className="Landing__pressrelease__card">
                            <img src={Pr3} className="Landing__pressrelease__card__img" alt="press release pic" />
                            <div className="Landing__pressrelease__card__inner">
                                <div className="Landing__pressrelease__card__date"><span>2 feb 20</span> | <span>construction</span></div>
                                <div className="Landing__pressrelease__card__text">Do so written raising parlor sprirital Mr elderly</div>
                                <div className="Landing__pressrelease__card__readmore">Read more</div>
                            </div>
                        </div>
                        <div className="Landing__pressrelease__card">
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
