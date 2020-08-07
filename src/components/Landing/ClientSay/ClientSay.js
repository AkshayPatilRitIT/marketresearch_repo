import React, { Component } from 'react'

import './ClientSay.css'
import { Stev } from '../../../images/landing'
export default class ClientSay extends Component {
    render() {
        return (
            <div className="Landing__ClientSay__wrapper">
                <div className="Landing__ClientSay__container">
                    <div className="Landing__ClientSay__block">
                        <div className="Landing__ClientSay__img__wraper">
                            <img src={Stev} className="Landing__ClientSay__img" alt="client photo" />
                        </div>
                        <div className="Landing__ClientSay__decscription">
                            <div className="Landing__ClientSay__decscription__title">
                                What our client say?
                            </div>
                            <div className="Landing__ClientSay__decscription__subtitle">
                                Aliqua esse adipisicing anim nulla mollit ipsum excepteur.Eu ea aute reprehenderit officia laborum. Enim proident commodo sunt aliquip ex non consequat qui nulla. Cillum sint eiusmod qui reprehenderit ad laborum dolor sunt id. Veniam nulla aliqua adipisicing fugiat id ut ipsum aute veniam duis nulla irure deserunt. Ut anim deserunt nisi excepteur est veniam aute cupidatat cillum sunt laboris mollit occaecat. Nostrud laborum do magna et labore magna deserunt consequat ipsum esse excepteur cillum deserunt culpa. Dolore consectetur nulla duis est quis ipsum ea laboris esse id culpa non excepteur.

                            </div>
                            <div style={{ marginTop: "20px" }}><span className="Landing__ClientSay__decscription__name">Bill gates</span><span className="Landing__ClientSay__decscription__company">CEO Microsoft</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
