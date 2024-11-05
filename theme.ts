"use client"
import { Fonts } from "@/app"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: Fonts.primary,
  },
})

export default theme
