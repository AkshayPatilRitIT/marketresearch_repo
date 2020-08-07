import React, { Component } from 'react'
import './Publication.css'
import LatestReport from './LatestReport'
import LatestNews from './LatestNews'


export default class Publication extends Component {
    state = {
        index: 0
    }
    render() {
        const { index } = this.state;
        const { latestReportData, latestNewsData } = this.props;
        return (
            <div style={{ marginTop: "30px" }}>
                <div className="Publication__wrapper">
                    <div className="Publication__container">
                        <button className={index == 0 ? "Publication__left Publication__link__active" : "Publication__left"} onClick={() => {
                            this.setState({ index: 0 })
                        }}>Latest Report</button>
                        <button className={index == 1 ? "Publication__right Publication__link__active" : "Publication__right"} onClick={() => {
                            this.setState({ index: 1 })
                        }}>Latest News</button>
                    </div>
                    <div className="Publication__display__card">
                        {index === 0 ? <LatestReport latestReportData={latestReportData} /> : ""}
                        {index === 1 ? <LatestNews latestNewsData={latestNewsData} /> : ""}
                    </div>
                </div>
            </div>
        )
    }
}
