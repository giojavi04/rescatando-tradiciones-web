/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require('react')
const Layout = require('./src/components/layout').default
require('./src/components/syles/styles.css')

exports.wrapRootElement = ({ element }) => (
  <Layout>
    {element}
  </Layout>
);