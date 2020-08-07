import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Privacy } from '../components/Privacy'
import SEO from "../components/seo"

const PrivacyPage = () => (
    <Layout>
        <SEO title="Privacy" />
        <Privacy />
    </Layout>
)

export default PrivacyPage
