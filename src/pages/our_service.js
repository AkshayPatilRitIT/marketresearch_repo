import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { OurService } from '../components/OurService'
import SEO from "../components/seo"

const ServicePage = () => (
    <Layout>
        <SEO title="Our Service" />
        <OurService />
    </Layout>
)

export default ServicePage
