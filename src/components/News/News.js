import React, { Component } from 'react'

import "./News.css"

import { Calendar } from '../../images/landing'
import { getNews } from '../../Service/getNews'
export default class News extends Component {
    state = {
        loader: false,
        result: []
    }
    async componentDidMount() {
        try {

            this.setState({ loader: true })
            if (typeof window !== 'undefined') {

                let result = await getNews(localStorage.getItem('newsId'));
                this.setState({ result: result.data, loader: false })
            }

        } catch (error) {
            console.log(error)
        }
    }

    render() {

        return (
            <div >
                <div className="Report__search__block">
                    <div className="Report__search__container">

                        <div className="Report__search__area">
                            <input type="text" placeholder="search here" className="Report__search__input" />
                            <button className="Report__search__btn">Search</button>
                        </div>
                    </div>
                </div>


                <div className="About__wrapper">
                    <div className="About__container">

                        <div className="About__block">
                            <div className="About__left">
                                <div className="News__title">{this.state && this.state.result[0] && this.state.result[0].title}</div>
                                <div style={{ marginTop: "20px" }}>
                                    <span ><img src={Calendar} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Published On: Jul 2020</span></span>

                                </div>
                                <p className="About__para">
                                    {this.state && this.state.result[0] && this.state.result[0].description}
                                </p>
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

            </div>
        )
    }
}
