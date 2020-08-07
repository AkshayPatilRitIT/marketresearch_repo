import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Report } from '../components/Report'
import SEO from "../components/seo"

const ReportPage = (props) => (
    <Layout>

        <SEO title="Report" />
        <Report props={props} />
    </Layout>
)

export default ReportPage
