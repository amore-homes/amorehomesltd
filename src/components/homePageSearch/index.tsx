"use client"
import { LocationIcon, SearchIcon } from "@/components/SVGs"
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  SelectChangeEvent,
  TextField,
} from "@mui/material"
import React from "react"
import HomepageSearchFilters from "./filters"
import { useRouter } from "next/navigation"

export default function HomePageHeroSearch() {
  const router = useRouter()
  const [search, setSearch] = React.useState("")
  const [propertyType, setPropertyType] = React.useState("any")
  const [community, setCommunity] = React.useState("any")
  const [room, setRoom] = React.useState("")
  const [toilet, setToilet] = React.useState("")
  const [dimension, setDimension] = React.useState("")

  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }
  const handlePropertyChange = (e: SelectChangeEvent) =>
    setPropertyType(e.target.value)
  const handleRoomChange = (e: SelectChangeEvent) => setRoom(e.target.value)
  const handleToiletChange = (e: SelectChangeEvent) => setToilet(e.target.value)
  const handleDimensionChange = (e: SelectChangeEvent) =>
    setDimension(e.target.value)
  const handleCommunityChange = (e: SelectChangeEvent) =>
    setCommunity(e.target.value)

  const handleSearchSubmit = (e: any) => {
    e.preventDefault()
    router.push(
      `/our-communities?s=${search}&t=${propertyType}&c=${community}&b=${room}&tb=${toilet}&d=${dimension}`
    )
  }
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full hidden lg:flex max-w-[1344px] bg-white rounded-lg px-4 justify-center items-center">
        <input
          name="search"
          type="search"
          value={search}
          onChange={handleSearch}
          placeholder="Search for Properties"
          className=" w-full outline-none focus:outline-none border-none bg-white rounded-[30px] text-[22px]/[25px] placeholder:text-[#706F6F] text-[#000000] font-primary font-normal px-3 py-4"
        />
        <div className="w-[240px] flex gap-1 justify-center items-center">
          <HomepageSearchFilters
            handlePropertyChange={handlePropertyChange}
            handleRoomChange={handleRoomChange}
            handleToiletChange={handleToiletChange}
            handleDimensionChange={handleDimensionChange}
            handleCommunityChange={handleCommunityChange}
          />
          <div className="w-full py-4 flex justify-end items-end">
            <Button
              onClick={handleSearchSubmit}
              className="w-[145px] h-[54px] xl:h-[64px] border border-[#110F0F] bg-secondary flex justify-center items-center font-normal font-primary text-[18px]/[24px] xl:text-[21px]/[26.33px] text-left text-white cursor-pointer rounded-sm capitalize"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
      <Box className="w-full flex lg:hidden gap-2 justify-start items-center px-4">
        <LocationIcon />
        <div className="relative w-full flex">
          <input
            id={search}
            name="search"
            value={search}
            onChange={handleSearch}
            placeholder="Search for Properties"
            className="w-full md:w-full bg-white appearance-none border border-white border-solid rounded-[30px] text-[14px]/[17.55px] placeholder:text-[#706F6F] text-[#000000] font-primary font-normal px-3 py-4 outline-none focus:outline-none"
          />
          <div className="pointer-events-none absolute top-0 inset-y-0 right-2 flex items-center px-2 text-gray-700">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
        </div>
      </Box>
    </div>
  )
}
