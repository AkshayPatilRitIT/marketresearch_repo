import React, { Component } from 'react'

import { Link } from 'gatsby'
import './Publication.css'
import { navigate } from "@reach/router"
import {
    Calendar,
    Page,
    User,
    Report
} from '../../../images/landing'

export default class LatestReport extends Component {
    handleReportClick = (data) => {


        if (typeof window !== 'undefined') {

            localStorage.setItem('reportId', data, () => {
                navigate('/report')
            })
        }




    }

    render() {
        const { latestReportData } = this.props;

        return (
            <div>
                <div className="Publication__card__wrapper">

                    {latestReportData.map((obj, key) => (
                        <div className="Publication__card" key={key} onClick={() => { this.handleReportClick(obj.id) }}>

                            <div >
                                <Link to="/report" className="Publication__card__title">
                                    {obj.title}
                                </Link>
                            </div>
                            <div className="Publication__card__middle">
                                <span ><img src={Calendar} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Published On: Jul 2020</span></span>
                                <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Format: PDF</span></span>
                                <span ><img src={User} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">{obj.publisherName}</span></span>
                                <span ><img src={Page} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Pages: {obj.page}</span></span>
                                <span ><img src={Report} className="Publication__card__img" alt="icon" /><span className="Publication__card__middle__title">Report ID: {obj.categoryID}</span></span>

                            </div>
                            <div className="Publication__card__text">
                                {obj.reportDescription}
                            </div>

                            <div className="Publication__card__readmore">
                                READ MORE
                    </div>
                        </div>
                    ))}
                    {/* <div className="Publication__card">
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
        )
    }
}
