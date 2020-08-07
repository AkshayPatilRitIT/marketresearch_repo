import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { About } from '../components/About'
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About us" />
        <About />
    </Layout>
)

export default AboutPage
