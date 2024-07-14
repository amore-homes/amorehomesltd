"use client"
import { SearchIcon } from "@/components/SVGs"
import { IconButton } from "@mui/material"
import React from "react"

export default function SearchBlog({ search, handleSearch }: any) {
  return (
    <div
      className="w-full flex justify-end items-end mt-12"
      data-aos="zoom-in-left"
    >
      <div className="relative w-full max-w-[426px]">
        <input
          name="search"
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search blog"
          className="w-full max-w-[426px] h-[60px] bg-white px-6 rounded-[18px] text-[22px]/[32.6px] placeholder:text-[22px]/[32.6px] placeholder:text-[#706F6F] text-[#000000] font-primary font-normal  outline-none focus:outline-none border-none shadow-[0px_4px_6px_-1px_#00000040_inset]"
        />
        <div className="absolute right-4 top-3">
          <IconButton>
            <SearchIcon className="w-[34px] h-[34px]" />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
