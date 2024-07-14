"use client"
import Image from "next/image"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../SVGs"
import Link from "next/link"
import ArrowUpIcon from "../lottie/arrowUp"

export default function OurTeamMembers({ data }: any) {
  return (
    <div className="w-full h-full relative flex flex-col gap-24">
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
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
        modules={[Autoplay, Pagination]}
      >
        <div className="swiper-wrapper">
          {data?.map((person: any, index: number) => {
            return (
              <SwiperSlide
                key={`type-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div className="w-full flex flex-col">
                  <div className="w-full lg:w-[380px] xl:w-[380.22px] xxl:w-[400.22px] bg-[#F8F8F8] flex flex-col gap-4 rounded-[40px] cursor-pointer">
                    <Image
                      src={
                        person.image.fields.file.url
                          ? `https:${person.image.fields.file.url}`
                          : "/images/profile.png"
                      }
                      alt={person.name}
                      width={402}
                      height={298}
                      className="w-full lg:w-[380px] xl:w-[380px] xxl:w-[380px] h-[400px] rounded-xl"
                    />

                    <div className="m-0 w-full flex flex-col justify-start items-start">
                      <h4 className="text-[#000000] text-[22px]/[28px] font-bold font-primary text-left">
                        {person.name}
                      </h4>
                      <p className="block text-secondary text-[16px]/[24px] font-normal font-primary text-left m-0">
                        {person.position}
                      </p>
                      <div className="w-full max-w-[100px] flex gap-3">
                        {/* facebook */}
                        <div className="w-[100px] lg:w-[104.84px] h-[58.39px] flex justify-center items-center rounded-[13px] hover:scale-[1.02]">
                          <Link
                            href={`https://www.facebook.com/${person.facebook}`}
                            target="_blank"
                            className="w-full flex gap-1 justify-center items-center"
                          >
                            <FacebookIcon />
                          </Link>
                        </div>
                        {/* Instagram */}
                        <div className="w-[100px] lg:w-[104.84px] h-[58.39px] flex justify-center items-center rounded-[13px] hover:scale-[1.02]">
                          <Link
                            href={`https://www.instagram.com/${person.instagram}`}
                            target="_blank"
                            className="w-full flex gap-1 justify-center items-center"
                          >
                            <InstagramIcon />
                          </Link>
                        </div>
                        {/* Twitter */}
                        <div className="w-[100px] lg:w-[104.84px] h-[58.39px] flex justify-center items-center rounded-[13px] hover:scale-[1.02]">
                          <Link
                            href={`https://twitter.com/${person.twitter}`}
                            target="_blank"
                            className="w-full flex gap-1 justify-center items-center"
                          >
                            <TwitterIcon />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </div>
      </Swiper>
      <div className="rounded-lg bg-secondary h-[150px] w-full flex justify-beween items-center px-8">
        <h4 className="w-full font-primary font-bold text-4xl/[34px] text-left text-white">
          Want to be a member?
        </h4>
        <Link
          href="/careers"
          className="w-[300px] h-[60px] font-bold font-primary text-center text-secondary text-[17px]/[21.32px] lg:text-[24px]/[32.11px] xl:text-[22px]/[32px] rounded-[10px] bg-primary flex justify-center items-center gap-1 capitalize px-4"
        >
          Apply now <ArrowUpIcon />
        </Link>
      </div>
    </div>
  )
}
