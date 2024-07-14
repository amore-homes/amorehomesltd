import { Typography } from "@mui/material"
import Link from "next/link"
import React from "react"

export default function PageNotFound() {
  return (
    <div
      className="w-full h-[100vh] relative flex flex-col pb-8 pt-[80px] lg:mt-0 md:py-[120px] gap-8 px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] justify-center items-center"
      data-aos="fade-down"
    >
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <Typography
          variant="h2"
          className="text-secondary font-primary font-normal text-[30px]/[39.18px] lg:text-[80px]/[90px] xl:text-[96px]/[111px] text-left"
        >
          Not Found
        </Typography>
        <Typography
          variant="caption"
          className="font-normal font-primary text-[24px]/[34px] xl:text-[28px]/[40.39px] text-left text-secondary"
        >
          Could not find requested resource
        </Typography>
        <Link
          href="/"
          className="font-normal font-primary text-[24px]/[34px] xl:text-[28px]/[40.39px] text-left text-primary mt-4 decoration-0 cursor-pointer"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
