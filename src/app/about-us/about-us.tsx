"use client"
import AboutUsFAQs from "@/components/FAQs/about-us"
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/components/SVGs"
import { moveItemToFront } from "@/components/data"
import MissionVision from "@/components/mission-and-vision"
import { Grid } from "@mui/material"
import Image from "next/image"
import Link from "next/link"

export default function AboutUs({
  data,
  videoId,
  mission,
  vision,
  coreValue,
  moreInformation,
}: any) {
  const sortedItems = moveItemToFront(data, "Chief Executive Officer")

  return (
    <div className="w-full h-full flex flex-col justify-start items-start pb-8 pt-[80px] px-4 lg:mt-0 md:py-[60px] relative gap-8 overflow-hidden">
      <div
        className="w-full bg-[#F8F8F8] flex flex-col pb-4 pt-[40px] md:py-[40px] xl:py-[60px] px-2 lg:px-[30px] xl:px-[40px] xxl:px-[96px] relative gap-10"
        data-aos="fade-down"
      >
        <h1
          className="w-full flex flex-col gap-2 text-secondary text-[37px]/[46.39px] text-center md:text-left font-normal font-primary uppercase"
          data-aos="fade-right"
        >
          Amore Homes
          <span
            className="font-primary font-normal text-center md:text-left text-primary text-[30px]/[30.25px] md:text-[60px]/[50.25px] uppercase pl-8"
            data-aos="fade-left"
          >
            The Team
          </span>
        </h1>
        <h2
          className="text-secondary font-normal font-primary text-[25px]/[30.07px] lg:text-[43px]/[60.07px] xl:text-[40px]/[52.73px] text-center md:text-left"
          data-aos="fade-up"
        >
          Meet Our Team of Experts
        </h2>
        <div
          className="w-full flex flex-col justify-between gap-8"
          data-aos="zoom-in"
        >
          <Grid container rowSpacing={4} columnSpacing={2}>
            {sortedItems?.map((person: any, index: number) => {
              return (
                <Grid key={`type-${index}`} item xs={12} sm={6} md={4} xl={3}>
                  <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col gap-4 rounded-[40px] cursor-pointer">
                      <Image
                        src={
                          person?.image?.fields?.file?.url
                            ? `https:${person?.image?.fields?.file?.url}`
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

                        <div className="w-full flex flex-col gap-2">
                          <div className="w-full flex gap-2 h-4 mt-1">
                            {person.email && (
                              <div className="flex gap-1 items-center border-r-2 border-grey-text pr-3">
                                <EmailIcon />
                                <p className="block text-secondary text-[14px]/[24px] font-normal font-primary text-left m-0">
                                  {person.email}
                                </p>
                              </div>
                            )}
                            {person.email && (
                              <div className="flex gap-1 items-center">
                                <PhoneIcon />
                                <p className="block text-secondary text-[14px]/[24px] font-normal font-primary text-left m-0">
                                  {person.phoneNumber}
                                </p>
                              </div>
                            )}
                          </div>
                          <div className="w-[100px] flex gap-3">
                            {/* facebook */}
                            <div className="flex justify-center items-center rounded-[13px] hover:scale-[1.02]">
                              <Link
                                href={`https://www.facebook.com/${person.facebook}`}
                                target="_blank"
                                className="w-full flex gap-1 justify-center items-center"
                              >
                                <FacebookIcon className="w-[18px] h-[18px]" />
                              </Link>
                            </div>
                            {/* Instagram */}
                            <div className="flex justify-center items-center rounded-[13px] hover:scale-[1.02]">
                              <Link
                                href={`https://www.instagram.com/${person.instagram}`}
                                target="_blank"
                                className="w-full flex gap-1 justify-center items-center"
                              >
                                <InstagramIcon className="w-[18px] h-[18px]" />
                              </Link>
                            </div>
                            {/* Twitter */}
                            <div className="flex justify-center items-center rounded-[13px] hover:scale-[1.02]">
                              <Link
                                href={`https://twitter.com/${person.twitter}`}
                                target="_blank"
                                className="w-full flex gap-1 justify-center items-center"
                              >
                                <TwitterIcon className="w-[14px] h-[14px]" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </div>
      </div>
      <div className="w-full flex flex-col gap-8 mt-2 md:mt-8">
        <div
          className="w-full h-full md:h-[650px] flex px-12 xxl:px-[370px] bg-white"
          data-aos="fade-left"
        >
          <iframe
            className="inset-0 w-full h-full lg:h-[650px] rounded-2xl border-none m-0 p-0 md:p-0 aspect-video bg-white"
            src={`https://www.youtube.com/embed/${videoId?.[0].videoId}?controls=0&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Famorehomesltd.com&widgetid=1`}
            title="beautiful house"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        {/* Mission and vision */}
        <MissionVision
          mission={mission}
          vision={vision}
          coreValue={coreValue}
        />
        {/* *** FAQs *** */}

        <AboutUsFAQs data={moreInformation} />
      </div>
    </div>
  )
}
