"use client"
import { ThinArrowForward } from "@/components/SVGs"
import { Box, Button, Divider, Typography } from "@mui/material"
import Link from "next/link"
import { useState } from "react"

const types = [
  "Finance",
  "Marketing",
  "Customer service",
  "HR",
  "Operations",
  "Managements",
  "All",
]
const careers = [
  {
    id: 1,
    name: "Architect",
    description:
      "We need an Architect to help us in presenting design proposals, preparing drawings, specifications and budgets",
    type: "Operations",
  },
  {
    id: 2,
    name: "Real Estate Agent",
    description:
      "We need an Architect to help us in presenting design proposals, preparing drawings, specifications and budgets",
    type: "Operations",
  },
  {
    id: 3,
    name: "Auctioneer",
    description:
      "We need an Architect to help us in presenting design proposals, preparing drawings, specifications and budgets",
    type: "Customer service",
  },
  {
    id: 4,
    name: "Human Resource Manager",
    description:
      "We need an Architect to help us in presenting design proposals, preparing drawings, specifications and budgets",
    type: "HR",
  },
]

export default function CareerPage() {
  const [type, setType] = useState("All")
  const data =
    type === "Finance"
      ? careers?.filter(
          (item: {
            id: number
            name: string
            description: string
            type: string
          }) => item.type === "Finance"
        )
      : type === "Marketing"
      ? careers?.filter(
          (item: {
            id: number
            name: string
            description: string
            type: string
          }) => item.type === "Marketing"
        )
      : type === "Customer service"
      ? careers?.filter(
          (item: {
            id: number
            name: string
            description: string
            type: string
          }) => item.type === "Customer service"
        )
      : type === "HR"
      ? careers?.filter(
          (item: {
            id: number
            name: string
            description: string
            type: string
          }) => item.type === "HR"
        )
      : type === "Operations"
      ? careers?.filter(
          (item: {
            id: number
            name: string
            description: string
            type: string
          }) => item.type === "Operations"
        )
      : type === "Managements"
      ? careers?.filter(
          (item: {
            id: number
            name: string
            description: string
            type: string
          }) => item.type === "Managements"
        )
      : careers
  return (
    <div className="w-full  relative" data-aos="fade-down">
      <Box
        component="section"
        className="w-fullh-full flex flex-col justify-start items-start pb-8 pt-[80px] px-4 lg:mt-0 md:py-[120px] relative gap-8 overflow-hidden"
      >
        <Box
          component="div"
          sx={{
            position: "absolute",
            top: -5,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            filter: "blur(8px)",
            backgroundColor: "#04165880",
            backgroundImage: `linear-gradient(rgba(32, 34, 73, 0.56), rgba(32, 34, 73, 0.56)),url("/images/career-image.jpeg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box className="w-full max-w-[1440px] flex flex-col pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 lg:px-[30px] xl:px-[40px] xxl:px-[96px] relative gap-10">
          <Typography
            variant="h1"
            className="w-full flex flex-col gap-2 text-[#041658] text-[37px]/[46.39px] text-center md:text-left font-normal font-primary uppercase"
            data-aos="fade-right"
          >
            Amore Homes
            <Typography
              variant="caption"
              className="font-primary font-normal text-center md:text-left text-primary text-[64px]/[50.25px] uppercase pl-8"
              data-aos="fade-left"
            >
              Careers
            </Typography>
          </Typography>
          <div
            className="w-full flex flex-wrap justify-center"
            data-aos="fade-up"
          >
            {types.map((item, index) => (
              <Box
                key={index}
                className="w-1/2 md:w-1/4 xl:w-1/7 p-1 md:p-2 xl:p-4"
              >
                <Button
                  onClick={() => setType(item)}
                  className={
                    type === item
                      ? "w-full h-[50px] py-1 rounded-[21px] border-[6px] border-solid border-[#0E0E0E] bg-[#041658] flex justify-center items-center cursor-pointer text-center text-white text-[14.4px]/[25.84px] font-normal font-primary normal-case hover:bg-[#041658] hover:border-[#0E0E0E] p-2"
                      : "w-full h-[50px] py-1 rounded-[21px] border-[6px] border-solid border-white bg-transparent flex justify-center items-center cursor-pointer text-center text-white text-[14.4px]/[25.84px] font-normal font-primary normal-case hover:bg-[#041658] hover:border-[#0E0E0E] p-2"
                  }
                >
                  {item}
                </Button>
              </Box>
            ))}
          </div>
          <Box
            className="w-full flex flex-col gap-5 md:gap-1"
            data-aos="fade-right"
          >
            <Typography
              variant="h2"
              className="text-white font-normal font-primary text-[45px]/[55.07px] lg:text-[43px]/[60.07px] xl:text-[80px]/[100.07px] text-center md:text-left"
            >
              Become Part of Our Team
            </Typography>
            <Typography
              variant="subtitle1"
              className="max-w-[1043px] text-white font-normal font-primary text-[18px]/[22.59px] md:text-[22px]/[27.59px] text-center md:text-left"
            >
              We&apos;re seeking enthusiastic individuals to join us in our
              objective. We value open communication, flat hierarchies, and
              complete ownership and responsibility.
            </Typography>
          </Box>

          <Box className="w-full flex flex-col gap-4" data-aos="fade-up">
            {data?.map(
              (
                career: {
                  id: number
                  name: string
                  description: string
                  type: string
                },
                index
              ) => {
                return (
                  <Box key={index} className="flex flex-col gap-2">
                    <Divider
                      sx={{
                        mt: 1,
                        borderColor: "#FFFFFF",
                        dropShadow: "0px 4px 4px 0px #00000040",
                        filter: "blur(1.5px)",
                      }}
                    />
                    <Box className="w-full flex justify-between">
                      <Typography className="text-white text-[24px]/[32.63px] md:text-[34px]/[42.63px] font-normal font-primary text-left">
                        {career.name}
                      </Typography>
                      <Link href="mailto:info@amorehomesltd.com">
                        <Button
                          endIcon={<ThinArrowForward />}
                          className="text-white text-[20px]/[30.32px] font-normal font-jetBrain text-left normal-case hover:text-primary hover:scale-105 cursor-pointer"
                        >
                          Apply
                        </Button>
                      </Link>
                    </Box>
                    <Typography className="text-white text-[15.2px]/[22.33px] md:text-[20px]/[26.33px] font-normal font-primary text-left">
                      {career.description}
                    </Typography>
                  </Box>
                )
              }
            )}
          </Box>
        </Box>
      </Box>
    </div>
  )
}
