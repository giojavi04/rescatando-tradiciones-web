import * as React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

import ContentHTML from './ContentHTML'
import ReturnPrevButton from '../global/ReturnPrevButton'

const GroupPost = ({
  content,
  logo,
  title,
  description,
  type,
  facebook,
  instagram,
  email,
  phone
}) => {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <h2 className="text-base text-rtSecondary font-semibold tracking-wide uppercase">{type}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
        </div>
        <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p className="text-lg text-gray-500">
            {description}
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
              <ContentHTML content={content} />
            </div>
            <div className="mt-4 flex text-base max-w-prose mx-auto lg:max-w-none">
              <dl className="space-y-6 lg:gap-8 ">
                <dt>
                  <span className="sr-only">Número</span>
                </dt>
                <dd className="flex text-base text-rtSecondary">
                  <PhoneIcon className="flex-shrink-0 w-6 h-6 text-rtSecondary" aria-hidden="true" />
                  <span className="ml-3">{phone}</span>
                </dd>
                <dt>
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="flex text-base text-rtSecondary">
                  <MailIcon className="flex-shrink-0 w-6 h-6 text-rtSecondary" aria-hidden="true" />
                  <span className="ml-3">{email}</span>
                </dd>
              </dl>
            </div>
            <ReturnPrevButton />
          </div>
          <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)" />
            </svg>
            <blockquote className="relative bg-gray-200 rounded-lg shadow-lg w-96 min-w-full">
              <div className="rounded-t-lg px-6 py-4">
                <div className="relative">
                  <GatsbyImage
                    image={logo}
                    alt={title}
                  />
                </div>
              </div>
              <cite className="relative flex items-center justify-center bg-gray-900 rounded-b-lg not-italic py-5 px-6">
                <a href={facebook} target="__blank" className="text-white hover:text-gray-300 mr-4">
                  <span className="sr-only">Facebook</span>
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href={instagram} target="__blank" className="text-white hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  )
}

GroupPost.propTypes = {
  content: PropTypes.node.isRequired,
  logo: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
}

export default GroupPost
