"use client"
import { CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/SVGs"
import {
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  Toolbar,
  styled,
} from "@mui/material"
import AppBar from "@mui/material/AppBar"
import AOS from "aos"
import "aos/dist/aos.css"
import type { Metadata } from "next"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import React from "react"
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import FooterSection from "./footer"
import "./globals.css"

export const Fonts = {
  primary: `Marcellus, sans-serif`,
}
export const Colors = {
  white: "#FFFFFF",
  primary: "#B59363",
  secondary: "#041658",
  label: "#475367",
  greytext: "#939393",
  text: "#100808",
  textLight: "#8A8A8A",
}

export function updateKey(str: string) {
  if (typeof str !== "string") return ""
  const regex = / /g
  const newStr = str.toLowerCase()
  const update = newStr.replace(regex, "-")
  return update
}
const menu = [
  { name: "Our Communities", link: "/our-communities" },
  { name: "Project updates", link: "/project-updates" },
  { name: "About us", link: "/about-us" },
  { name: "Contact", link: "/contact" },
  { name: "careers", link: "/careers" },
]
export const StyledList = styled(List)({
  display: "flex",
  cursor: "pointer",
  gap: 6,
  width: "100%",
  "& .MuiListItemButton-root": {
    width: 200,
    backgroundColor: `transparent !important`,
    color: "#FFFFFF",
    font: `normal normal 400 normal 19px/23.82px ${Fonts.primary}`,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    cursor: "pointer",
    padding: "8px 12px",
    "&:focused": {
      backgroundColor: `transparent`,
      color: "#FFFFFF",
    },
    "&:hover": {
      backgroundColor: `transparent`,
      color: "#FFFFFF",
    },
  },
  "& .Mui-selected": {
    width: "100%",
    backgroundColor: "transparent",
    color: "#FFFFFF !important",
    "&:focused": {
      backgroundColor: "transparent",
      color: "#FFFFFF",
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: "#FFFFFF",
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
})
export const metadata: Metadata = {
  title: "Amore homes",
  description: "Amore homes",
}

export default function HomePageLayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  const pathname = usePathname()
  const ref = React.useRef(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [scrolling, setScrolling] = React.useState(false)

  React.useEffect(() => {
    AOS.init({
      duration: 1100,
      once: false,
    })
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  const handleClick = (item: { name: string; link: string }, index: number) => {
    router.push(item.link)
    setMobileOpen(false)
  }
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const drawer = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        paddingTop: 16,
      }}
    >
      <Toolbar sx={{ minHeight: `50px !important` }}>
        <Link underline="none" href="/">
          <Image src="/images/logo.svg" width={50} height={50} alt="logo" />
        </Link>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            top: 0,
            right: 16,
            left: "auto",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Box
        component="div"
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box
          component="div"
          sx={{
            width: "100%",
            height: { xs: "100%", md: "45vh" },
            overflowX: "hidden",
            overflowY: "auto",
            px: 2,
            "&::-webkit-scrollbar": {
              width: "0.1px !important",
              height: "0.1px !important",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: `#FE5002 !important`,
              borderRadius: "30px !important",
              boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25) !important`,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: `#D9D9D9 !important`,
            },
          }}
        >
          <StyledList
            className="w-full flex flex-col justify-start items-start mt-8"
            disablePadding
          >
            <ListItemButton
              onClick={() => {
                router.push("/")
                setMobileOpen(false)
              }}
              className={
                pathname === "/" || pathname === "/home"
                  ? "w-full font-primary font-normal text-[19px]/[23.82px] text-left text-white uppercase underline decoration-[7px] decoration-primary underline-offset-[8px] md:decoration-[#000000] flex justify-start items-start cursor-pointer"
                  : "w-full font-primary font-normal text-[19px]/[23.82px] text-left text-white uppercase flex justify-start items-start cursor-pointer hover:text-primary"
              }
            >
              Home
            </ListItemButton>
            {menu?.map((item, index) => {
              let itemName = updateKey(item.name.toLowerCase())
              const selected =
                pathname.startsWith(`/${itemName}`) ||
                (pathname === "/" && item.name.toLowerCase() === "home")
              return (
                <ListItemButton
                  key={`item-${index}`}
                  onClick={() => handleClick(item, index)}
                  className={
                    selected
                      ? "w-full font-primary font-normal text-[19px]/[23.82px] text-left text-white uppercase underline decoration-[7px] decoration-primary  underline-offset-[8px] md:decoration-[#000000] flex justify-start items-start cursor-pointer"
                      : "w-full font-primary font-normal text-[19px]/[23.82px] text-left text-white uppercase flex justify-start items-start cursor-pointer hover:text-primary"
                  }
                >
                  {item.name}
                </ListItemButton>
              )
            })}
          </StyledList>
        </Box>
      </Box>
    </div>
  )
  const recaptchaKey: string | undefined =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey ?? "NOT DEFINED"}>
      <div className="w-full overflow-hidden" ref={ref}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className="w-full h-[68px] shadow-none px-2 md:px-[40px] xxl:px-[96px] py-2"
          sx={{
            zIndex: (theme) => (mobileOpen ? 1 : theme.zIndex.drawer + 1),
            background: scrolling
              ? "white"
              : pathname !== "/"
              ? "white"
              : "transparent",
          }}
        >
          <Toolbar className="w-full justify-between py-2 px-0">
            <Link
              underline="none"
              href="/"
              className="hidden lg:flex cursor-pointer"
            >
              <div
                className={
                  pathname === "/"
                    ? `w-[100px] xl:w-[220px] xxl:w-[300px] font-primary font-normal ${
                        scrolling ? "text-primary-text" : "text-white"
                      } text-[14px]/[22px] xl:text-[16px]/[24px] xxl:text-[23px]/[28.84px] text-left uppercase underline decoration-[7px] underline-offset-[8px] cursor-pointer hover:text-primary`
                    : `w-[100px] xl:w-[220px] xxl:w-[300px] font-primary font-normal ${
                        scrolling
                          ? "text-primary-text"
                          : pathname !== "/"
                          ? "text-primary-text"
                          : "text-white"
                      } text-[14px]/[22px] xl:text-[16px]/[24px] xxl:text-[23px]/[28.84px] text-left uppercase cursor-pointer hover:text-primary`
                }
              >
                Home
              </div>
            </Link>
            <Link underline="none" href="/" className="flex lg:hidden">
              <Image src="/images/logo.svg" width={50} height={50} alt="logo" />
            </Link>
            <StyledList
              disablePadding
              className="hidden lg:flex max-w-[1100px]"
            >
              {menu?.map((item, index) => {
                let itemName = updateKey(item.name.toLowerCase())
                const selected =
                  pathname.startsWith(`/${itemName}`) ||
                  (pathname === "/" && item.name.toLowerCase() === "home")

                return (
                  <ListItemButton
                    disableRipple
                    disableTouchRipple
                    disableGutters
                    key={index}
                    onClick={() => handleClick(item, index)}
                    className={
                      selected
                        ? `w-auto font-primary font-normal text-[14px]/[22px] xl:text-[16px]/[24px] xxl:text-[19px]/[23.82px] text-left ${
                            pathname !== "/"
                              ? "text-primary-text"
                              : "text-white"
                          } underline decoration-[7px] underline-offset-[8px] uppercase cursor-pointer hover:text-primary`
                        : ` w-auto font-primary font-normal text-[14px]/[22px] xl:text-[16px]/[24px] xxl:text-[19px]/[23.82px] text-left ${
                            scrolling
                              ? "text-primary-text"
                              : pathname !== "/"
                              ? "text-primary-text"
                              : "text-white"
                          } uppercase cursor-pointer hover:text-primary`
                    }
                  >
                    {item.name}
                  </ListItemButton>
                )
              })}
            </StyledList>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className="flex lg:hidden bg-transparent text-primary-text hover:bg-transparent hover:text-primary"
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component="nav" sx={{ width: "100%", flexShrink: { md: 0 } }}>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            anchor="right"
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "flex", md: "none" },
              "& .MuiDrawer-paper": {
                backgroundColor: "#0D216D",
                boxSizing: "border-box",
                width: 240,
                "&::-webkit-scrollbar": {
                  width: "0.1px !important",
                  height: "0.1px !important",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: `#B59363 !important`,
                  borderRadius: "30px !important",
                  boxShadow: `inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),inset -2px -2px 2px rgba(0, 0, 0, 0.25) !important`,
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: `#D9D9D9 !important`,
                },
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" className="w-full grow relative min-h-screen">
          <CssBaseline />
          {children}
          <Link
            href="https://wa.me/07003000400?text=Hi%2C%0AI%20would%20like%20to%20know%20more%20 information%20about%20the%20estates."
            target="_blank"
            className="bg-[#4dbc4b] hover:bg-[#4FBB4D] fixed bottom-14 right-4 w-[220px] h-[48px] z-[2000000] rounded-full shadow-xl cursor-pointer hover:scale-[1.005] flex items-center justify-center font-primary font-bold text-white p-4 gap-2 text-sm"
          >
            <WhatsAppIcon className="text-border" />
            Chat us on whatsApp
          </Link>
        </Box>
        <FooterSection />
      </div>
    </GoogleReCaptchaProvider>
  )
}
