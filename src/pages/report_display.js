import React from "react"


import Layout from "../components/layout"
import { ReportDisplay } from '../components/ReportDisplay'
import SEO from "../components/seo"

const ReportDisplayPage = (props) => (
    <Layout>

        <SEO title="Report" />
        <ReportDisplay props={props} />
    </Layout>
)

export default ReportDisplayPage
