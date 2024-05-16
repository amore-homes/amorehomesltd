"use client"
import {
  ArrowDown,
  BathtubIcon,
  CouchIcon,
  RulerIcon,
  SearchIcon,
} from "@/components/SVGs"
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Select,
  TextField,
  Typography,
} from "@mui/material"
import Image from "next/image"
import React from "react"
import { houseTypes as images } from "@/components/data/util"
import {
  MenuProps,
  StyledMenuItem,
  StyledSelectFormControl,
} from "@/components/data"

export default function OurCommunitiesPage() {
  const [search, setSearch] = React.useState("")
  const [forSale, setForSale] = React.useState("")
  const [houseType, setHouseType] = React.useState("")
  const [size, setSize] = React.useState("")
  // const [images, setImages] = React.useState([])
  const [page, setPage] = React.useState(0)
  const [pagesize, setPagesize] = React.useState(8)
  const [location, setLocation] = React.useState("")

  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }
  const handleForSaleSearch = (event: any) => {
    setForSale(event.target.value)
  }
  const handleHouseTypeSearch = (event: any) => {
    setHouseType(event.target.value)
  }
  const handleSizeSearch = (event: any) => {
    setSize(event.target.value)
  }
  return (
    <div
      className="w-full relative flex flex-col pb-8 pt-[80px] lg:mt-0 md:py-[120px] gap-8 px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px]"
      data-aos="fade-down"
    >
      <div className="w-full flex gap-2" data-aos="zoom-in-down">
        <TextField
          variant="outlined"
          name="search"
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search by Location"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#D9D9D9",
              },
              "&:hover fieldset": {
                borderColor: "#D9D9D9",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#D9D9D9",
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
              "w-full bg-[#D9D9D9] rounded-[30px] text-[25px]/[31.35px] placeholder:text-[#605F5F] text-[#000000] font-primary font-normal px-6",
          }}
        />

        <Box className="w-full bg-[#D9D9D9] rounded-[30px] text-[25px]/[31.35px] text-[#605F5F] font-primary font-normal px-6 py-[18px]">
          For Sale
        </Box>
        <StyledSelectFormControl
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#D9D9D9",
              },
              "&:hover fieldset": {
                borderColor: "#D9D9D9",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#D9D9D9",
              },
            },
          }}
        >
          <Select
            id="house-type"
            label="House Type"
            variant="outlined"
            className="w-full outline-none focus:outline-none border-none bg-[#D9D9D9] border-[#D9D9D9] rounded-[30px] text-[25px]/[31.35px] placeholder:text-[#605F5F] text-[#000000] font-primary font-normal px-6"
            MenuProps={MenuProps}
            value={houseType}
            onChange={handleHouseTypeSearch}
            IconComponent={(props: any) => {
              const rotate = props.className.toString().includes("iconOpen")
              return (
                <IconButton>
                  <ArrowDown
                    style={{
                      width: 30,
                      height: 30,
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
        <Box className="w-full bg-[#D9D9D9] rounded-[30px] text-[25px]/[31.35px] text-[#605F5F] font-primary font-normal px-6 py-[18px]">
          Size
        </Box>
      </div>
      <Box className="w-full flex flex-col xl:flex-row gap-4 md:gap-6 xl:gap-4 xxl:gap-2">
        <Box
          className="w-full flex justify-start items-start flex-col gap-2"
          data-aos="fade-right"
        >
          <Box className="w-full xl:w-1/2 xxl:w-[650px] grid grid-cols-2  grid-col-2 md:grid-col-1 xl:grid-cols-2 gap-8 justify-between">
            {images?.slice(page * pagesize, page * pagesize + pagesize)?.map(
              (
                type: {
                  id: number
                  name: string
                  location: string
                  imgPath: string
                  bathroom: number
                  rooms: number
                  dimension: string
                },
                index: number
              ) => (
                <Box
                  key={`item-${index}`}
                  className="w-full flex flex-col justify-center items-center gap-4 cursor-pointer"
                  onClick={() => setLocation(type.location)}
                >
                  <Box
                    className="w-full lg:w-[280px] xl:w-[280.22px] xxl:w-[309px] bg-[#F5F5F5] flex flex-col gap-8 rounded-[4px] pb-10"
                    sx={{
                      boxShadow: "11px 17px 13px 0px #00000040",
                    }}
                  >
                    <Image
                      src={type.imgPath}
                      alt="A picture"
                      width={402}
                      height={298}
                      className="w-full lg:w-[280px] xl:w-[280px] xxl:w-[309px] h-[270px] rounded-[4px] hover:scale-[1.01]"
                    />
                    <Typography className="text-[#000000] text-left font-normal font-primary text-[17px]/[21.32px] px-6">
                      {type.location}
                    </Typography>
                    <Box className="w-full grid grid-cols-2 lg:flex gap-2 lg:gap-6 px-6">
                      <Box
                        className="w-[128px] lg:w-[190.84px] h-[58.39px] flex justify-center items-center rounded-[13px] px-1 hover:scale-[1.02]"
                        sx={{ boxShadow: "4px 8px 11px 0px #00000040" }}
                      >
                        <Box className="w-full flex gap-1 justify-center items-center">
                          <BathtubIcon />
                          <Typography
                            variant="caption"
                            className="font-normal font-primary text-[#000000] text-left text-[18px]/[22.57px]"
                          >
                            {type.bathroom}
                          </Typography>
                        </Box>
                      </Box>
                      {/* //Couch */}
                      <Box
                        className="w-[128px] lg:w-[120.84px] h-[58.39px] flex justify-center items-center rounded-[13px] px-1 hover:scale-[1.02]"
                        sx={{ boxShadow: "4px 8px 11px 0px #00000040" }}
                      >
                        <Box className="w-full flex gap-1 justify-center items-center ">
                          <CouchIcon />
                          <Typography
                            variant="caption"
                            className="font-normal font-primary text-[#000000] text-left text-[18px]/[22.57px]"
                          >
                            {type.rooms}
                          </Typography>
                        </Box>
                      </Box>
                      {/* //Ruler */}
                      <Box
                        className="w-[128px] lg:w-[120.84px] h-[58.39px] flex justify-center items-center rounded-[13px] px-1 hover:scale-[1.02]"
                        sx={{ boxShadow: "4px 8px 11px 0px #00000040" }}
                      >
                        <Box className="w-full flex gap-1 justify-center items-center">
                          <RulerIcon />
                          <Typography
                            variant="caption"
                            className="font-normal font-primary text-[#000000] text-left text-[18px]/[22.57px]"
                          >
                            {`${type.dimension}`}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              )
            )}
          </Box>
          {images?.length - pagesize === 0 ? null : (
            <Button
              endIcon={<ArrowDown style={{ width: 50, height: 50 }} />}
              className="text-[#A6A6A6] font-normal font-primary text-[33px]/[41.38px] mt-8"
              // sx={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              onClick={() => setPagesize(images?.length)}
            >
              {images?.length - pagesize} more
            </Button>
          )}
        </Box>
        <Box
          className="hidden lg:block w-full xl:w-1/2 relative"
          data-aos="fade-left"
        >
          <Image
            src="/images/map.svg"
            alt="map icon"
            width={975.62}
            height={1162.04}
            className="rounded-[70px] w-full h-full xl:h-[680px] xxl:w-[750px] xxl:h-[870.04px]"
          />
          <Typography className="font-normal font-primary text-[#000000] text-[31px]/[38.87px] px-4 mt-2">
            {location}
          </Typography>
        </Box>
      </Box>
    </div>
  )
}
