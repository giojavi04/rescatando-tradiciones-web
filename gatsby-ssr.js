/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

require('./src/styles/main.css')
const React = require('react')
const Layout = require('./src/components/Layaout').Layout

exports.wrapRootElement = ({ element }) => (
  <Layout>
    {element}
  </Layout>
);