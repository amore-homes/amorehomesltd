import { Box, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"

export default function CommunityImages({ images, page, pagesize }: any) {
  return (
    <Box className="w-full relative flex flex-col lg:flex-row gap-4">
      {images?.slice(page * pagesize, page * pagesize + pagesize)?.map(
        (
          img: {
            id: number
            name: string
            imgPath: string
            width: number
            height: number
          },
          index: number
        ) => {
          return (
            <Box
              key={`img-${index}`}
              className="w-full relative flex flex-col gap-4"
            >
              <Image
                src={img.imgPath}
                alt={img.name}
                width={img.width}
                height={img.height}
                quality={100}
                className={`rounded-sm h-[246px] w-full lg:w-[300px] xxl:w-[${img.width}px] xl:w-[380px] xxl:w-[500px] xl:h-[380px] xxl:h-[500px]`}
                loading="lazy"
                data-aos="fade-left"
              />
              <Typography className="w-full font-normal font-primary text-center md:text-center text-3xl/[40px] uppercase">
                {img.name}
              </Typography>
            </Box>
          )
        }
      )}
    </Box>
  )
}
