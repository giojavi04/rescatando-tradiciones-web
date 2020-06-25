import React from "react"
import { Link } from "gatsby"

import Image from "../components/Image"
import SEO from "../components/Seo"
import HomeHero from "../components/HomeHero"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <HomeHero />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image nameImage="gatsby-astronaut.png" alt="Gatsby" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
