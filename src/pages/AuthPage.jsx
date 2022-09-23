import { Button } from "@mui/material"
import React, { useState } from "react"
import AuthForm from "../components/form/AuthForm"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"

import "./AuthPage.scss"
import { useNavigate } from "react-router"

const AuthPage = () => {
  const [login, setLogin] = useState(false)
  const navigate = useNavigate()

  const actionText = login ? "Войти аккаунт" : "Создать аккаунт"

  return (
    <div className="auth">
      <div className="auth__pic">
        {/* in here : image but past it with scss */}
      </div>
      <div className="auth__sign container">
        <h1>{actionText}</h1>

        <div className="btns">
          <div className="g-btn">
            <Button
              sx={{
                color: "gray",
                textTransform: "none",
                borderColor: "gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              variant="outlined"
            >
              <FcGoogle />
              <p className="p1"> Войти с помощью Google </p>
              <p className="p2"> Войти </p>
            </Button>
          </div>
          <div className="fc-btn">
            <Button
              sx={{
                color: "gray",
                textTransform: "none",
                borderColor: "gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              variant="outlined"
            >
              <FaFacebook />
              <p className="p1"> Войти с помощью Facebook </p>
              <p className="p2"> Войти </p>
            </Button>
          </div>
        </div>

        <h3>или</h3>

        <AuthForm login={login} />

        <Button
          sx={{
            mt: "2.3rem",
            color: "white",
            backgroundColor: "#007fff",
            textTransform: "none",
            width: "50vw",
            maxWidth: "40rem",
          }}
          variant="contained"
          onClick={() => login && navigate("/")}
        >
          {actionText}
        </Button>

        {login && (
          <p className="p3">
            Нет аккаунта?{" "}
            <button
              onClick={() => {
                setLogin((prevState) => !prevState)
              }}
            >
              Зарегистрируйтесь
            </button>
          </p>
        )}
        {!login && (
          <p className="p3">
            У вас уже есть аккаунт?{" "}
            <button
              onClick={() => {
                setLogin((prevState) => !prevState)
              }}
            >
              Войти
            </button>
          </p>
        )}
      </div>
    </div>
  )
}

export default AuthPage
