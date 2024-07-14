import {
  InformationIcon,
  LikesIcon,
  MessageIcon,
  SpeakerIcon,
} from "@/components/SVGs"
import Nodata from "@/components/lottie/no-data"
import { Typography } from "@mui/material"
import Image from "next/image"
import SharePostLink from "../blog/share"
import SubscribePage from "./subscribe"

export default function EventsPage({ data, topEvents, latestEvents }: any) {
  const leftSidePictures = data?.filter((item: any) => item.tag === "left")
  const rightSidePictures = data?.filter((item: any) => item.tag === "right")

  return (
    <div className="w-full relative flex flex-col gap-[52px]">
      <div className="w-full flex flex-col sm:flex-row gap-20">
        <SubscribePage />
        <h4 className="text-[#001252E0] text-left font-normal font-primary text-[32px]/[40.13px] mt-1 sm:mt-6">
          Amore Homes Events
        </h4>
      </div>
      <div className="w-full relative flex flex-col sm:flex-row gap-4">
        <div className="w-full">
          <div className="w-full relative flex flex-col md:flex-row gap-4">
            {leftSidePictures?.length !== 0 ? (
              leftSidePictures?.map((pic: any, index: number) => {
                return (
                  <Image
                    key={`Event picture - ${index}`}
                    src={`https:${pic.image?.[0].fields.file.url}`}
                    alt={pic.eventPictures}
                    width={pic.image?.[0].fields.file.details.image.width}
                    height={pic.image?.[0].fields.file.details.image.height}
                    quality={100}
                    className={`w-full h-h-[206px] xl:h-[435px] sm:w-[${pic.image?.[0].fields.file.details.image.width}px] relative rounded-[25px]`}
                  />
                )
              })
            ) : (
              <Nodata message="No event pictures available on the right" />
            )}
          </div>
        </div>
        <div className="w-full sm:w-[400px] flex flex-col gap-4 max-h-[650px] overflow-scroll">
          {rightSidePictures?.length !== 0 ? (
            rightSidePictures?.map((pic: any, index: number) => {
              return (
                <div
                  className="w-full relative"
                  key={`Event picture - ${index}`}
                >
                  <Image
                    src={`https:${pic.image?.[0].fields.file.url}`}
                    alt={pic.eventPictures}
                    width={pic.image?.[0].fields.file.details.image.width}
                    height={pic.image?.[0].fields.file.details.image.height}
                    quality={100}
                    className={`w-full h-full sm:h-[206px] sm:w-[${pic.image?.[0].fields.file.details.image.width}px] relative rounded-[25px]`}
                  />
                </div>
              )
            })
          ) : (
            <Nodata message="No event picture on the right available" />
          )}
        </div>

        <div className="fixed left-auto right-2 md:right-12 flex flex-col gap-6">
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
      <div className="w-full flex flex-col gap-6">
        <Typography
          variant="subtitle1"
          className="text-[#001252E0] text-left font-normal font-primary text-[32px]/[40.13px]"
        >
          Top Events
        </Typography>
        <div className="w-full flex flex-col sm:flex-row gap-8">
          {topEvents?.length !== 0 ? (
            topEvents?.map((event: any, index: number) => {
              return (
                <div
                  className="w-full sm:w-[400px] flex flex-col gap-3"
                  key={`Top event - ${index}`}
                >
                  <div className="w-full relative">
                    <Image
                      src={`https:${event.images.fields.file.url}`}
                      alt={event.description}
                      width={event.images.fields.file.details.image.width}
                      height={event.images.fields.file.details.image.height}
                      quality={100}
                      className={`w-full h-full sm:h-[250px] sm:w-[${event.images.fields.file.details.image.width}px] relative rounded-[25px]`}
                    />
                  </div>
                  <p className="w-full text-left text-[#000000] font-primary font-normal text-[24px]/[30.09px] flex items-center justify-start mt-1">
                    {event.description}
                  </p>
                </div>
              )
            })
          ) : (
            <Nodata message="No top story available" />
          )}
        </div>
      </div>
      <div className="w-full flex flex-col gap-6">
        <Typography
          variant="subtitle1"
          className="text-[#001252E0] text-left font-normal font-primary text-[32px]/[40.13px]"
        >
          Latest Events
        </Typography>
        <div className="w-full flex-col sm:flex-row flex gap-20">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
            {latestEvents?.length !== 0 ? (
              latestEvents?.map((pic: any, index: number) => {
                return (
                  <Image
                    key={`Event picture - ${index}`}
                    src={`https:${pic.images?.[0].fields.file.url}`}
                    alt={pic.name}
                    width={pic.images?.[0].fields.file.details.image.width}
                    height={pic.images?.[0].fields.file.details.image.height}
                    quality={100}
                    className={`w-full h-h-[206px] xl:h-[277px] sm:w-[${pic.images?.[0].fields.file.details.image.width}px] relative rounded-[25px]`}
                  />
                )
              })
            ) : (
              <Nodata message="No event pictures available on the right" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
