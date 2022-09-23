import React from "react"

import "./Homepage.scss"
import Navbar from "../components/navbar/Navbar"
import Leftbar from "../components/leftbar/Leftbar"
import MainContent from "../components/mainContent/MainContent"

const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <Leftbar />
        <Navbar>
          <MainContent />
        </Navbar>
      </div>
    </>
  )
}

export default Homepage
