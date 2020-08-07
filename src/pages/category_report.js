import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { CategoryReportDisplay } from '../components/CategoryReportDisplay'
import SEO from "../components/seo"

const category_reportPage = (props) => (
    <Layout>
        <SEO title="About us" />
        <CategoryReportDisplay props={props} />
    </Layout>
)

export default category_reportPage
