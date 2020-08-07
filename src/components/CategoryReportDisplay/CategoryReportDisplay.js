import React, { Component } from 'react'
import './CategoryReportDisplay.css'

import { Link } from 'gatsby'

import {
    Calendar,
    Page,
    User,
    Report
} from '../../images/landing'
import Category from '../Categories/Category.json'

import { getCategoryData } from '../../Service/getCategoryData'
import { navigate } from "@reach/router"

export default class CategoryReportDisplay extends Component {
    state = {
        result: [],
        loader: false
    }

    componentDidMount = async () => {

        console.log("hiiiiii", this.props && this.props.props && this.props.props.location && this.props.props.location.state && this.props.props.location.state.indeValue)
        try {
            this.setState({ loader: true })
            console.log("hello inner state complete")
            let result = await getCategoryData(this.props && this.props.props && this.props.props.location && this.props.props.location.state && this.props.props.location.state.indeValue);
            console.log("result------>", result)

            this.setState({ result: result.data, loader: false })
        } catch (error) {
            this.setState({ loader: false })
            console.log("error", error)
        }
    }

    handleReportClick = (data) => {
        try {


            if (typeof window !== 'undefined') {

                localStorage.setItem('reportId', data, () => {
                    navigate('/report')
                })
            }



        } catch (error) {
            console.log(error)
        }
    }
    render() {
        return (
            <div className="ReportDisplay__wrapper">
                <div className="ReportDisplay__container">
                    <div className="ReportDisplay__block">
                        <div className="ReportDisplay__left">
                            <div className="Publication__card__wrapper">
                                {this.state.loader ? <div>result is loading please wait</div> :
                                    <div>
                                        {
                                            this.state.result.map((obj, key) => (
                                                <div className="Publication__card" key={key} onClick={() => {
                                                    this.handleReportClick(obj.id)
                                                }}>
                                                    <div >
                                                        <Link to="/report" className="Publication__card__title">
                                                            {obj.title}
                                                        </Link>
                                                    </div>
                                                    <div className="Publication__card__middle">
                                                        <span ><img src={Calendar} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Published On: Jul 2020</span></span>
                                                        <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Format: PDF</span></span>
                                                        <span ><img src={User} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">QY Research</span></span>
                                                        <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Pages: 153</span></span>
                                                        <span ><img src={Report} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Report ID: 10378</span></span>

                                                    </div>
                                                    <div className="Publication__card__text">
                                                        {obj.reportDescription}
                                                    </div>

                                                    <div className="Publication__card__readmore">
                                                        READ MORE
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                }
                                {/* 
                            <div className="Publication__card">
                                <div >
                                    <Link to="/report" className="Publication__card__title">
                                        Global Organic Carbon Analyzers Market Insights and Forecast to 2026
                                    </Link>
                                </div>
                                <div className="Publication__card__middle">
                                    <span ><img src={Calendar} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Published On: Jul 2020</span></span>
                                    <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Format: PDF</span></span>
                                    <span ><img src={User} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">QY Research</span></span>
                                    <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Pages: 153</span></span>
                                    <span ><img src={Report} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Report ID: 10378</span></span>

                                </div>
                                <div className="Publication__card__text">
                                    Organic Carbon Analyzers market is segmented by Type, and by Application. Players, stakeholders, and other participants in the global Organic Carbon Analyzers market will be able to gain the upper hand as they use the report as a powerful resource. The segmental analysis focuses on production capacity, revenue and forecast by Type and by Application for the period 2015-2026.Segment by Type, the Organic Carbon Analyzers market is segmented into Benchtop PortableSegment by Application,
                                </div>

                                <div className="Publication__card__readmore">
                                    READ MORE
                                 </div>
                            </div>
                            <div className="Publication__card">
                                <div className="Publication__card__title">
                                    <Link to="/report" className="Publication__card__title">
                                        Global Tube Mill Market Insights and Forecast to 2026
                        </Link>
                                </div>
                                <div className="Publication__card__middle">
                                    <span ><img src={Calendar} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Published On: Jul 2020</span></span>
                                    <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Format: PDF</span></span>
                                    <span ><img src={User} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">QY Research</span></span>
                                    <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Pages: 153</span></span>
                                    <span ><img src={Report} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Report ID: 10378</span></span>

                                </div>
                                <div className="Publication__card__text">
                                    Organic Carbon Analyzers market is segmented by Type, and by Application. Players, stakeholders, and other participants in the global Organic Carbon Analyzers market will be able to gain the upper hand as they use the report as a powerful resource. The segmental analysis focuses on production capacity, revenue and forecast by Type and by Application for the period 2015-2026.Segment by Type, the Organic Carbon Analyzers market is segmented into Benchtop PortableSegment by Application,
                </div>

                                <div className="Publication__card__readmore">
                                    READ MORE
                </div>
                            </div>
                            <div className="Publication__card">
                                <div className="Publication__card__title">
                                    Global Tube Mill Market Insights and Forecast to 2026
                </div>
                                <div className="Publication__card__middle">
                                    <span ><img src={Calendar} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Published On: Jul 2020</span></span>
                                    <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Format: PDF</span></span>
                                    <span ><img src={User} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">QY Research</span></span>
                                    <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Pages: 153</span></span>
                                    <span ><img src={Report} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Report ID: 10378</span></span>

                                </div>
                                <div className="Publication__card__text">
                                    Organic Carbon Analyzers market is segmented by Type, and by Application. Players, stakeholders, and other participants in the global Organic Carbon Analyzers market will be able to gain the upper hand as they use the report as a powerful resource. The segmental analysis focuses on production capacity, revenue and forecast by Type and by Application for the period 2015-2026.Segment by Type, the Organic Carbon Analyzers market is segmented into Benchtop PortableSegment by Application,
                </div>

                                <div className="Publication__card__readmore">
                                    READ MORE
                </div>
                            </div>
                            <div className="Publication__card">
                                <div className="Publication__card__title">
                                    Global Aluminium Titanic Boron Alloy Market Insights and Forecast to 2026
                </div>
                                <div className="Publication__card__middle">
                                    <span ><img src={Calendar} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Published On: Jul 2020</span></span>
                                    <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Format: PDF</span></span>
                                    <span ><img src={User} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">QY Research</span></span>
                                    <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Pages: 153</span></span>
                                    <span ><img src={Report} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Report ID: 10378</span></span>

                                </div>
                                <div className="Publication__card__text">
                                    Organic Carbon Analyzers market is segmented by Type, and by Application. Players, stakeholders, and other participants in the global Organic Carbon Analyzers market will be able to gain the upper hand as they use the report as a powerful resource. The segmental analysis focuses on production capacity, revenue and forecast by Type and by Application for the period 2015-2026.Segment by Type, the Organic Carbon Analyzers market is segmented into Benchtop PortableSegment by Application,
                </div>

                                <div className="Publication__card__readmore">
                                    READ MORE
                </div>
                            </div> */}



                            </div>
                        </div>
                        <div className="ReportDisplay__right">
                            <div className="ReportDisplay__right__radio__wrapper">
                                <div className="ReportDisplay__right__browse">Browse Reports</div>
                                <div className="ReportDisplay__right__radio__outer">
                                    {Category.map((obj, key) => (

                                        <div className="ReportDisplay__right__radio__inner" key={key}>
                                            <div className="ReportDisplay__right__radio__name">{obj.name}</div>
                                            <input type="radio" name="category" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}
