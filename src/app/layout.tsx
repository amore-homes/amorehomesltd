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
    "The leading real estate partner providing the best communal living experience while fostering family friendly lifestyle in Nigeria",
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
            <React.Suspense>
              <HomePageLayoutWrapper>{children}</HomePageLayoutWrapper>
            </React.Suspense>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
