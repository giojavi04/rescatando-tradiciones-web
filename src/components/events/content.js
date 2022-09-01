import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import ContentHTML from "../global/ContentHTML";

// markup
const Content = ({ data, events }) => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <ContentHTML content={data} />
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <Link
                  to="/contacto"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rtSecondary hover:bg-gray-900"
                >
                  Contáctanos
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {events.map((event) => (
              <Link
                key={event.node.frontmatter.title}
                to={event.node.fields.slug}
              >
                <div className="col-span-1 flex flex-col justify-center items-stretch h-60 min-h-fit py-8 px-8 bg-gray-100">
                  <h3 className="text-lg font-medium text-gray-900 tracking-tight hover:text-rtSecondary">
                    {event.node.frontmatter.title}
                  </h3>
                  <GatsbyImage
                    className="max-h-48"
                    imgClassName="filter grayscale hover:grayscale-0"
                    image={
                      event.node.frontmatter.eventLogoEvent.childImageSharp
                        .gatsbyImageData
                    }
                    alt={event.node.frontmatter.title}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
