import * as React from "react"
import '../styles/global.css';
import NavBar from '../components/global/NavBar'
import Footer from '../components/global/Footer'

// markup
export default ({ children }) => (
  <div className="bg-white" >
    <div className="relative overflow-hidden">
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  </div>
)
