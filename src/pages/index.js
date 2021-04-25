import * as React from "react"
import { Helmet } from "react-helmet"

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rescatando Tradiciones | Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div><h1>Index</h1></div>
    </>
  )
}

export default IndexPage
