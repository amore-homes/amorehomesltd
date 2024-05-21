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

export default function BlogPage() {
  const [email, setEmail] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState<boolean>(false)
  const [error, setError] = React.useState<boolean>(false)
  const [message, setMessage] = React.useState<string>("")

  const handleSubscribe = ({ target }: any) => {
    setEmail(target.value)
  }
  async function handleSubmit(data: any) {
    const inputs = {
      email,
    }
    setLoading(true)
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      })
      if (res) {
        setLoading(false)
        setSuccess(true)
        setMessage("Subscription sent successfully")
      }
    } catch (error: any) {
      setLoading(false)
      setError(true)
      setMessage(error)
      console.log("ERROR:", error)
    }
  }
  return (
    <div className="w-full flex flex-col gap-[52px]">
      <div className="w-full flex flex-col sm:flex-row gap-20">
        <div className="w-full sm:w-1/2 relative mt-8 sm:mt-4">
          <input
            id="subscribe"
            className={`relative w-full px-6 py-4 rounded-[42.5px] border border-solid border-[#00000080] bg-[#FFFFFF] justify-start items-center gap-3 flex font-inter text-xl/[24.6px] font-normal cursor-text text-[#101928] hover:border-primary focus:outline-none focus:border-primary disabled:bg-[#F5F5F5] disabled:hover:border-[#F5F5F5] disabled:cursor-not-allowed disabled:text-[#98A2B3] placeholder:text-[#B7B7B7]`}
            style={{ boxShadow: "0px 4px 4px 0px #00000040 inset" }}
            value={email}
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleSubscribe}
          />
          <Button
            className="absolute top-0 right-[-25px] sm:right-0 w-[110px] sm:w-[170px] h-[60px] rounded-[42.5px] border-[3px] border-solid border-[#FFFFFF80] text-white font-normal font-primary bg-[#041658] hover:bg-[#2b324b] cursor-pointer"
            sx={{ boxShadow: "0px 4px 44px 3px #00000040" }}
            onClick={handleSubmit}
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
            data-aos="fade-left"
          >
            Amore Homes Press
          </Typography>
        </div>
      </div>
      <div className="w-full relative flex flex-col sm:flex-row gap-4">
        <div className="w-full max-w-[1098px] relative" data-aos="fade-right">
          <Typography className="absolute left-5 sm:left-10 top-5 sm:top-20 w-[217px] h-[41px] text-white bg-[#CA4B4B] z-50 font-primary font-normal text-[24px]/[30.09px] flex items-center justify-center">
            Featured Story
          </Typography>
          <div className="w-full relative">
            <Image
              src="/images/press-1.jpeg"
              width={1098}
              height={655}
              alt="Press news 1"
              className="w-full xl:w-[1098px] h-[206px] xl:h-[655px] relative rounded-[25px]"
            />
            <Typography className="absolute bottom-0 left-0 right-0 max-w-[1098px] h-[60px] text-[#A9A8A8] bg-[#000000B2] font-primary font-normal text-[26px]/[32.6px] flex items-center justify-start px-4">
              Press Story 1
            </Typography>
          </div>
        </div>
        <div
          className="w-full sm:w-[400px] flex flex-col gap-4"
          data-aos="fade-left"
        >
          <div className="w-full relative">
            <Image
              src="/images/press-2.jpeg"
              width={345}
              height={206}
              alt="Press news 1"
              className="w-full sm:w-[345px] relative rounded-[25px]"
            />
            <Typography className="absolute bottom-0 left-0 right-0 max-w-[345px] h-[60px] text-[#A9A8A8] bg-[#000000B2] font-primary font-normal text-[26px]/[32.6px] flex items-center justify-start px-4">
              Press Story 2
            </Typography>
          </div>
          <div className="w-full relative">
            <Image
              src="/images/press-3.jpeg"
              width={345}
              height={206}
              alt="Press news 1"
              className="w-full sm:w-[345px] relative rounded-[25px]"
            />
            <Typography className="absolute bottom-0 left-0 right-0 max-w-[345px] h-[60px] text-[#A9A8A8] bg-[#000000B2] font-primary font-normal text-[26px]/[32.6px] flex items-center justify-start px-4">
              Press Story 3
            </Typography>
          </div>
          <div className="w-full relative">
            <Image
              src="/images/press-4.jpeg"
              width={345}
              height={206}
              alt="Press news 1"
              className="w-full sm:w-[345px] relative rounded-[25px]"
            />
            <Typography className="absolute bottom-0 left-0 right-0 max-w-[345px] h-[60px] text-[#A9A8A8] bg-[#000000B2] font-primary font-normal text-[26px]/[32.6px] flex items-center justify-start px-4">
              Press Story 4
            </Typography>
          </div>
        </div>
        <div className="fixed left-auto right-2 md:right-12 flex flex-col justify-end items-end gap-6 ">
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
          data-aos="fade-up"
        >
          Top Stories
        </Typography>
        <div
          className="w-full flex flex-col sm:flex-row gap-4"
          data-aos="zoom-in-up"
        >
          <div className="w-full sm:w-[400px] flex flex-col gap-3">
            <div className="w-full relative">
              <Image
                src="/images/press-5.jpeg"
                width={345}
                height={206}
                alt="Press news 1"
                className="w-full sm:w-[345px] relative rounded-[25px]"
              />
              <Typography className="absolute bottom-0 left-0 right-0 max-w-[345px] h-[60px] text-[#A9A8A8] bg-[#000000B2] font-primary font-normal text-[26px]/[32.6px] flex items-center justify-start px-4">
                Press Story 5
              </Typography>
            </div>
            <Typography className="text-[#000000] font-primary font-normal text-[24px]/[30.09px] flex items-center justify-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              illum,
            </Typography>
          </div>
          <div className="w-full sm:w-[400px] flex flex-col gap-3">
            <div className="w-full relative">
              <Image
                src="/images/press-6.jpeg"
                width={345}
                height={206}
                alt="Press news 1"
                className="w-full sm:w-[345px] relative rounded-[25px]"
              />
              <Typography className="absolute bottom-0 left-0 right-0 max-w-[345px] h-[60px] text-[#A9A8A8] bg-[#000000B2] font-primary font-normal text-[26px]/[32.6px] flex items-center justify-start px-4">
                Press Story 6
              </Typography>
            </div>
            <Typography className="text-[#000000] font-primary font-normal text-[24px]/[30.09px] flex items-center justify-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              illum,
            </Typography>
          </div>
          <div className="w-full sm:w-[400px] flex flex-col gap-3">
            <div className="w-full relative">
              <Image
                src="/images/press-7.jpeg"
                width={345}
                height={206}
                alt="Press news 1"
                className="w-full sm:w-[345px] relative rounded-[25px]"
              />
              <Typography className="absolute bottom-0 left-0 right-0 max-w-[345px] h-[60px] text-[#A9A8A8] bg-[#000000B2] font-primary font-normal text-[26px]/[32.6px] flex items-center justify-start px-4">
                Press Story 7
              </Typography>
            </div>
            <Typography className="text-[#000000] font-primary font-normal text-[24px]/[30.09px] flex items-center justify-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              illum,
            </Typography>
          </div>
          <div className="w-full sm:w-[400px] flex flex-col gap-3">
            <div className="w-full relative">
              <Image
                src="/images/press-8.jpeg"
                width={345}
                height={206}
                alt="Press news 1"
                className="w-full sm:w-[345px] relative rounded-[25px]"
              />
              <Typography className="absolute bottom-0 left-0 right-0 max-w-[345px] h-[60px] text-[#A9A8A8] bg-[#000000B2] font-primary font-normal text-[26px]/[32.6px] flex items-center justify-start px-4">
                Press Story 8
              </Typography>
            </div>
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
          data-aos="fade-up"
        >
          Latest Stories
        </Typography>
        <div className="w-full flex-col sm:flex-row flex gap-1">
          <div
            className="w-full sm:w-2/3 flex flex-col gap-8"
            data-aos="fade-right"
          >
            <div
              className="w-full max-w-[669px] bg-[#EBEBEB] rounded-[4px] flex flex-col gap-2 px-4 py-4"
              style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
            >
              <div className="w-full flex gap-6 ">
                <Typography className="text-[#041658] font-primary font-normal text-[30px]/[37.62px] text-left ">
                  Sustainability
                </Typography>
                <div className="w-[45px] h-[45px] bg-[#D9D9D9] flex justify-center items-center rounded-full">
                  <PeopleIcon />
                </div>
              </div>
              <Typography className="text-[#000000] font-primary font-normal text-[24px]/[30.09px] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </Typography>
            </div>
            <div
              className="w-full max-w-[669px] bg-[#EBEBEB] rounded-[4px] flex flex-col gap-2 px-4 py-4"
              style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
            >
              <div className="w-full flex gap-6 ">
                <Typography className="text-[#041658] font-primary font-normal text-[30px]/[37.62px] text-left">
                  Technology
                </Typography>
                <div className="w-[45px] h-[45px] bg-[#D9D9D9] flex justify-center items-center rounded-full">
                  <PeopleIcon />
                </div>
              </div>
              <Typography className="text-[#000000] font-primary font-normal text-[24px]/[30.09px] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </Typography>
            </div>
            <div
              className="w-full max-w-[669px] bg-[#EBEBEB] rounded-[4px] flex flex-col gap-2 px-4 py-4"
              style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
            >
              <div className="w-full flex gap-6 ">
                <Typography className="text-[#041658] font-primary font-normal text-[30px]/[37.62px] text-left ">
                  Buildings
                </Typography>
                <div className="w-[45px] h-[45px] bg-[#D9D9D9] flex justify-center items-center rounded-full">
                  <PeopleIcon />
                </div>
              </div>
              <Typography className="text-[#000000] font-primary font-normal text-[24px]/[30.09px] text-left ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </Typography>
            </div>
          </div>
          <div
            className="w-full sm:w-1/3 flex flex-col gap-6"
            data-aos="fade-left"
          >
            <div className="w-full relative">
              <Image
                src="/images/press-9.jpeg"
                width={634}
                height={277}
                alt="Press news 1"
                className="w-full sm:w-[634px] relative rounded-[13px]"
              />
              <Typography className="w-full absolute bottom-0 left-0 right-0 max-w-[634px] h-[60px] text-[#A9A8A8] bg-[#000000B2] font-primary font-normal text-[26px]/[32.6px] flex items-center justify-start px-4">
                Press Story 9
              </Typography>
            </div>
            <div className="w-full md:w-[634px] relative">
              <Image
                src="/images/press-10.jpeg"
                width={634}
                height={277}
                alt="Press news 1"
                className="w-full sm:w-[634px] relative rounded-[13px]"
              />
              <Typography className="w-full absolute bottom-0 left-0 right-0 max-w-[634px] h-[60px] text-[#A9A8A8] bg-[#000000B2] font-primary font-normal text-[26px]/[32.6px] flex items-center justify-start px-4">
                Press Story 10
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
