import React, { Component } from 'react'
import "./Publication.css"

import {
    Calendar,
    Page,
    User,
    Report
} from '../../../images/landing'
import { navigate } from "@reach/router"
export default class LatestNews extends Component {
    handleNewsClick = async (data) => {
        try {
            if (typeof window !== 'undefined') {
                await localStorage.setItem('newsId', data)
                navigate('/news')

            }
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        const { latestNewsData } = this.props

        return (
            <div className="Publication__card__wrapper">
                {latestNewsData.map((obj, key) => (
                    <div className="Publication__card"
                        onClick={() => { this.handleNewsClick(obj.newsId) }}
                        key={key}>
                        <div className="Publication__card__title">
                            {obj.title}
                        </div>
                        <div className="Publication__card__middle">
                            <span ><img src={Calendar} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Published On: Jul 2020</span></span>
                            {/* <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Format: PDF</span></span>
                        <span ><img src={User} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">QY Research</span></span>
                        <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Pages: 153</span></span>
                        <span ><img src={Report} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Report ID: 10378</span></span> */}

                        </div>
                        <div className="Publication__card__text">
                            {obj.description}
                        </div>

                        <div className="Publication__card__readmore">
                            READ MORE
                         </div>
                    </div>
                ))}

            </div>
        )
    }
}
