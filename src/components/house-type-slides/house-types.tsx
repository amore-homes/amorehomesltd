"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import { Box } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"
import "swiper/css"
import "swiper/css/free-mode"
import { Autoplay } from "swiper/modules"
import { BathtubIcon, CouchIcon, RulerIcon } from "../SVGs"

export default function HouseTypes({ data }: any) {
  const router = useRouter()

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
      }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
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
          {data?.slice(0, 3)?.map((type: any, index: number) => {
            return (
              <SwiperSlide
                key={`type-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
                data-aos="fade-up"
              >
                <Box className="w-full flex flex-col justify-center items-center gap-4">
                  <Box
                    className="w-full h-[520px] lg:w-[380px] xl:w-[380.22px] xxl:w-[400.22px] bg-[#F8F8F8] flex flex-col gap-8 rounded-[40px] pb-10 cursor-pointer shadow-[11px_17px_23px_0px_#00000040]"
                    onClick={() => router.push("/our-communities")}
                  >
                    {type.image.fields?.file?.url && (
                      <Image
                        src={`https:${type.image.fields?.file?.url}`}
                        alt={type.name}
                        width={402}
                        height={298}
                        className="w-full lg:w-[380px] xl:w-[380px] xxl:w-[402px] h-[298px] rounded-[40px] hover:scale-[1.01]"
                      />
                    )}
                    <h4 className="text-[#000000] text-left font-normal font-primary text-[18px]/[28px] md:text-[20px]/[30px] px-6">
                      {type.address}
                    </h4>
                    <Box className="w-full grid grid-cols-3 lg:flex gap-2 lg:gap-6 px-1 md:px-6">
                      <Box
                        className="w-[100px] lg:w-[104.84px] h-[58.39px] flex justify-center items-center rounded-[13px] hover:scale-[1.02]"
                        sx={{ boxShadow: "4px 8px 11px 0px #00000040" }}
                      >
                        <Box className="w-full flex gap-1 justify-center items-center">
                          <BathtubIcon />
                          <h4 className="font-normal font-primary text-[#000000] text-left text-[18px]/[22.57px]">
                            {type.toilet}
                          </h4>
                        </Box>
                      </Box>
                      {/* //Couch */}
                      <Box
                        className="w-[100px] lg:w-[104.84px] h-[58.39px] flex justify-center items-center rounded-[13px] hover:scale-[1.02]"
                        sx={{ boxShadow: "4px 8px 11px 0px #00000040" }}
                      >
                        <Box className="w-full flex gap-1 justify-center items-center">
                          <CouchIcon />
                          <h4 className="font-normal font-primary text-[#000000] text-left text-[18px]/[22.57px]">
                            {type.room}
                          </h4>
                        </Box>
                      </Box>
                      {/* //Ruler */}
                      <Box
                        className="w-[100px] lg:w-[104.84px] h-[58.39px] flex justify-center items-center rounded-[13px] hover:scale-[1.02]"
                        sx={{ boxShadow: "4px 8px 11px 0px #00000040" }}
                      >
                        <Box className="w-full flex gap-1 justify-center items-center">
                          <RulerIcon />
                          <h4 className="font-normal font-primary text-[#000000] text-left text-[18px]/[22.57px]">
                            {type.dimension}
                          </h4>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <p className="font-normal font-primary text-[#100808] text-center text-[35px]/[40px] lg:text-[60px]/[80.25px] uppercase">
                    {type.name}
                  </p>
                  <p className="max-w-[450px] font-normal font-primary text-primary-text text-center text-[16px]/[24px] xl:text-[18px]/[28px]">
                    {type.description}
                  </p>
                </Box>
              </SwiperSlide>
            )
          })}
        </Box>
      </Swiper>
    </Box>
  )
}
