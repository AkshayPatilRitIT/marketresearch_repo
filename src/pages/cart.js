import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Cart } from '../components/Cart'
import SEO from "../components/seo"

const CartPage = () => (
    <Layout>
        <SEO title="Cart" />
        <Cart />
    </Layout>
)

export default CartPage
