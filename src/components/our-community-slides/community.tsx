"use client"
import { Button, Divider, Typography } from "@mui/material"
import { isEmpty } from "lodash"
import Image from "next/image"
import React from "react"
import { ArrowBackward, ArrowForward } from "../SVGs"
import Link from "next/link"
import { updateKey } from "@/app"

export default function CommunityContent({ data }: any) {
  const [page, setPage] = React.useState(0)
  const pagesize = 3
  const count = data?.length
  const totalPageNumbers = Math.ceil(count / pagesize)

  const handlePageNavigation = (direction: string) => {
    if (direction === "next") {
      page < totalPageNumbers ? setPage(page + 1) : setPage(totalPageNumbers)
    } else {
      page > 1 ? setPage(page - 1) : setPage(0)
    }
  }

  return (
    <section
      id="committee-section"
      className="w-full flex flex-col gap-8 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
      data-aos="fade-up"
    >
      <div
        className="w-full flex flex-col lg:flex-row justify-between gap-2 mb-4"
        data-aos="fade-up"
      >
        <div className="w-full lg:w-2/3 flex gap-2">
          <div className="w-full flex flex-col">
            <Typography
              variant="subtitle1"
              className="font-primary font-normal text-[16px]/[28px] lg:text-[28px/[40px] xl:text-3xl/[40px] text-left text-primary uppercase"
            >
              Our Communities
            </Typography>
            <div className="relative">
              <Typography
                variant="subtitle1"
                className="font-primary font-normal text-[25px]/[24px] lg:text-4xl/[42px] xl:text-4xl/[58px] xxl:text-4xl/[60.25px] text-left text-[#100808] uppercase flex gap-2 relative mb-4"
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
            </div>
          </div>
        </div>
        <div className="flex gap-8 justify-end items-end">
          <Button
            className="hidden w-[55px] h-[55px] rounded-2xl md:flex justify-center items-center bg-[#F0F0F0]"
            sx={{ boxShadow: "0px 4px 20px 2px #00000040" }}
            onClick={() => handlePageNavigation("previous")}
            disabled={page === 0}
          >
            <ArrowBackward />
          </Button>{" "}
          <Button
            className="hidden w-[55px] h-[55px] rounded-2xl md:flex justify-center items-center bg-red-500"
            sx={{ boxShadow: "0px 4px 20px 2px #00000040" }}
            onClick={() => handlePageNavigation("next")}
            disabled={page + 1 === totalPageNumbers || isEmpty(data)}
          >
            <ArrowForward />
          </Button>
          <Button
            className="flex w-[35px] h-[40px] rounded-2xl md:hidden justify-center items-center bg-[#F0F0F0]"
            sx={{ boxShadow: "0px 4px 20px 2px #00000040" }}
            onClick={() => handlePageNavigation("previous")}
            disabled={page === 0}
          >
            <ArrowBackward style={{ width: 18, height: 18 }} />
          </Button>{" "}
          <Button
            className="flex w-[35px] h-[40px] rounded-2xl md:hidden justify-center items-center bg-[#F0F0F0] shadow-[0px_4px_20px_2px_#00000040]"
            onClick={() => handlePageNavigation("next")}
            disabled={page + 1 === totalPageNumbers || isEmpty(data)}
          >
            <ArrowForward style={{ width: 18, height: 18 }} />
          </Button>
        </div>
      </div>
      <div className="w-full relative flex flex-col lg:flex-row gap-4">
        {data
          ?.slice(page * pagesize, page * pagesize + pagesize)
          ?.map((img: any, index: number) => {
            return (
              <Link
                href={`/our-communities/${updateKey(img.name.toLowerCase())}`}
                key={`img-${index}`}
                className="w-full relative flex flex-col gap-4 cursor-pointer"
              >
                <Image
                  src={`https:${img.image.fields.file.url}`}
                  alt={img.name}
                  width={img.image.fields.file.details.image.width}
                  height={img.image.fields.file.details.image.height}
                  quality={100}
                  className={`rounded-lg h-[246px] w-full lg:w-[300px] xxl:w-[${img.image.fields.file.details.image.width}px] xl:w-[380px] xxl:w-[500px] xl:h-[380px] xxl:h-[500px]`}
                  loading="lazy"
                  data-aos="fade-left"
                />
                <Typography className="w-full font-normal font-primary text-center md:text-center text-[25px]/[40px] sm:text-3xl/[40px] uppercase">
                  {img.name}
                </Typography>
              </Link>
            )
          })}
      </div>
    </section>
  )
}
