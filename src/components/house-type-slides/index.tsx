"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import { Box, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"
import "swiper/css"
import "swiper/css/free-mode"
import { Autoplay } from "swiper/modules"
import { BathtubIcon, CouchIcon, RulerIcon } from "../SVGs"
import { useRouter } from "next/navigation"

export default function HouseTypePage() {
  const router = useRouter()
  const [houseTypes, setHouseTypes] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:5001/house-types")
      .then((response) => response.json())
      .then((data) => {
        setHouseTypes(data)
      })
      .catch((error) => console.error("Error fetching posts:", error))
  }, [])

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        style={{ width: "100%", height: "100%" }}
        modules={[Autoplay]}
      >
        <Box className="swiper-wrapper">
          {houseTypes?.slice(0, 3)?.map(
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
              index
            ) => (
              <SwiperSlide
                key={`type-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
                data-aos="fade-up"
                data-aos-once={true}
              >
                <Box className="w-full flex flex-col justify-center items-center gap-4">
                  <Box
                    className="w-full lg:w-[380px] xl:w-[380.22px] xxl:w-[400.22px] bg-[#F8F8F8] flex flex-col gap-8 rounded-[40px] pb-10 hover:scale-[1.005] cursor-pointer"
                    sx={{ boxShadow: "11px 17px 23px 0px #00000040" }}
                    onClick={() => router.push("/our-communities")}
                  >
                    <Image
                      src={type.imgPath}
                      alt="A picture"
                      width={402}
                      height={298}
                      className="w-full lg:w-[380px] xl:w-[380px] xxl:w-[402px] h-[298px] rounded-[40px]"
                    />
                    <Typography className="text-[#000000] text-left font-normal font-primary text-[30px]/[37.62px] px-6">
                      {type.location}
                    </Typography>
                    <Box className="w-full grid grid-rows-2 grid-flow-col lg:flex gap-2 lg:gap-6 px-6">
                      <Box
                        className="w-[128px] lg:w-[95.84px] h-[58.39px] flex justify-center items-center rounded-[13px]"
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
                        className="w-[128px] lg:w-[95.84px] h-[58.39px] flex justify-center items-center rounded-[13px]"
                        sx={{ boxShadow: "4px 8px 11px 0px #00000040" }}
                      >
                        <Box className="w-full flex gap-1 justify-center items-center">
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
                        className="w-[128px] lg:w-[95.84px] h-[58.39px] flex justify-center items-center rounded-[13px]"
                        sx={{ boxShadow: "4px 8px 11px 0px #00000040" }}
                      >
                        <Box className="w-full flex gap-1 justify-center items-center">
                          <RulerIcon />
                          <Typography
                            variant="caption"
                            className="font-normal font-primary text-[#000000] text-left text-[18px]/[22.57px]"
                          >
                            60cm
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Typography className="font-normal font-primary text-[#100808] text-center text-[44px]/[60px] lg:text-[64px]/[80.25px] uppercase">
                    {type.name}
                  </Typography>
                  <Typography className="font-normal font-primary text-primary text-center text-[18px]/[24.09px] lg:text-[20px]/[30.09px] xl:text-[24px]/[30.09px] uppercase">
                    Brief description of the house type
                  </Typography>
                </Box>
              </SwiperSlide>
            )
          )}
        </Box>
      </Swiper>
    </Box>
  )
}
