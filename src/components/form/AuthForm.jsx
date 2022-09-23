import * as React from "react"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputLabel from "@mui/material/InputLabel"
import InputAdornment from "@mui/material/InputAdornment"
import FormControl from "@mui/material/FormControl"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { TextField } from "@mui/material"

export default function AuthForm({ login }) {
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
    showPassword: false,
    showRepeatPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }
  const handleClickShowRepeatPassword = () => {
    setValues({
      ...values,
      showRepeatPassword: !values.showRepeatPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        {!login && (
          <TextField
            id="demo-helper-text-misaligned-no-helper"
            label="Имя"
            sx={{ m: 1, width: "50vw", maxWidth: "40rem" }}
            value={values.name}
            onChange={handleChange("name")}
          />
        )}

        {/* ************* */}

        <TextField
          id="demo-helper-text-misaligned-no-helper"
          label="Email"
          sx={{ m: 1, width: "50vw", maxWidth: "40rem" }}
          value={values.email}
          onChange={handleChange("email")}
        />

        {/* ************* */}

        <FormControl
          sx={{ m: 1, width: "50vw", maxWidth: "40rem" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        {/* ******************* */}

        {!login && (
          <FormControl
            sx={{ m: 1, width: "50vw", maxWidth: "40rem" }}
            variant="outlined"
          >
            <InputLabel
              sx={{
                backgroundColor: "white",
                paddingInlineEnd: ".5rem",
              }}
              htmlFor="outlined-adornment-password"
            >
              Повторить Пароль
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showRepeatPassword ? "text" : "password"}
              value={values.repeatPassword}
              onChange={handleChange("repeatPassword")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowRepeatPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showRepeatPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="repeatPassword"
            />
          </FormControl>
        )}

        {/* ************* */}
      </div>
    </Box>
  )
}
