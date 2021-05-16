import * as React from "react"
import { Helmet } from "react-helmet"

import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Events from '../components/home/Events';
import Testimonial from '../components/home/Testimonial';
import Blog from '../components/home/Blog';
import Cta from '../components/home/CTA';

// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Hero />
      <About />
      <Events />
      <Testimonial />
      <Blog />
      <Cta />
    </>
  )
}

export default IndexPage
