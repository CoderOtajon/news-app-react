import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import AuthPage from "./pages/AuthPage"
import Homepage from "./pages/Homepage"

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/auth")
  }, [])
  return (
    <>
      <Routes>
        <Route path="auth" element={<AuthPage />} />
        <Route path="/*" element={<Homepage />} />
      </Routes>
    </>
  )
}

export default App
