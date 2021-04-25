import * as React from "react"
import { Helmet } from "react-helmet"

import Hero from '../components/home/Hero';
import Cta from '../components/home/CTA';

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rescatando Tradiciones | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Hero />
      <Cta />
    </>
  )
}

export default IndexPage
