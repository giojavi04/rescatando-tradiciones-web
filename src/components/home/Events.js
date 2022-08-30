import * as React from "react";
import { Link } from "gatsby";

import { UserGroupIcon } from "@heroicons/react/outline";

//markup
const Events = ({ data, events }) => {
  return (
    <div className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          {data.title}
        </h2>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          {data.description}
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <div key={event.node.frontmatter.title} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-rtSecondary rounded-md shadow-lg">
                        <UserGroupIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <Link to={event.node.fields.slug}>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight hover:text-rtSecondary">
                        {event.node.frontmatter.title}
                      </h3>
                    </Link>
                    <p className="mt-5 text-base text-gray-500">
                      {event.node.frontmatter.eventResume}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
