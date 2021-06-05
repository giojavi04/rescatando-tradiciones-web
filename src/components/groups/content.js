import * as React from "react"
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import ContentHTML from '../global/ContentHTML'

// markup
const Content = ({ data, groups }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="text-center text-base font-semibold text-gray-600 tracking-wider">
          <ContentHTML content={data} />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          {groups.map(group => (
            <Link key={group.node.frontmatter.title} to={group.node.fields.slug}>
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
                <GatsbyImage
                  className="max-h-64"
                  image={group.node.frontmatter.groupLogo.childImageSharp.gatsbyImageData}
                  alt={group.node.frontmatter.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content
