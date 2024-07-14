import * as React from "react"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import theme from "../../theme"
import "./globals.css"
import type { Metadata } from "next"
import HomePageLayoutWrapper from "."

export const metadata: Metadata = {
  title: "Amore homes",
  description:
    "Nigeria's leading real estate partner that providing the best communal living experience while fostering family friendly lifestyle",
  keywords:
    "Real estate, housing, Nigeria housing in Nigeria, affordable hosuing, estate,residences,Abuja,Nigeria,Lummi, Utako,best communal living experience,communal, leading real estate partner",
  authors: [
    {
      name: "Aisha Abdulkadir Usman",
      url: "",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-primary">
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <React.Suspense fallback="loading...">
              <HomePageLayoutWrapper>{children}</HomePageLayoutWrapper>
            </React.Suspense>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
