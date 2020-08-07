import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import { Categories } from '../components/Categories'
import SEO from "../components/seo"

const CategoriesPage = () => (
    <Layout>
        <SEO title="About us" />
        <Categories />
    </Layout>
)

export default CategoriesPage
