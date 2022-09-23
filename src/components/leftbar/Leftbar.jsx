import React from "react"
import "./Leftbar.scss"
import Dropdown from "./Dropdown"
import { Link } from "react-router-dom"
const Leftbar = () => {
  return (
    <div className="leftbar-wrapper">
      <div className="leftbar">
        <h1>
          <Link to={"/"}>РУМТ</Link>
        </h1>

        <Dropdown name="Веб сайт" />
        <Dropdown name="Веб портал" />
      </div>
    </div>
  )
}

export default Leftbar
