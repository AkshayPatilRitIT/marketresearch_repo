import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Contact } from '../components/Contact'
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="About us" />
        <Contact />
    </Layout>
)

export default ContactPage
