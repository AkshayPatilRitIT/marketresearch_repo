import React, { Component } from 'react'
import './Client.css'
import {
    Client1, Client2, LG,
    Philips,
    Microsoft,
    Client3,
    Relience,
} from '../../../images/landing'

export default class Client extends Component {
    render() {
        return (
            <div className="Landing__client__wrapper">
                <div className="Landing__client__container">
                    <div className="Landing__client__title">OUR CLIENT</div>
                    <div className="Landing__client__block">
                        <marquee scrollamount="4" direction="left">
                            <img src={LG} className="Landing__client__slidding__img" alt="client logo" />
                            <img src={Philips} className="Landing__client__slidding__img" alt="client logo" />
                            <img src={Microsoft} className="Landing__client__slidding__img" alt="client logo" />
                            <img src={Client3} className="Landing__client__slidding__img" alt="client logo" />
                            <img src={Relience} className="Landing__client__slidding__img" alt="client logo" />
                            <img src={Client2} className="Landing__client__slidding__img" alt="client logo" />
                            <img src={Client1} className="Landing__client__slidding__img" alt="client logo" />
                        </marquee>
                    </div>
                </div>
            </div>
        )
    }
}
