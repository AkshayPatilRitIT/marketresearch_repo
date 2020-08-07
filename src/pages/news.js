import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { News } from '../components/News'
import SEO from "../components/seo"

const NewsPage = () => (
    <Layout>
        <SEO title="About us" />
        <News />
    </Layout>
)

export default NewsPage
