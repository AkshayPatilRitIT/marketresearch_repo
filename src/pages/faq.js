import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Faq } from '../components/Faq'
import SEO from "../components/seo"

const FaqPage = () => (
    <Layout>
        <SEO title="Faq" />
        <Faq />
    </Layout>
)

export default FaqPage
