import React, { Component } from 'react'

export default class ReportDetails extends Component {

    render() {
        const { details } = this.props;

        return (
            <div style={{ margin: "30px" }}>
                <p>
                    {this.props && this.props.details}
                </p>

            </div >
        )
    }
}
