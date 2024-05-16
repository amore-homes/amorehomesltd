"use client"

import FAQSection from "@/components/FAQs"
import {
  ArrowBackward,
  ArrowDown,
  ArrowForward,
  ArrowUp,
  LocationIcon,
  SearchIcon,
} from "@/components/SVGs"
import ContactUsSection from "@/components/contact-us"
import HouseTypePage from "@/components/house-type-slides"
import CommunityImages from "@/components/our-community-slides"
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  styled,
} from "@mui/material"
import { isEmpty } from "lodash"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Fonts } from "."

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
export const MenuProps = {
  "& .Mui-selected": {
    backgroundColor: "#FFFFFF",
  },
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
      padding: "16px 12px",
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      borderRadius: 8,
      border: `1px solid #FFF`,
    },
  },
}
export const StyledMenuItem = styled(MenuItem)({
  width: 280,
  font: `normal normal 400 normal 20px/25.08px ${Fonts.primary}`,
  color: "#000000",
  padding: 4,
  background: "#FFFFFF",
  "&:hover": {
    background: "#FFFFFF",
  },

  "&:focused": {
    background: "#FFFFFF",
    font: `normal normal 400 normal 20px/25.08px ${Fonts.primary}`,
  },
})
export const StyledSelectFormControl = styled(FormControl)({
  width: "100%",
  "& label": {
    font: `normal normal 400 normal 22px/27.59px ${Fonts.primary}`,
  },
  "& label.Mui-focused": {
    color: "#8A8A8A",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "none",
  },
})
interface ImagesProps {
  id: number
  name: string
  imgPath: string
  width: number
  height: number
}
;[]
function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  }
}
export default function HomePage() {
  const [search, setSearch] = React.useState("")
  const [type, setType] = React.useState("any")
  const [room, setRoom] = React.useState("any")
  const [price, setPrice] = React.useState("any")
  const [community, setCommunity] = React.useState("any")
  const [images, setImages] = React.useState([])
  const [page, setPage] = React.useState(0)
  const pagesize = 3
  const count = images?.length
  const totalPageNumbers = Math.ceil(count / pagesize)

  const handlePageNavigation = (direction: string) => {
    if (direction === "next") {
      page < totalPageNumbers ? setPage(page + 1) : setPage(totalPageNumbers)
    } else {
      page > 1 ? setPage(page - 1) : setPage(0)
    }
  }
  React.useEffect(() => {
    fetch("http://localhost:5001/our-communities")
      .then((response) => response.json())
      .then((data) => {
        setImages(data)
      })
      .catch((error) => console.error("Error fetching posts:", error))
  }, [])

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value)
  }
  const handleRoomChange = (event: SelectChangeEvent) => {
    setRoom(event.target.value)
  }
  const handlePriceChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value)
  }
  const handleCommunityChange = (event: SelectChangeEvent) => {
    setCommunity(event.target.value)
  }
  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }
  return (
    <div className="w-full">
      <Box
        component="section"
        className="w-full h-[80vh] lg:h-[100vh] xl:h-[100vh] flex flex-col justify-center items-center pb-8 pt-[80px] px-4 lg:mt-0 md:py-[120px] relative gap-8 overflow-hidden"
        data-aos="fade-down"
      >
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: -5,
            left: -1,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            filter: "blur(4px)",
            backgroundColor: "#04165880",
            backgroundImage: {
              xs: `linear-gradient(rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.01)),url("/images/home-hero.jpeg")`,
              md: `linear-gradient(rgba(4, 22, 88, 0.6), rgba(4, 22, 88, 0.6)),url("/images/home-hero.jpeg")`,
            },
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box className="w-full flex flex-col justify-center items-center gap-2">
          <Image
            src="/images/logo-with-text.svg"
            alt="Amore logo"
            width={641}
            height={300}
            className="w-[280px] h-[150px] lg:w-[380px] lg:h-[200px] xl:w-[441px] xl:h-[230px] xxl:w-[641px] xxl:h-[300px]"
          />
          <Typography className="font-normal font-primary text-[15px]/[18.81px] text-white lg:text-xl xl:text-2xl/[35px] xxl:text-4xl/[45.14px] text-left uppercase mt-[-25px]">
            Homes for Sustainability
          </Typography>
        </Box>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          className="w-full hidden lg:flex max-w-[1344px] bg-white rounded-lg px-4"
        >
          <Grid container>
            <Grid item xs={12} sm={6} md={2.65}>
              <Box
                className="w-full py-4"
                sx={{ borderRight: { xs: "none", md: `1px solid #ACACAC` } }}
              >
                <StyledSelectFormControl variant="standard">
                  <InputLabel
                    id="property-type-label"
                    className="w-full font-normal font-primary text-[18px]/[24px] xl:text-[22px]/[27.59px]"
                  >
                    Property Type
                  </InputLabel>
                  <Select
                    displayEmpty
                    labelId="property-type-label"
                    id="property-type"
                    label="Property Type"
                    variant="standard"
                    className="w-full border-none font-normal font-primary text-[16px]/[24px] xl:text-[20px]/[25.08px] text-[#000000] bg-white py-2"
                    MenuProps={MenuProps}
                    value={type}
                    onChange={handleTypeChange}
                    disableUnderline
                    IconComponent={(props: any) => {
                      const rotate = props.className
                        .toString()
                        .includes("iconOpen")
                      return (
                        <IconButton>
                          <ArrowDown
                            style={{
                              width: 20,
                              height: 20,
                              color: "#808080",
                              transform: rotate ? "rotate(180deg)" : "none",
                            }}
                          />
                        </IconButton>
                      )
                    }}
                  >
                    <StyledMenuItem
                      value="any"
                      disableGutters
                      disableRipple
                      disableTouchRipple
                    >
                      Any
                    </StyledMenuItem>
                    {[
                      {
                        value: "townhouse",
                        label: "Town house",
                      },
                      {
                        value: "apartment",
                        label: "Apartment",
                      },
                    ]?.map((option, index) => {
                      return (
                        <StyledMenuItem
                          disableGutters
                          disableRipple
                          disableTouchRipple
                          key={option.value + index}
                          value={option.value}
                        >
                          {option.label}
                        </StyledMenuItem>
                      )
                    })}
                  </Select>
                </StyledSelectFormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2.65}>
              <Box
                className="w-full py-4 px-6"
                sx={{ borderRight: { xs: "none", md: `1px solid #ACACAC` } }}
              >
                <StyledSelectFormControl variant="standard">
                  <InputLabel
                    id="bedroom-label"
                    className="w-full font-normal font-primary text-[18px]/[24px] xl:text-[22px]/[27.59px]"
                  >
                    Bedroom
                  </InputLabel>
                  <Select
                    displayEmpty
                    labelId="bedroom-label"
                    id="bedroom"
                    label="Bedroom"
                    variant="standard"
                    className="w-full border-none font-normal font-primary text-[16px]/[24px] xl:text-[20px]/[25.08px] text-[#000000] bg-white py-2"
                    MenuProps={MenuProps}
                    value={room}
                    onChange={handleRoomChange}
                    disableUnderline
                    IconComponent={(props: any) => {
                      const rotate = props.className
                        .toString()
                        .includes("iconOpen")
                      return (
                        <IconButton>
                          <ArrowDown
                            style={{
                              width: 20,
                              height: 20,
                              color: "#808080",
                              transform: rotate ? "rotate(180deg)" : "none",
                            }}
                          />
                        </IconButton>
                      )
                    }}
                  >
                    <StyledMenuItem
                      value="any"
                      disableGutters
                      disableRipple
                      disableTouchRipple
                    >
                      Any
                    </StyledMenuItem>
                    {[
                      { label: "4", value: "4 bedroom" },
                      { label: "5", value: "5 bedroom" },
                    ]?.map((option, index) => {
                      return (
                        <StyledMenuItem
                          disableGutters
                          disableRipple
                          disableTouchRipple
                          key={option.value + index}
                          value={option.value}
                        >
                          {option.label}
                        </StyledMenuItem>
                      )
                    })}
                  </Select>
                </StyledSelectFormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2.65}>
              <Box
                className="w-full py-4 px-6"
                sx={{ borderRight: { xs: "none", md: `1px solid #ACACAC` } }}
              >
                <StyledSelectFormControl variant="standard">
                  <InputLabel
                    id="price-label"
                    className="w-full font-normal font-primary text-[18px]/[24px] xl:text-[22px]/[27.59px]"
                  >
                    Price Range
                  </InputLabel>
                  <Select
                    displayEmpty
                    labelId="price-label"
                    id="price"
                    label="Price Range"
                    variant="standard"
                    className="w-full border-none font-normal font-primary text-[16px]/[24px] xl:text-[20px]/[25.08px] text-[#000000] bg-white py-2"
                    MenuProps={MenuProps}
                    value={price}
                    onChange={handlePriceChange}
                    disableUnderline
                    IconComponent={(props: any) => {
                      const rotate = props.className
                        .toString()
                        .includes("iconOpen")
                      return (
                        <IconButton>
                          <ArrowDown
                            style={{
                              width: 20,
                              height: 20,
                              color: "#808080",
                              transform: rotate ? "rotate(180deg)" : "none",
                            }}
                          />
                        </IconButton>
                      )
                    }}
                  >
                    <StyledMenuItem
                      value="any"
                      disableGutters
                      disableRipple
                      disableTouchRipple
                    >
                      Any
                    </StyledMenuItem>
                    {[
                      { label: "Premium", value: "premium" },
                      { label: "Luxury", value: "luxury" },
                    ]?.map((option, index) => {
                      return (
                        <StyledMenuItem
                          disableGutters
                          disableRipple
                          disableTouchRipple
                          key={option.value + index}
                          value={option.value}
                        >
                          {option.label}
                        </StyledMenuItem>
                      )
                    })}
                  </Select>
                </StyledSelectFormControl>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2.65}>
              <Box className="w-full p-4">
                <StyledSelectFormControl variant="standard">
                  <InputLabel
                    id="community-label"
                    className="w-full font-normal font-primary text-[18px]/[24px] xl:text-[22px]/[27.59px]"
                  >
                    Community
                  </InputLabel>
                  <Select
                    displayEmpty
                    labelId="community-label"
                    id="community"
                    label="Community"
                    variant="standard"
                    className="w-full border-none font-normal font-primary text-[16px]/[24px] xl:text-[20px]/[25.08px] text-[#000000] bg-white py-2"
                    MenuProps={MenuProps}
                    value={community}
                    onChange={handleCommunityChange}
                    disableUnderline
                    IconComponent={(props: any) => {
                      const rotate = props.className
                        .toString()
                        .includes("iconOpen")
                      return (
                        <IconButton>
                          <ArrowDown
                            style={{
                              width: 20,
                              height: 20,
                              color: "#808080",
                              transform: rotate ? "rotate(180deg)" : "none",
                            }}
                          />
                        </IconButton>
                      )
                    }}
                  >
                    <StyledMenuItem
                      value="any"
                      disableGutters
                      disableRipple
                      disableTouchRipple
                    >
                      Any
                    </StyledMenuItem>
                    {[
                      { label: "Amore court", value: "amore-court" },
                      { label: "Lummi island", value: "lummi-island" },
                    ]?.map((option, index) => {
                      return (
                        <StyledMenuItem
                          disableGutters
                          disableRipple
                          disableTouchRipple
                          key={option.value + index}
                          value={option.value}
                        >
                          {option.label}
                        </StyledMenuItem>
                      )
                    })}
                  </Select>
                </StyledSelectFormControl>
              </Box>{" "}
            </Grid>
            <Grid item xs={12} sm={4} md={1.4}>
              <Box className="w-full py-4 flex justify-end items-end">
                <Box className="w-[145px] h-[54px] xl:h-[64px] border border-[#110F0F] bg-[#041658] flex justify-center items-center font-normal font-primary text-[18px]/[24px] xl:text-[21px]/[26.33px] text-left text-white cursor-pointer rounded-sm">
                  Search
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box className="w-full flex lg:hidden gap-2 justify-start items-center">
          <LocationIcon />
          <Box className="relative w-full">
            <TextField
              variant="outlined"
              name="search"
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder="Search for Properties"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
              className="w-full outline-none focus:outline-none border-none"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
                className:
                  "w-full bg-white rounded-[30px] text-[14px]/[17.55px] placeholder:text-[#706F6F] text-[#000000] font-primary font-normal px-3",
              }}
            />
          </Box>
        </Box>
        <Link
          href="#committee-section"
          className="hidden xxl:block absolute left-auto right-16 top-auto bottom-20 cursor-pointer"
        >
          <ArrowUp />
        </Link>
        <Link
          href="#committee-section"
          className="xs:hidden lg:block xxl:hidden absolute left-auto right-16 top-auto bottom-10 cursor-pointer"
        >
          <ArrowUp style={{ width: 48, height: 48 }} />
        </Link>
        <Link
          href="#committee-section"
          className="block lg:hidden absolute left-auto right-8 top-auto bottom-10 cursor-pointer"
        >
          <ArrowUp style={{ width: 45, height: 38 }} />
        </Link>
      </Box>
      {/* *** OUR COMMUNITIES *** */}
      <Box
        component="section"
        id="committee-section"
        className="w-full flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
        data-aos="fade-up"
      >
        <Box
          className="w-full flex flex-col lg:flex-row justify-between gap-2 mb-4"
          data-aos="fade-up"
        >
          <Box className="w-full lg:w-2/3 flex gap-2">
            <Box className="w-full flex flex-col">
              <Typography
                variant="subtitle1"
                className="font-primary font-normal text-[19px]/[23.83px] lg:text-[28px/[40px] xl:text-3xl/[40px] text-left text-primary uppercase"
              >
                Our Communities
              </Typography>
              <Box className="relative">
                <Typography
                  variant="subtitle1"
                  className="font-primary font-normal text-3xl/[23.83px] lg:text-4xl/[42px] xl:text-4xl/[58px] xxl:text-4xl/[60.25px] text-left text-[#100808] uppercase flex gap-2 relative"
                >
                  Featured Communities
                </Typography>
                <Divider
                  orientation="horizontal"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    width: 210,
                    borderWidth: 2,
                    borderColor: "#B59363",
                    position: "absolute",
                    left: 440,
                    right: "auto",
                    top: { xs: 0, sm: 15, md: 40, lg: 35 },
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box component="div" className="flex gap-8 justify-end items-end">
            <Button
              className="w-[55px] h-[55px] rounded-2xl flex justify-center items-center bg-[#F0F0F0]"
              sx={{ boxShadow: "0px 4px 20px 2px #00000040" }}
              onClick={() => handlePageNavigation("previous")}
              disabled={page === 0}
            >
              <ArrowBackward />
            </Button>{" "}
            <Button
              className="w-[55px] h-[55px] rounded-2xl flex justify-center items-center bg-[#F0F0F0]"
              sx={{ boxShadow: "0px 4px 20px 2px #00000040" }}
              onClick={() => handlePageNavigation("next")}
              disabled={page + 1 === totalPageNumbers || isEmpty(images)}
            >
              <ArrowForward />
            </Button>
          </Box>
        </Box>
        <CommunityImages images={images} page={page} pagesize={pagesize} />
      </Box>

      {/* *** LATEST PROJECTS *** */}
      <Box
        component="section"
        id="project-section"
        className="w-full flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
        data-aos="fade-up"
      >
        <Box className="w-full flex flex-col lg:flex-row justify-between gap-2 mb-4">
          <Box className="w-full lg:w-2/3 flex gap-2">
            <Box className="w-full flex flex-col" data-aos="fade-up">
              <Typography
                variant="subtitle1"
                className="font-primary font-normal text-[19px]/[23.83px] lg:text-[28px/[40px] xl:text-3xl/[40px] text-left text-primary uppercase"
              >
                New Updates
              </Typography>

              <Box className="relative">
                <Typography
                  variant="subtitle1"
                  className="font-primary font-normal text-3xl/[23.83px] lg:text-4xl/[42px] xl:text-4xl/[58px] xxl:text-4xl/[60.25px] text-left text-[#100808] uppercase flex gap-2 relative"
                >
                  Latest Projects
                </Typography>
                <Divider
                  orientation="horizontal"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    width: 210,
                    borderWidth: 2,
                    borderColor: "#B59363",
                    position: "absolute",
                    left: 290,
                    right: "auto",
                    top: { xs: 0, sm: 15, md: 40, lg: 35 },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="w-full relative flex flex-col sm:flex-row gap-4">
          <Image
            src="/images/project-1.jpeg"
            alt="First project"
            width={470}
            height={414}
            quality={100}
            className={`rounded-sm h-[200px] w-full lg:w-1/3 xl:h-[414px]`}
            loading="lazy"
            data-aos="fade-right"
          />
          <Image
            src="/images/project-2.jpeg"
            alt="Second project"
            width={647}
            height={414}
            quality={100}
            className={`rounded-sm h-[200px] w-full lg:w-2/3 xl:h-[414px]`}
            loading="lazy"
            data-aos="fade-left"
          />
        </Box>
        <Box className="w-full flex relative flex-col lg:flex-row">
          <Box className="w-full sm:w-[580px] md:w-[800px] lg:w-[900px] xl:w-[750px] xxl:w-[1200px] flex gap-1 xl:gap-4">
            <Box className="w-1/2 flex gap-4">
              <Image
                src="/images/project-3.jpeg"
                alt="Third project"
                width={460}
                height={878}
                quality={100}
                className={`rounded-sm h-[285px] w-[135px] lg:w-[260px] xl:w-[280px] lg:h-[480px] xl:h-[578px] xxl:h-[878px] xxl:w-[460px]`}
                loading="lazy"
                data-aos="fade-up"
              />
              <Box className="w-1/2 flex flex-col gap-1 lg:gap-3 xl:gap-4">
                <Image
                  src="/images/project-4.jpeg"
                  alt="Fourth project"
                  width={693}
                  height={401}
                  className={`rounded-sm h-[150px] lg:h-[250px] w-[185px] lg:w-[350px] xl:h-[350px] xl:w-[431px] xxl:h-[401px] xxl:w-[693px]`}
                  loading="lazy"
                  data-aos="flip-left"
                />
                <Box className="w-full flex gap-1 md:gap-4">
                  <Image
                    src="/images/project-5.jpeg"
                    alt="Fifth project"
                    width={346}
                    height={459}
                    className={`w-[120px] sm:w-1/2 lg:w-[150px] h-[150px] lg:h-[216px] xl:h-[210px] xl:w-[320px] xxl:h-[459px] xxl:w-[346px] rounded-sm`}
                    loading="lazy"
                    data-aos="flip-right"
                  />
                  <Image
                    src="/images/project-6.jpeg"
                    alt="sixth project"
                    width={320}
                    height={460}
                    className={`w-[120px] sm:w-1/2 rounded-sm h-[150px] lg:h-[216px] lg:w-[180px] xl:w-[210px] xl:h-[210px] xxl:h-[460px] xxl:w-[328px]`}
                    loading="lazy"
                    data-aos="flip-right"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="w-full max-w-[450px] xl:w-1/3 mt-8 flex flex-col gap-6 pl-4">
            <Box className="w-full relative px-8">
              <Divider
                orientation="horizontal"
                sx={{
                  width: 107,
                  borderWidth: 2,
                  borderColor: "#B59363",
                  position: "absolute",
                  left: 0,
                  top: { xs: 25, sm: 35, md: 38, lg: 40, xl: 40 },
                }}
              />

              <Typography
                variant="subtitle1"
                className="font-primary font-normal text-3xl/[23.83px] lg:text-3xl/[42px] xl:text-[28px]/[38px] xxl:text-[32px]/[45.14px] text-left text-primary uppercase flex gap-2 relative left-[80px] top-4"
                data-aos="zoom-in-right"
                data-aos-once={true}
              >
                New Arrivals
              </Typography>
            </Box>
            <Button
              variant="contained"
              className="w-full h-[50px] lg:h-[60px] xl:[70px] xxl:h-[80px] font-normal font-primary text-center text-white text-[17px]/[21.32px] lg:text-[24px]/[32.11px] xl:text-[28px]/[35.11px] rounded-[10px] bg-[#041658] mt-10"
              data-aos="fade-left"
              data-aos-once={true}
            >
              View all properties
            </Button>
            <Typography
              className="w-full px-2 font-primary font-normal text-[#000000] text-left text-[20px]/[25.08px] lg:text-[26px]/[32.62px] xl:text-[30px]/[37.62px]"
              data-aos="fade-up"
            >
              Our properties each have their own unique design aesthetic,
              providing an aspirational lifestyle within a thriving community,
              supported by Our community management team.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ***HOUSE TYPES*** */}
      <Box
        component="section"
        id="committee-section"
        className="w-full flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[80px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
        data-aos="fade-up"
      >
        <Box className="w-full flex flex-col lg:flex-row justify-between gap-2 mb-4">
          <Box className="w-full lg:w-2/3 flex gap-2">
            <Box className="w-full flex flex-col">
              <Typography
                variant="subtitle1"
                className="font-primary font-normal text-[19px]/[23.83px] lg:text-[28px/[40px] xl:text-3xl/[40px] text-left text-primary uppercase"
                data-aos="fade-up"
              >
                Our Home Design
              </Typography>
              <Box className="relative">
                <Typography
                  variant="subtitle1"
                  className="font-primary font-normal text-[28px]/[24px] lg:text-4xl/[42px] xl:text-4xl/[58px] xxl:text-4xl/[60.25px] text-left text-[#100808] uppercase flex gap-2 relative"
                  data-aos="fade-up"
                >
                  Our House Types
                </Typography>
                <Divider
                  orientation="horizontal"
                  sx={{
                    width: 107,
                    borderWidth: 2,
                    borderColor: "#B59363",
                    position: "absolute",
                    left: { xs: 240, sm: 310 },
                    top: { xs: 25, sm: 35, md: 40, lg: 40 },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <HouseTypePage />
      </Box>
      {/* *** FAQs *** */}
      <Box
        component="section"
        id="faqs-section"
        className="w-full flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
        data-aos="fade-up"
      >
        <Box className="w-full flex flex-col lg:flex-row justify-between gap-2 mb-4">
          <Box className="w-full lg:w-2/3 flex gap-2">
            <Box className="w-full flex flex-col">
              <Typography
                variant="subtitle1"
                className="font-primary font-normal text-[19px]/[23.83px] lg:text-[28px/[40px] xl:text-3xl/[40px] text-left text-primary uppercase"
                data-aos="fade-up"
              >
                Frequently Ask Questions
              </Typography>

              <Box className="relative">
                <Typography
                  variant="subtitle1"
                  className="font-primary font-normal text-3xl/[23.83px] lg:text-4xl/[42px] xl:text-4xl/[58px] xxl:text-4xl/[60.25px] text-left text-[#100808] uppercase flex gap-2 relative"
                  data-aos="fade-up"
                >
                  More Information
                </Typography>
                <Divider
                  orientation="horizontal"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    width: 210,
                    borderWidth: 2,
                    borderColor: "#B59363",
                    position: "absolute",
                    left: 370,
                    right: "auto",
                    top: { xs: 0, sm: 15, md: 40, lg: 35 },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <FAQSection />
      </Box>
      {/* *** CONTACT US *** */}
      <Box
        component="section"
        id="contact-us-section"
        className="w-full flex flex-col gap-4"
        data-aos="fade-up"
        data-aos-once={true}
      >
        <Box className="w-full flex justify-start items-start bg-[#F8F7F7]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] py-4">
          <Image
            src="/images/logo-with-blue-text.svg"
            alt="Amore homes Logo"
            width={255}
            height={103}
            data-aos="fade-right"
            data-aos-once={true}
          />
        </Box>
        <ContactUsSection />
      </Box>
    </div>
  )
}
