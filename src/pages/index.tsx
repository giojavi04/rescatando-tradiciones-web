import React from "react"
import { Link } from "gatsby"

import SEO from "../components/Seo"
import HomeHero from "../components/HomeHero"
import HomeOur from "../components/HomeOur"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HomeHero />
    <HomeOur />
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
