import React, { Component } from 'react'
// import isEmpty from 'lodash/isEmpty';
import './landing.css'

// import { Landing as LandingPic, Whyus, Report_, Payment, QualityAssurence, MailWhite, Diamond, Attach, Automation, Medical, Chemical, Eletronics, Eletrical, People, Food, Share } from "../../images/landing"
import {
    Automation_,
    Chemical_,
    Consumer_,
    Energy_,
    Medical_,
    Technology_
} from "../../images/landing"
import { navigate } from "@reach/router"
import { Link } from 'gatsby'
import { FirstSection } from './FirstSection'
import { SearchSection } from './SearchSection'
import { Extensive_research } from '../Extensive_research'
import { Publication } from './Publication'
import { Client } from './Client'
import { getLatestReport } from '../../Service/getLatestReport'
import { getLatestNews } from '../../Service/getLatestNews'
// import { getSearchData } from '../../Service/getSearchData'
// import { ClientSay } from './ClientSay'
// import { LatestNews } from './LatestNews'
// import { ContactUs } from './ContactUs'

import { withPrefix, push, replace, navigateTo } from "gatsby-link"
import PressRelease from './PressRelease/PressRelease'
export default class Landing extends Component {
    state = {
        latestReport: [],
        latestNews: [],
        isLoader: false,
        searchTerm: '',
        searchLoader: false
    }
    componentDidMount = async () => {
        try {
            this.setState({ isLoader: true })
            const result = await getLatestReport();
            const resultNews = await getLatestNews();
            this.setState({ latestReport: result.data, latestNews: resultNews.data, isLoader: false })
        } catch (e) {
            this.setState({ isLoader: false })
            console.log(e)
        }
    }

    clickCategory = (index) => {
        navigate("/category_report", {
            state: {
                indeValue: index
            }
        })
    }


    handleSearch = (e) => {
        this.setState({ searchTerm: e.target.value })
    }
    handleSubmit = async () => {
        try {
            if (this.state.searchTerm != "") {
                navigate('/report_display', {
                    state: { value: this.state.searchTerm },
                }
                )
            }

        } catch (error) {
            console.log(error)
        }
    }
    render() {

        return (
            <div className="Landing__contaner" >
                <SearchSection handleSearch={this.handleSearch} handleSubmit={this.handleSubmit} />
                <FirstSection />
                {/* Add Category */}

                <div className="Landing__category__wrapper" id="category_ext_link">
                    <div className="Landing__category__contaner">
                        <div className="Landing__whyus__leadtitle">Report Categories</div>


                        <div className="Landing__category__card__wrapper">


                            <div className="Landing__cate__card" onClick={() => this.clickCategory(2)} >
                                <div className="Landing__cate__top__wrapper">
                                    <div className="Landing__cate__img__outer">
                                        <img src={Automation_} className="Landing__category__card__img" alt="icon" />
                                    </div>
                                    <div className="Landing__cate__title">Automotive</div>
                                </div>
                                <div className="Landing__cate__text">
                                    The Automotive industry is known to be a wide range of companies and organization involved in several working elements such as design, manufacturing, developmen..
                                </div>
                                <div className="Landing__cate__btn__wrapper">
                                    <button className="Landing__cate__btn" onClick={() => this.clickCategory(7)}>Know more</button>
                                </div>

                            </div>
                            <div className="Landing__cate__card" onClick={() => this.clickCategory(3)}>
                                <div className="Landing__cate__top__wrapper">
                                    <div className="Landing__cate__img__outer">
                                        <img src={Chemical_} className="Landing__category__card__img" alt="icon" />
                                    </div>
                                    <div className="Landing__cate__title">Chemicals and Materials</div>
                                </div>
                                <div className="Landing__cate__text">
                                    Over many years, the chemical industry has played a vital role in the several units of manufacturing and business. The industry is responsible for producing che..
                                </div>
                                <div className="Landing__cate__btn__wrapper">
                                    <button className="Landing__cate__btn" onClick={() => this.clickCategory(3)}>Know more</button>
                                </div>

                            </div>
                            <div className="Landing__cate__card" onClick={() => this.clickCategory(6)}>
                                <div className="Landing__cate__top__wrapper">
                                    <div className="Landing__cate__img__outer">
                                        <img src={Consumer_} className="Landing__category__card__img" alt="icon" />
                                    </div>
                                    <div className="Landing__cate__title">Consumer Goods</div>
                                </div>
                                <div className="Landing__cate__text">
                                    Consumer goods are products which are purchased for consumption purpose by the average consumer. It is also called as final goods, or end product. Consumer..
                                </div>
                                <div className="Landing__cate__btn__wrapper">
                                    <button className="Landing__cate__btn" onClick={() => this.clickCategory(6)}>Know more</button>
                                </div>

                            </div>
                            <div className="Landing__cate__card" onClick={() => this.clickCategory(5)}>
                                <div className="Landing__cate__top__wrapper">
                                    <div className="Landing__cate__img__outer">
                                        <img src={Energy_} className="Landing__category__card__img" alt="icon" />
                                    </div>
                                    <div className="Landing__cate__title">Energy</div>
                                </div>
                                <div className="Landing__cate__text">
                                    The energy sectors are one of the fastest growing segments in the industry. They can be categories into two distinct segments namely, power, and oil & gases..
                                </div>
                                <div className="Landing__cate__btn__wrapper">
                                    <button className="Landing__cate__btn" onClick={() => this.clickCategory(5)}>Know more</button>
                                </div>

                            </div>
                            <div className="Landing__cate__card" onClick={() => this.clickCategory(4)}>
                                <div className="Landing__cate__top__wrapper">
                                    <div className="Landing__cate__img__outer">
                                        <img src={Medical_} className="Landing__category__card__img" alt="icon" />
                                    </div>
                                    <div className="Landing__cate__title">Medical Devices</div>
                                </div>
                                <div className="Landing__cate__text">
                                    A medical devices are known as any instrument, apparatus, appliance, software, material, or other material whether used alone or in combination, wit..
                                </div>
                                <div className="Landing__cate__btn__wrapper">
                                    <button className="Landing__cate__btn" onClick={() => this.clickCategory(4)}>Know more</button>
                                </div>

                            </div>
                            <div className="Landing__cate__card" onClick={() => this.clickCategory(7)}>
                                <div className="Landing__cate__top__wrapper">
                                    <div className="Landing__cate__img__outer">
                                        <img src={Technology_} className="Landing__category__card__img" alt="icon" />
                                    </div>
                                    <div className="Landing__cate__title">Technology and Media</div>
                                </div>
                                <div className="Landing__cate__text">
                                    Technology is representation of huge collection of techniques, methods, skill sets, and process that can be used in the production of goods or services and in t..
                                </div>
                                <div className="Landing__cate__btn__wrapper">
                                    <button className="Landing__cate__btn" onClick={() => this.clickCategory(7)}>Know more</button>
                                </div>

                            </div>

                        </div>
                        <div className="Landing__category__btn__wrapper">
                            <Link to="/categories">
                                <button className="Landing__category__btn">Browse all Category</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div id="ourservice_ext_link">

                    <Extensive_research />
                </div>
                <div id="publisher__ext__link">
                    {this.state.isLoader ?
                        <div style={{ width: "100%", textAlign: "center" }}>
                            <div className="publisher__loader"></div>
                        </div>
                        :
                        <Publication latestReportData={this.state.latestReport} latestNewsData={this.state.latestNews} />
                    }
                </div>
                <div id="press__ext__link">

                    <PressRelease />
                </div>
                <Client />

            </div>
        )
    }
}
