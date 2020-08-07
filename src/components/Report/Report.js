import React, { Component } from 'react'
import './Report.css'
import Inquery from './Component/Inquery'
import ReportDetails from './Component/ReportDetails'
import RequestSample from './Component/RequestSample'
import TableContent from './Component/TableContent'
import { navigate } from "@reach/router"

// import { Link } from 'gatsby'

import { getReport } from '../../Service/getReport'
export default class Report extends Component {
    state = {
        result: [],
        index: 0,
        loader: false,
        searchTerm: '',
        currentValue: ''
    }
    componentDidMount = async () => {
        try {
            this.setState({ loader: true })

            if (typeof window !== 'undefined') {
                let result = await getReport(localStorage.getItem('reportId'))

                this.setState({ result: result.data, loader: false }, () => {

                    try {
                        if (typeof window !== 'undefined') {

                            localStorage.setItem('reportTitle', this.state && this.state.result[0] && this.state.result[0].title)
                        }
                    } catch (error) {
                        console.log(error)
                    }
                })
            }
        } catch (error) {
            this.setState({ loader: false })
            console.log(error)
        }
    }

    handleSearch = (e) => {
        this.setState({ searchTerm: e.target.value })
    }

    handleSubmit = () => {
        console.log(this.state.searchTerm)
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

    OnClickBuy = async () => {
        if (this.state.currentValue != "") {
            if (typeof window !== 'undefined') {

                await localStorage.setItem('reportValue', this.state.currentValue)
            }
            navigate("/cart")
        } else {
            alert("please select value")
        }
    }
    onChangeRadio = (e) => {
        this.setState({ currentValue: e.currentTarget.value })
    }
    render() {
        const { index, result } = this.state;
        // console.log(result[0].title)
        return (
            <div>
                <div className="Report__search__block">
                    <div className="Report__search__container">
                        <div className="Report__title">One Stop Shop for All Your Market Research Reports</div>
                        <div className="Report__search__area">
                            <input type="text" placeholder="search here"
                                onChange={this.handleSearch}
                                className="Report__search__input" />
                            <button className="Report__search__btn" onClick={this.handleSubmit}>Search</button>
                        </div>
                    </div>
                </div>
                <div className="Report__wrapper">
                    <div className="Report__container">
                        {this.state.loader ? <div>please wait data is loading</div> :
                            <div>
                                <div className="Report__main__title">{this.state && this.state.result[0] && this.state.result[0].title}</div>

                                <div className="Report__block">
                                    <div className="Report__left">
                                        <div className="Report__tabs">
                                            <div className={index === 0 ? "Report__tabs__block__active" : "Report__tabs__block"} onClick={() => {
                                                this.setState({ index: 0 })
                                            }
                                            }>Report Details</div>
                                            <div className={index === 1 ? "Report__tabs__block__active" : "Report__tabs__block"} onClick={() => {
                                                this.setState({ index: 1 })
                                            }
                                            }>Table of Content</div>
                                            <div className={index === 2 ? "Report__tabs__block__active Report__tabs__block__org" : "Report__tabs__block Report__tabs__block__org"} onClick={() => {
                                                this.setState({ index: 2 })
                                            }
                                            }>Inquiry Before Buying</div>
                                            <div className={index === 3 ? "Report__tabs__block__active" : "Report__tabs__block"} onClick={() => {
                                                this.setState({ index: 3 })
                                            }
                                            }>Request Sample</div>
                                        </div>
                                        <div className="Report__tabs__output">
                                            {index === 0 ? <ReportDetails details={this.state && this.state.result[0] && this.state.result[0].reportDescription} /> : index === 1 ? <TableContent tableContentData={this.state && this.state.result[0] && this.state.result[0].tableOfContents} /> : index === 2 ? <Inquery /> : index === 3 ? <RequestSample /> : <ReportDetails />}
                                        </div>
                                    </div>
                                    <div className="Report__right">
                                        <div className="Report__right__table">
                                            <div className="Report__payment__title">Payment Mode</div>
                                            <table>
                                                {/* <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Points</th>
                                        </tr> */}
                                                {console.log(this.state.result[0])}
                                                <tr>
                                                    <td><input type="radio" onChange={this.onChangeRadio} name="price" value={this.state && this.state.result[0] && this.state.result[0].singleUserPrice} /></td>
                                                    <td>Single User</td>
                                                    <td>${this.state && this.state.result[0] && this.state.result[0].singleUserPrice}</td>
                                                </tr>
                                                <tr>
                                                    <td><input type="radio" onChange={this.onChangeRadio} name="price" value={this.state && this.state.result[0] && this.state.result[0].multiUserLicensesPrice} /></td>
                                                    <td>Multi User </td>
                                                    <td>${this.state && this.state.result[0] && this.state.result[0].multiUserLicensesPrice}</td>
                                                </tr>
                                                <tr>
                                                    <td><input type="radio" onChange={this.onChangeRadio} name="price" value={this.state && this.state.result[0] && this.state.result[0].enterprisePrice} /></td>
                                                    <td>Corporate User</td>
                                                    <td>${this.state && this.state.result[0] && this.state.result[0].enterprisePrice}</td>
                                                </tr>

                                            </table>
                                            <div className="Report__right__btn__wrapper">
                                                <button className="Report__right__btn" onClick={this.OnClickBuy} >Buy now</button>

                                            </div>
                                        </div>

                                        <div className="Report__right__table">
                                            <div className="Report__payment__title">About this Report</div>
                                            <table>
                                                {/* <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Points</th>
                                        </tr> */}
                                                <tr>

                                                    <td>Report ID</td>
                                                    <td>{this.state && this.state.result[0] && this.state.result[0].categoryID}</td>
                                                </tr>
                                                <tr>

                                                    <td>Category </td>
                                                    <td>Electronics</td>
                                                </tr>
                                                <tr>

                                                    <td>Published on</td>
                                                    <td>22-Jun</td>
                                                </tr>
                                                <tr>

                                                    <td>Number of Pages</td>
                                                    <td>{this.state && this.state.result[0] && this.state.result[0].page}</td>
                                                </tr>
                                                <tr>

                                                    <td>Publisher Name</td>
                                                    <td>{this.state && this.state.result[0] && this.state.result[0].publisherName}</td>
                                                </tr>

                                            </table>

                                        </div>



                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
