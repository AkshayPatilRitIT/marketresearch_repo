import React, { Component } from 'react'
import "./Faq.css"


import { DownArrow } from '../../images/landing'
import Qns from "./Questions.json"
export default class Faq extends Component {
    state = {
        opened: [],
    }


    componentDidMount() {
        let opened = []

        let openedStatus = {}

        Qns.payload.map((obj, key) => {
            opened.push((openedStatus[`opened${key}`] = false))
        })


        this.setState({ opened })
    }

    onOpenAns = key => {
        this.setState(prevState => ({
            opened: prevState.opened.map((el, i) => (key === i ? !el : false)),
        }))
    }
    render() {
        return (
            <div>
                <div className="Categories__block">
                    <div className="Categories__block__title">
                        Frequently Asked Questions
                    </div>
                </div>

                <div className="Faq__wrapper">
                    <div className="Faq__container">
                        {/* <div className="Faq__title">Frequently Asked Questions</div> */}
                        <div className="Faq__qns__block">
                            {Qns.payload.map((obj, key) => (
                                <div>
                                    <div className="Faq__qns__line" key={key} onClick={() => this.onOpenAns(key)}>
                                        <div className="Faq__qns">{obj.qns}</div>
                                        <div className="Faq__qns__arrow"><img src={DownArrow} className="Faq__arrow" alt="down arrow" /></div>
                                    </div>

                                    {this.state.opened[key] ? (
                                        <div className="Faq__ans__block">
                                            <div className="Faq__ans">
                                                {obj.ans}
                                            </div>
                                        </div>
                                    ) : (
                                            ""
                                        )}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
