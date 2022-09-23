import React, { useState } from "react"
import { styled, alpha } from "@mui/material/styles"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import { BsFillBellFill } from "react-icons/bs"
import { BiUser } from "react-icons/bi"
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineClose } from "react-icons/md"
import { motion, AnimatePresence } from "framer-motion"

import Dropdown from "./Dropdown"
import "./Navbar.scss"
import { Badge } from "@mui/material"
import { Link } from "react-router-dom"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "10px",

  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "gray",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.4, 1.4, 1.4, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}))

const Navbar = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="wrapper">
      <div className="nav">
        <div className="nav__left">
          <Search
            sx={{
              backgroundColor: "rgba(221, 221, 221, 0.4)",

              "&:hover": {
                backgroundColor: "rgba(221, 221, 221, 0.7)",
              },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Поиск"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
        <div className="nav__right">
          <Dropdown />
          <Badge
            color="secondary"
            overlap="circular"
            badgeContent=" "
            variant="dot"
            sx={{
              fontSize: "1.2rem",
              color: "gray",
              backgroundColor: "rgba(221, 221, 221, 0.4)",
              width: "3rem",
              height: "3rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
            }}
          >
            <BsFillBellFill />
          </Badge>
          <div className="nav__loggedUser">
            <BiUser />

            <div className="nav__loggedUser_text">
              <h3>Мирия </h3>
              <p>Администратор</p>
            </div>
          </div>
        </div>
        <div className="nav__right_sm">
          <div className="open-btn" onClick={() => setOpenMenu(true)}>
            <GiHamburgerMenu />
          </div>
          <AnimatePresence>
            {openMenu && (
              <motion.div
                key="box"
                className="menu"
                initial={{
                  x: "100%",
                }}
                animate={{
                  x: 0,
                }}
                exit={{
                  x: "100%",
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                <ul>
                  <Link to="/" onClick={() => setOpenMenu(false)}>
                    Главная
                  </Link>
                  <Link to="articles" onClick={() => setOpenMenu(false)}>
                    Статьи
                  </Link>
                  <Link to="news" onClick={() => setOpenMenu(false)}>
                    Новости
                  </Link>
                  <Link to="/auth" onClick={() => setOpenMenu(false)}>
                    Выйти из аккаунта
                  </Link>
                </ul>
                <div className="close-btn" onClick={() => setOpenMenu(false)}>
                  <MdOutlineClose />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Navbar
