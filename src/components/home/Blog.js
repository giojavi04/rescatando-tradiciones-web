import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

//markup
const Blog = ({ data, posts }) => {
  return (
    <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
            {data.description}
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {posts.map((post) => (
            <div
              key={post.node.id}
              className="flex flex-col items-stretch rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <GatsbyImage
                  className="h-48 w-full object-cover"
                  image={
                    post.node.frontmatter.featuredimage.childImageSharp
                      .gatsbyImageData
                  }
                  alt={post.node.frontmatter.title}
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  {/* <p className="text-sm font-medium text-cyan-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p> */}
                  <a href={post.node.fields.slug} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.node.frontmatter.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.node.excerpt}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="ml-3">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.node.frontmatter.date}>
                        {post.node.frontmatter.date}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
