import React from "react"
import { Link } from "gatsby"

import Image from "../components/Image"
import SEO from "../components/Seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image nameImage="gatsby-astronaut.png" alt="Gatsby" />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
