import * as React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import '../styles/global.css';
import NavBar from '../components/global/NavBar'
import Footer from '../components/global/Footer'

// markup
const Layout = (props) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={
        data => (
          <>
            <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`
            } defaultTitle={data.site.siteMetadata.title} >
              <html lang="es" />
              <meta name="description" content={data.site.siteMetadata.description}></meta>
              <link rel="canonical" href="http://rescatandotradiciones.org" />
            </Helmet>
            <div className="bg-white" >
              <div className="relative overflow-hidden">
                <NavBar />
                <main>
                  {props.children}
                </main>
                <Footer />
              </div>
            </div>
          </>
        )}
    />
  );
}

export default Layout
