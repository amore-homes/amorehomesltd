"use client"
import {
  InformationIcon,
  LikesIcon,
  MessageIcon,
  PeopleIcon,
  SpeakerIcon,
} from "@/components/SVGs"
import Nodata from "@/components/lottie/no-data"
import Image from "next/image"
import Link from "next/link"
import SharePostLink from "./share"

export default function BlogPage({ shortStories, data }: any) {
  const pressStory = data?.filter((item: any) => item.tag === "pressStory")
  const featuredStory = data?.filter(
    (item: any) => item.tag === "featuredStory"
  )
  const latestStories = data?.filter((item: any) => item.tag === "latestStory")
  const topStories = data?.filter((item: any) => item.tag === "topStory")

  return (
    <div className="w-full flex flex-col gap-[52px]">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full relative flex flex-col sm:flex-row gap-4 justify-between">
          <div className="w-full relative cursor-pointer" data-aos="fade-right">
            <Link href={`/project-updates/blogs/${featuredStory?.[0]?.slug}`}>
              {featuredStory.length !== 0 ? (
                <>
                  <p className="absolute left-5 sm:left-10 top-5 sm:top-20 w-[217px] h-[41px] text-white bg-[#CA4B4B] z-50 font-primary font-normal text-[24px]/[30.09px] flex items-center justify-center">
                    Featured Story
                  </p>
                  <Image
                    src={`https:${featuredStory?.[0].images.fields.file.url}`}
                    alt={featuredStory?.[0]?.title}
                    width={
                      featuredStory?.[0].images.fields.file.details.image.width
                    }
                    height={
                      featuredStory?.[0].images.fields.file.details.image.height
                    }
                    quality={100}
                    className={`w-full xl:w-[${featuredStory?.[0].images.fields.file.details.image?.width}] h-[206px] xl:h-[655px] relative rounded-[25px]`}
                  />
                  <div className="w-full absolute bottom-0 h-[60px] flex items-center justify-start bg-[#000000B2]">
                    <p className="w-full text-[#A9A8A8] font-primary font-normal text-[26px]/[32.6px] overflow-hidden text-nowrap text-ellipsis px-4">
                      {featuredStory?.[0]?.title}
                    </p>
                  </div>
                </>
              ) : (
                <Nodata message="No featured story data available" />
              )}
            </Link>
          </div>
          <div
            className="flex flex-col gap-4 max-h-[650px] overflow-scroll"
            data-aos="fade-left"
          >
            {pressStory.lenght !== 0 ? (
              pressStory?.map((press: any, index: number) => {
                return (
                  <Link
                    className="w-full relative"
                    key={`Press story - ${index}`}
                    href={`/project-updates/blogs/${press.slug}`}
                  >
                    <Image
                      src={`https:${press.images.fields.file.url}`}
                      alt={press.description}
                      width={press.images.fields.file.details.image.width}
                      height={press.images.fields.file.details.image.height}
                      quality={100}
                      className={`w-full h-full sm:h-[206px] sm:w-[${press.images.fields.file.details.image.width}px] relative rounded-[25px]`}
                    />
                    <div className="w-full absolute bottom-0 h-[60px] flex items-center justify-start bg-[#000000B2]">
                      <p className="w-full max-w-[345px] text-[#A9A8A8] font-primary font-normal text-[26px]/[32.6px] overflow-hidden text-nowrap text-ellipsis px-4">
                        {press.description}
                      </p>
                    </div>
                  </Link>
                )
              })
            ) : (
              <Nodata message="No press data available" />
            )}
          </div>
        </div>
        <div className="fixed right-2 md:right-2 xxl:right-8 flex flex-col gap-6 z-50">
          <div className="cursor-pointer hover:scale-105">
            <MessageIcon />
          </div>
          <div className="cursor-pointer hover:scale-105">
            <LikesIcon />
          </div>
          <div className="cursor-pointer hover:scale-105">
            <SharePostLink />
          </div>
          <div className="cursor-pointer hover:scale-105">
            <SpeakerIcon />
          </div>
          <div className="cursor-pointer hover:scale-105">
            <InformationIcon />
          </div>
        </div>
      </div>

      {/* //TOP STORIES */}
      <div className="w-full flex flex-col gap-8">
        <p
          className="text-[#001252E0] text-left font-normal font-primary text-[32px]/[40.13px]"
          data-aos="fade-up"
        >
          Top Stories
        </p>
        <div
          className="w-full flex flex-col sm:flex-row gap-8 justify-between"
          data-aos="zoom-in-up"
        >
          {topStories?.length !== 0 ? (
            topStories?.map((story: any, index: number) => {
              return (
                <Link
                  className="w-full relative"
                  key={`Top story - ${index}`}
                  href={`/project-updates/blogs/${story.slug}`}
                >
                  <div className="w-full relative">
                    <Image
                      src={`https:${story.images.fields.file.url}`}
                      alt={story.description}
                      width={story.images.fields.file.details.image.width}
                      height={story.images.fields.file.details.image.height}
                      quality={100}
                      className={`w-full h-full sm:h-[250px] sm:w-[${story.images.fields.file.details.image.width}px] relative rounded-[25px]`}
                    />

                    <div className="w-full absolute bottom-0 h-[60px] flex items-center justify-start bg-[#000000B2]">
                      <p className="w-full max-w-[345px] text-[#A9A8A8] font-primary font-normal text-[26px]/[32.6px] overflow-hidden text-nowrap text-ellipsis px-4">
                        {story.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#000000] font-primary font-normal text-[24px]/[30.09px] flex items-center justify-start mt-1">
                    {story.description}
                  </p>
                </Link>
              )
            })
          ) : (
            <Nodata message="No top story available" />
          )}
        </div>
      </div>
      {/* //LATEST STORIES */}
      <div className="w-full flex flex-col gap-6">
        <p
          className="text-[#001252E0] text-left font-normal font-primary text-[32px]/[40.13px]"
          data-aos="fade-up"
        >
          Latest Stories
        </p>
        <div className="w-full flex-col sm:flex-row flex gap-4 md:gap-12 justify-between">
          <div
            className="w-full md:w-[669px] flex flex-col gap-8"
            data-aos="fade-right"
          >
            {shortStories.length !== 0 ? (
              shortStories?.map((story: any, index: number) => {
                return (
                  <div
                    key={`short story-${index}`}
                    className="w-full bg-[#EBEBEB] rounded-[4px] flex flex-col gap-2 px-4 py-4 shadow-[0px_2px_2px_0px_#00000040]"
                  >
                    <div className="w-full flex gap-6 ">
                      <p className="text-secondary font-primary font-normal text-[30px]/[37.62px] text-left">
                        {story.title}
                      </p>
                      <div className="w-[45px] h-[45px] bg-[#D9D9D9] flex justify-center items-center rounded-full">
                        <PeopleIcon />
                      </div>
                    </div>
                    <p className="text-[#000000] font-primary font-normal text-[24px]/[30.09px] text-justify ">
                      {story.story}
                    </p>
                  </div>
                )
              })
            ) : (
              <Nodata message="No story available" />
            )}
          </div>
          <div className="flex flex-col gap-8" data-aos="fade-left">
            {latestStories?.length !== 0 ? (
              latestStories?.map((story: any, index: number) => {
                return (
                  <Link
                    className="w-full relative"
                    key={`latest story - ${index}`}
                    href={`/project-updates/blogs/${story.slug}`}
                  >
                    <Image
                      src={`https:${story.images.fields.file.url}`}
                      alt={story.description}
                      width={story.images.fields.file.details.image.width}
                      height={story.images.fields.file.details.image.height}
                      quality={100}
                      className={`w-full h-full sm:h-[277px] sm:w-[704px] relative rounded-[25px]`}
                    />
                    <div className="w-full absolute bottom-0 h-[60px] flex items-center justify-start bg-[#000000B2]">
                      <p className="w-full max-w-[345px] text-[#A9A8A8] font-primary font-normal text-[26px]/[32.6px] overflow-hidden text-nowrap text-ellipsis px-4">
                        {story.title}
                      </p>
                    </div>
                  </Link>
                )
              })
            ) : (
              <Nodata message="No latest news" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
