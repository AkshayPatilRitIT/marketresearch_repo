import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Checkout } from '../components/Checkout'
import SEO from "../components/seo"

const CheckoutPage = () => (
    <Layout>
        <SEO title="Checkout" />
        <Checkout />
    </Layout>
)

export default CheckoutPage
