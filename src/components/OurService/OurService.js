import React, { Component } from 'react'

import "./OurService.css"
import { CrossIndustry, Delevery, Intelligence, Nascent, ResearchCoverage } from '../../images/our_services'

export default class OurService extends Component {
    render() {
        return (
            <div className="OurService__wrapper">
                <div className="OurService__container">
                    <div className="OurService__title">Our Service</div>
                    <div className="OurService__card__wrapper">
                        <div className="OurService__card">
                            <div className="OurService__card__img__wrapper">
                                <img src={ResearchCoverage} className="OurService__card__img" alt="card image" />
                            </div>
                            <div className="OurService__card__text__area">
                                <div className="OurService__card__title">
                                    EXTENSIVE RESEARCH COVERAGE
                                </div>
                                <div className="OurService__card__text">
                                    We have been in the research industry for more than a decade which has enabled us to cover all the domains of industry and market research ranging from Healthcare to Chemical industry. Through this course, we have been able to produce a plethora of reports which accounts to more than 15000 reports across 7 major industry categories.
                                </div>
                            </div>
                        </div>
                        <div className="OurService__card">
                            <div className="OurService__card__img__wrapper">
                                <img src={CrossIndustry} className="OurService__card__img" alt="card image" />
                            </div>
                            <div className="OurService__card__text__area">
                                <div className="OurService__card__title">
                                    CROSS-INDUSTRY EXPERTISE
                                </div>
                                <div className="OurService__card__text">
                                    We have not only gathered knowledge about standard standalone industry domains but also gain insights about cross-functional industry segments such as Healthcare and Information Technology. We understand the cross segmental needs for the clients, thus offer crisscross industry solutions with the help of our techno-functional and techno-commercial analyst team.
                                </div>
                            </div>
                        </div>
                        <div className="OurService__card">
                            <div className="OurService__card__img__wrapper">
                                <img src={Nascent} className="OurService__card__img" alt="card image" />
                            </div>
                            <div className="OurService__card__text__area">
                                <div className="OurService__card__title">
                                    NASCENT MARKET RESEARCH
                                </div>
                                <div className="OurService__card__text">
                                    While other market intelligence companies focus on large established markets of products and services, we seek new business opportunities for our clients in the niche areas of the industry. We offer inventors prospects for new business avenue in the promising and lucrative budding niche markets. Our expert team studies the products and services market which are in the nascent stage of their life cycle and provide penetrative market insights regarding the same.
                                </div>
                            </div>
                        </div>
                        <div className="OurService__card">
                            <div className="OurService__card__img__wrapper">
                                <img src={Delevery} className="OurService__card__img" alt="card image" />
                            </div>
                            <div className="OurService__card__text__area">
                                <div className="OurService__card__title">
                                    FLASH DELIVERY
                                </div>
                                <div className="OurService__card__text">
                                    Having a repository of over 15000 reports, we have access to many and any parent market analysis. A library of reports comes in handy when an urgent client requirement is to be catered in the short deadline. We have an exhaustive database of parent market numbers and insights which enable us to customize and collate information with a not beatable tour around time.
                                </div>
                            </div>
                        </div>
                        <div className="OurService__card">
                            <div className="OurService__card__img__wrapper">
                                <img src={ResearchCoverage} className="OurService__card__img" alt="card image" />
                            </div>
                            <div className="OurService__card__text__area">
                                <div className="OurService__card__title">
                                    COMPETITIVE INTELLIGENCE
                                </div>
                                <div className="OurService__card__text">
                                    Competitive intelligence is an essential part of our market assessments. Our competitive intelligence involves fetching vital information such as company product portfolio, financials, operations, research and development, and geographic presence, etc. through our in-house assessment tools, we run a comparative analysis of these parameters for all industry participants which enables us to provide each company’s SWOT as compared to another.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
