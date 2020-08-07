import React, { Component } from 'react'
import { navigate } from "@reach/router"

import "./SearchSection.css"

import { getSearchData } from '../../../Service/getSearchData'

export default class SearchSection extends Component {

    render() {
        const { handleSubmit, handleSearch } = this.props;

        return (
            <div className="SearchSection__wrapper__outer">
                <div className="SearchSection__wrapper">
                    <div className="SearchSection__container">
                        <div className="SearchSection__block">
                            <div className="SearchSection__title">Search Market Report Expert</div>
                            <div className="SearchSection__search__wrapper">
                                <input className="SearchSection__search__input"
                                    onChange={handleSearch}
                                    placeholder="Search report..." />
                                <button className="SearchSection__search__btn"
                                    onClick={handleSubmit}
                                >Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
