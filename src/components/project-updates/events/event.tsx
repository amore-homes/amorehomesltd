import {
  InformationIcon,
  LikesIcon,
  MessageIcon,
  PeopleIcon,
  ShareIcon,
  SpeakerIcon,
} from "@/components/SVGs"
import { Button, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"
import { TailSpin } from "react-loader-spinner"

export default function EventsPage() {
  const [subscribe, setSubscribe] = React.useState("")
  const [loading, setLoading] = React.useState(false)

  const handleSubscribe = ({ target }: any) => {
    setSubscribe(target.value)
  }
  return (
    <div className="w-full relative flex flex-col gap-[52px]">
      <div className="w-full flex flex-col sm:flex-row gap-20">
        <div className="w-full sm:w-1/2 relative mt-8 sm:mt-4">
          <input
            id="subscribe"
            className={`relative w-full px-6 py-4 rounded-[42.5px] border border-solid border-[#00000080] bg-[#FFFFFF] justify-start items-center gap-3 flex font-inter text-xl/[24.6px] font-normal cursor-text text-[#101928] hover:border-primary focus:outline-none focus:border-primary disabled:bg-[#F5F5F5] disabled:hover:border-[#F5F5F5] disabled:cursor-not-allowed disabled:text-[#98A2B3] placeholder:text-[#B7B7B7]`}
            style={{ boxShadow: "0px 4px 4px 0px #00000040 inset" }}
            value={subscribe}
            type="text"
            placeholder="Enter your email"
            name="subscribe"
            onChange={handleSubscribe}
          />
          <Button
            className="absolute top-0 right-[-25px] sm:right-0 w-[110px] sm:w-[170px] h-[60px] rounded-[42.5px] border-[3px] border-solid border-[#FFFFFF80] text-white font-normal font-primary bg-[#041658] hover:bg-[#2b324b]"
            sx={{ boxShadow: "0px 4px 44px 3px #00000040" }}
          >
            {loading ? (
              <TailSpin
                height="30"
                width="30"
                color={"#FFFFFF"}
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            ) : (
              "Subscribe"
            )}
          </Button>
        </div>
        <div className="w-full sm:w-1/2">
          <Typography
            variant="subtitle1"
            className="text-[#001252E0] text-left font-normal font-primary text-[32px]/[40.13px] mt-1 sm:mt-6"
          >
            Amore Homes Events
          </Typography>
        </div>
      </div>
      <div className="w-full relative flex flex-col sm:flex-row gap-4">
        <div className="w-full max-w-[1098px]">
          <div className="w-full relative flex gap-4">
            <Image
              src="/images/event-1.jpeg"
              width={509}
              height={686}
              alt="Event picture 1"
              className="w-full xl:w-[509px] h-[206px] xl:h-[435px] relative"
            />
            <Image
              src="/images/event-2.jpeg"
              width={509}
              height={686}
              alt="Event picture 1"
              className="w-full xl:w-[509px] h-[206px] xl:h-[435px] relative"
            />
          </div>
        </div>
        <div className="w-full sm:w-[400px] flex flex-col gap-4">
          <div className="w-full relative">
            <Image
              src="/images/event-3.jpeg"
              width={345}
              height={250}
              alt="Event picture 1"
              className="w-full h-[208px] sm:w-[345px] relative"
            />
          </div>
          <div className="w-full relative">
            <Image
              src="/images/event-4.jpeg"
              width={345}
              height={250}
              alt="Event picture 1"
              className="w-full h-[208px] sm:w-[345px] relative"
            />
          </div>
        </div>
        <div className="fixed right-16 flex flex-col left-auto gap-6">
          <div className="cursor-pointer hover:scale-105">
            <MessageIcon />
          </div>
          <div className="cursor-pointer hover:scale-105">
            <LikesIcon />
          </div>
          <div className="cursor-pointer hover:scale-105">
            <ShareIcon />
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
          <div className="w-full sm:w-[400px] flex flex-col gap-3">
            <Image
              src="/images/event-5.jpeg"
              width={321}
              height={250}
              alt="Event news 1"
              className="w-full h-[240px] sm:w-[321px] relative"
            />
            <Typography className="text-[#000000] font-primary font-normal text-[24px]/[30.09px] flex items-center justify-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              illum,
            </Typography>
          </div>
          <div className="w-full sm:w-[400px] flex flex-col gap-3">
            <Image
              src="/images/event-6.jpeg"
              width={321}
              height={250}
              alt="Event picture 1"
              className="w-full h-[240px] sm:w-[321px] relative"
            />
            <Typography className="text-[#000000] font-primary font-normal text-[24px]/[30.09px] flex items-center justify-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              illum,
            </Typography>
          </div>
          <div className="w-full sm:w-[400px] flex flex-col gap-3">
            <Image
              src="/images/event-7.jpeg"
              width={321}
              height={250}
              alt="Event news 1"
              className="w-full h-[240px] sm:w-[321px] relative"
            />
            <Typography className="text-[#000000] font-primary font-normal text-[24px]/[30.09px] flex items-center justify-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              illum,
            </Typography>
          </div>
          <div className="w-full sm:w-[400px] flex flex-col gap-3">
            <Image
              src="/images/event-8.jpeg"
              width={321}
              height={250}
              alt="Event picture 8"
              className="w-full h-[240px] sm:w-[321px] relative"
            />
            <Typography className="text-[#000000] font-primary font-normal text-[24px]/[30.09px] flex items-center justify-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              illum,
            </Typography>
          </div>
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
          <div className="w-full sm:w-1/2 flex flex-col gap-8">
            <Image
              src="/images/event-9.jpeg"
              alt="Event picture 9"
              width={634}
              height={277}
              className="w-full h-full sm:h-[277px] sm:w-[634px] md:w-[684px] relative rounded-[13px]"
            />
            <Image
              src="/images/event-11.jpeg"
              alt="Event picture 10"
              width={634}
              height={277}
              className="w-full h-full sm:h-[277px] sm:w-[634px] md:w-[684px] relative rounded-[13px]"
            />
          </div>
          <div className="w-full  sm:w-1/2 flex flex-col gap-8">
            <Image
              src="/images/event-10.jpeg"
              alt="Event picture 10"
              width={634}
              height={277}
              className="w-full h-full sm:h-[277px] sm:w-[634px] md:w-[684px] relative rounded-[13px]"
            />
            <Image
              src="/images/event-12.jpeg"
              alt="Event picture 12"
              width={634}
              height={277}
              className="w-full h-full sm:h-[277px] sm:w-[634px] md:w-[684px] relative rounded-[13px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
