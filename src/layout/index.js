import * as React from "react"

import '../styles/global.css';
import NavBar from '../components/global/NavBar'
import Footer from '../components/global/Footer'

// markup
const Layout = (props) => {
  return (
    <>
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
  );
}

export default Layout
