import React, { Component } from 'react'

export default class TableContent extends Component {
    render() {
        return (
            <div style={{ margin: "30px", lineHeight: "1.5em" }}>
                {/* 1 Study Coverage <br />
               &nbsp;&nbsp; 1.1 Media Player Pico Projectors Product Introduction<br />
               &nbsp;&nbsp; 1.2 Key Market Segments in This Study<br />
               &nbsp;&nbsp; 1.3 Key Manufacturers Covered: Ranking of Global Top Media Player Pico Projectors Manufacturers by Revenue in 2019<br />
               &nbsp;&nbsp;1.4 Market by Type <br />
               &nbsp;&nbsp;&nbsp;&nbsp; 1.4.1 Global Media Player Pico Projectors Market Size Growth Rate by Type <br />
               &nbsp;&nbsp;&nbsp;&nbsp; 1.4.2 Liquid Crystal on Silicon (LCOS) <br />
               &nbsp;&nbsp;1.5 Market by Application<br />
               &nbsp;&nbsp;&nbsp;&nbsp;1.5.1 Global Media Player Pico Projectors Market Size Growth Rate by Application<br />
               &nbsp;&nbsp;&nbsp;&nbsp; 1.5.2 Household<br />
               &nbsp;&nbsp;&nbsp;&nbsp; 1.5.3 Commercial<br />
        &nbsp;&nbsp; 1.6 Coronavirus Disease 2019 (Covid-19): Media Player Pico Projectors Industry Impact<br />
        &nbsp;&nbsp;&nbsp;&nbsp;1.6.1 How the Covid-19 is Affecting the Media Player Pico Projectors Industry<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   1.6.1.1 Media Player Pico Projectors Business Impact Assessment - Covid-19<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   1.6.1.2 Supply Chain Challenges<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  1.6.1.3 COVID-19?s Impact On Crude Oil and Refined Products<br />
        &nbsp;&nbsp;&nbsp;&nbsp; 1.6.2 Market Trends and Media Player Pico Projectors Potential Opportunities in the COVID-19 Landscape<br />
        &nbsp;&nbsp;&nbsp;&nbsp; 1.6.3 Measures / Proposal against Covid-19<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   1.6.3.1 Government Measures to Combat Covid-19 Impact<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   1.6.3.2 Proposal for Media Player Pico Projectors Players to Combat Covid-19 Impact<br />
            &nbsp;&nbsp;1.7 Study Objectives<br /> */}


                {this.props && this.props.tableContentData}
            </div>
        )
    }
}
