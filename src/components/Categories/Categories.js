import React, { Component } from 'react'
import CategoryData from "./Category.json"

import "./Categories.css"
import { DownArrow } from '../../images/landing'
import { navigate } from "@reach/router"
import { getCategory } from '../../Service/getCategory'
export default class Categories extends Component {

    state = {
        opened: [],
        categoryArray: []
    }
    async componentDidMount() {
        let opened = []
        let openedStatus = {}

        CategoryData.map((obj, key) => {
            opened.push((openedStatus[`opened${key}`] = false))
        })

        let result = await getCategory();

        this.setState({
            opened,
            categoryArray: result.data
        })
    }

    onOpenEvent = (key) => {
        this.setState(prevState => ({
            opened: prevState.opened.map((el, i) => (key === i ? !el : false)),
        }))
    }

    cardClick = (id) => {
        navigate("/category_report", {
            state: {
                indeValue: id
            }
        })
    }
    render() {
        return (
            <div>
                <div className="Categories__block">
                    <div className="Categories__block__title">
                        Categories
                    </div>
                </div>
                <div className="Categories__wrapper">
                    <div className="Categories__container">
                        <div className="Categories__header">
                            <div className="Categories__header__title">You can check here all Categories and their subcategories</div>
                        </div>
                        <div className="Categories__Card__wrapper">
                            {this.state && this.state.categoryArray.map((obj, key) => (
                                <div>

                                    <div key={key} className="Categories__Card" onClick={() => {
                                        this.cardClick(obj.catid)
                                    }}>
                                        <div className="Categories__Card__title__value">
                                            <div>{obj.name}</div>
                                            {/* <div>12000</div> */}
                                        </div>
                                        {/* <div className="Categories__Card__arrow__block" onClick={() => this.onOpenEvent(key)}>
                                            <img src={DownArrow} className="Categories__Card__arrow" alt="downarrow" />
                                        </div> */}

                                    </div>
                                    {/* {this.state.opened[key] ?
                                        <div className="Categories__Card__dropdown">
                                            {CategoryData[key].subcategory.map((obj1) => (
                                                <div className="Categories__Card__dropdown__content">
                                                    <div>{obj1.title}</div>
                                                    <div>
                                                        {obj1.value}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        : ""} */}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
