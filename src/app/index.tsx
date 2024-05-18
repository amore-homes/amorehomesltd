"use client"
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  MenuIcon,
  MobilePhone,
  TwitterIcon,
} from "@/components/SVGs"
import {
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  Toolbar,
  Typography,
  styled,
} from "@mui/material"
import AppBar from "@mui/material/AppBar"
import AOS from "aos"
import "aos/dist/aos.css"
import type { Metadata } from "next"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import React from "react"
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

function updateKey(str: string) {
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
  const today = new Date()
  const year = today.getFullYear()
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
                  ? "w-full font-primary font-normal text-[19px]/[23.82px] text-left text-white uppercase underline decoration-[7px] decoration-primary md:decoration-[#000000] flex justify-start items-start cursor-pointer"
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
                      ? "w-full font-primary font-normal text-[19px]/[23.82px] text-left text-white uppercase underline decoration-[7px] decoration-primary md:decoration-[#000000] flex justify-start items-start cursor-pointer"
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
  return (
    <div className="w-full overflow-hidden relative" ref={ref}>
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
                    } text-[14px]/[22px] xl:text-[16px]/[24px] xxl:text-[23px]/[28.84px] text-left uppercase underline decoration-[7px] cursor-pointer hover:text-primary`
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
          <StyledList disablePadding className="hidden lg:flex max-w-[1100px]">
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
                      ? `w-auto ont-primary font-normal text-[14px]/[22px] xl:text-[16px]/[24px] xxl:text-[19px]/[23.82px] text-left ${
                          pathname !== "/" ? "text-primary-text" : "text-white"
                        } underline decoration-[7px] uppercase cursor-pointer hover:text-primary`
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
      <Box component="main" className="w-full grow">
        <CssBaseline />
        {children}
      </Box>
      <Box
        component="footer"
        className="w-full h-full xl:h-[400px] flex flex-col py-[30px] relative gap-8 overflow-hidden"
        data-aos="fade-up"
      >
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            boxShadow: "49px 4px 7px 0px #00000040",
            backgroundColor: "#0B0E4BB0",
            backgroundImage: {
              xs: `linear-gradient(rgba(11, 14, 75, 0.69), rgba(11, 14, 75, 0.69)),url("/images/footer-image.jpeg")`,
              md: `linear-gradient(rgba(4, 22, 88, 0.6), rgba(4, 22, 88, 0.6)),url("/images/footer-image.jpeg")`,
            },
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box className="w-full text-white text-center text-[30px]/[36px]  lg:text-[53px]/[66px] font-normal font-primary">
          More Information:
        </Box>
        <Box
          component="div"
          className="w-full flex flex-col lg:flex-row justify-center items-center"
        >
          <Box
            component="div"
            className="w-full max-w-[1280px] flex flex-col lg:flex-row gap-4 lg:gap-8 xxl:gap-10"
          >
            <Box className="w-full md:w-1/2 flex gap-4 px-4">
              <LocationIcon style={{ width: 90, height: 90 }} />
              <Typography className="font-normal font-primary text-white text-[20px]/[28px] md:text-[27.3px]/[38px] xl:text-[38px]/[50px]">
                Ngozi Okonjo-Iweala Way, Utako, Federal Capital Territory,
                Nigeria
              </Typography>
            </Box>
            <Divider
              sx={{
                borderColor: "#FFFFFF",
                borderWidth: { xs: 0.5, md: "4px" },
              }}
            />
            <Box className="w-full md:w-1/2 flex gap-4 px-4">
              <MobilePhone style={{ width: 90, height: 90 }} />
              <Typography className="font-normal font-primary text-white text-[20px]/[28px] md:text-[27.3px]/[38px] xl:text-[38px]/[50px]">
                Call +234 000 000 000 For Information about Virtual tours
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="w-full bg-[#001252E0]">
          <Box className="w-full flex flex-row gap-4 lg:gap-8 xxl:gap-10 justify-between px-8 py-2">
            <Box className="w-full flex flex-col gap-1 md:gap-2">
              <Typography className="text-white text-[13.2px]/[20px] lg:text-[26px]/[33.86px] font-normal font-primary">
                Copyright © All Rights Reserved Amore Homes, {year}
              </Typography>
              <Link
                href="/terms-and-conditions"
                underline="always"
                className="text-[#94CDD5] text-[16px]/[24px] md:text-[20px]/[25.08px] font-normal font-primary normal-case"
              >
                Terms and Conditions
              </Link>
            </Box>
            <Box className="flex gap-4 items-center">
              <Link
                underline="none"
                href="https://www.twitter.com/amore_homes/"
                target="_blank"
                className="text-white hover:text-primary hover:scale-110 cursor-pointer"
              >
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.instagram.com/amore_homes/"
                target="_blank"
                className="text-white hover:text-primary hover:scale-110 cursor-pointer"
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://web.facebook.com/AmoreHomesltd/?_rdc=1&_rdr"
                target="_blank"
                className="text-white hover:text-primary hover:scale-110 cursor-pointer"
              >
                <FacebookIcon />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
