import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { RiArrowDropDownLine } from "react-icons/ri"
import { RiArrowDropUpLine } from "react-icons/ri"
import { BsNewspaper } from "react-icons/bs"
import { MdArticle } from "react-icons/md"

const Dropdown = ({ name }) => {
  const [showLinks, setShowLinks] = useState(false)

  return (
    <div className="dropdown">
      <div
        className="dropdown-header"
        onClick={() => setShowLinks((prevState) => !prevState)}
      >
        <p>{name}</p>
        {!showLinks ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
      </div>
      {showLinks && (
        <div className="links">
          <NavLink
            className={({ isActive }) => (isActive ? "active link" : "link")}
            to="/news"
          >
            <BsNewspaper /> Новости
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active link" : "link")}
            to="/articles"
          >
            <MdArticle />
            Статьи
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Dropdown
