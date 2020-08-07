import React, { Component } from 'react'
import './Extensive_research.css'
export default class Extensive_research extends Component {
    state = {
        index: 1
    }
    render() {
        const { index } = this.state;
        return (
            <div className="Extensive_research__wrapper">
                <div className="Extensive_research__container">
                    <div className="Extensive_research__block">
                        <div className="Extensive_research__left">
                            <div className={index === 1 ? "Extensive_research__left__card Extensive_research__left__card1 active" : "Extensive_research__left__card Extensive_research__left__card1"} onClick={() => { this.setState({ index: 1 }) }}>EXTENSIVE RESEARCH COVERAGE</div>
                            <div className={index === 2 ? "Extensive_research__left__card Extensive_research__left__card2 active" : "Extensive_research__left__card Extensive_research__left__card2"} onClick={() => { this.setState({ index: 2 }) }}>CROSS-INDUSTRY EXPERTISE</div>
                            <div className={index === 3 ? "Extensive_research__left__card Extensive_research__left__card3 active" : "Extensive_research__left__card Extensive_research__left__card3"} onClick={() => { this.setState({ index: 3 }) }}>NASCENT MARKET RESEARCH</div>
                            <div className={index === 4 ? "Extensive_research__left__card Extensive_research__left__card4 active" : "Extensive_research__left__card Extensive_research__left__card4"} onClick={() => { this.setState({ index: 4 }) }}>FLASH DELIVERY</div>
                            <div className={index === 5 ? "Extensive_research__left__card Extensive_research__left__card5 active" : "Extensive_research__left__card Extensive_research__left__card5"} onClick={() => { this.setState({ index: 5 }) }}>COMPETITIVE INTELLIGENCE</div>
                        </div>
                        <div className="Extensive_research__right">
                            <div className="Extensive_research__right__text">
                                {index === 1 ? "EXTENSIVE RESEARCH COVERAGE" : index === 2 ? "CROSS-INDUSTRY EXPERTISE" : index === 3 ? "NASCENT MARKET RESEARCH" : index === 4 ? "FLASH DELIVERY" : "COMPETITIVE INTELLIGENCE"}
                            </div>
                            <div className="Extensive_research__right__underline"></div>
                            <div className="Extensive_research__right__inner__text">
                                {index === 1 ? "We have been in the research industry for more than a decade which has enabled us to cover all the domains of industry and market research ranging from Healthcare to Chemical industry. Through this course, we have been able to produce a plethora of reports which accounts to more than 15000 reports across 7 major industry categories." :
                                    index === 2 ? "We have not only gathered knowledge about standard standalone industry domains but also gain insights about cross-functional industry segments such as Healthcare and Information Technology. We understand the cross segmental needs for the clients, thus offer crisscross industry solutions with the help of our techno-functional and techno-commercial analyst team." :
                                        index === 3 ? "While other market intelligence companies focus on large established markets of products and services, we seek new business opportunities for our clients in the niche areas of the industry. We offer inventors prospects for new business avenue in the promising and lucrative budding niche markets. Our expert team studies the products and services market which are in the nascent stage of their life cycle and provide penetrative market insights regarding the same." :
                                            index === 4 ? "Having a repository of over 15000 reports, we have access to many and any parent market analysis. A library of reports comes in handy when an urgent client requirement is to be catered in the short deadline. We have an exhaustive database of parent market numbers and insights which enable us to customize and collate information with a not beatable tour around time." :
                                                "Competitive intelligence is an essential part of our market assessments. Our competitive intelligence involves fetching vital information such as company product portfolio, financials, operations, research and development, and geographic presence, etc. through our in-house assessment tools, we run a comparative analysis of these parameters for all industry participants which enables us to provide each company’s SWOT as compared to another."}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
