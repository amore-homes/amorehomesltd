"use client"
import { PersonIcon } from "@/components/SVGs"
import MissionIcon from "@/components/lottie/mission"
import ValuesIcon from "@/components/lottie/values"
import VisionIcon from "@/components/lottie/vision"
import { Avatar, Box, Button, Grid, Typography } from "@mui/material"

const people = [
  {
    id: 1,
    name: "Musa Ahmadu",
    role: "Executive director",
    picture: "",
  },
  {
    id: 2,
    name: "Kelechi Moses",
    role: "Architect",
    picture: "",
  },
  {
    id: 3,
    name: "Muhammed Isa",
    role: "Auctioneer",
    picture: "",
  },
  {
    id: 4,
    name: "Abdullahi Garba",
    role: "Director",
    picture: "",
  },
  {
    id: 5,
    name: "Kate Middleton",
    role: "Human Resource manager",
    picture: "",
  },
  {
    id: 6,
    name: "Frank Mba",
    role: "Real Estate Agent",
    picture: "",
  },
]

export default function AboutUsPage() {
  return (
    <div className="w-full  relative" data-aos="fade-down">
      <Box
        component="section"
        className="w-fullh-full flex flex-col justify-start items-start pb-8 pt-[80px] px-4 lg:mt-0 md:py-[60px] relative gap-8 overflow-hidden"
      >
        <Box className="w-full max-w-[1440px] flex flex-col pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 lg:px-[30px] xl:px-[40px] xxl:px-[96px] relative gap-10">
          <Typography
            variant="h1"
            className="w-full flex flex-col gap-2 text-[#041658] text-[37px]/[46.39px] text-center md:text-left font-normal font-primary uppercase"
            data-aos="fade-right"
          >
            Amore Homes
            <Typography
              variant="caption"
              className="font-primary font-normal text-center md:text-left text-primary text-[34px]/[30.25px] md:text-[64px]/[50.25px] uppercase pl-8"
              data-aos="fade-left"
            >
              The Team
            </Typography>
          </Typography>
          <Typography
            variant="h2"
            className="text-[#041658] font-normal font-primary text-[25px]/[30.07px] lg:text-[43px]/[60.07px] xl:text-[48px]/[52.73px] text-center md:text-left"
            data-aos="fade-up"
          >
            Meet Our Team of Experts
          </Typography>
          <Box className="w-full flex flex-col md:flex-row gap-4">
            <Box
              className="w-full md:w-1/2 flex flex-col gap-10"
              data-aos="zoom-in"
            >
              <Grid container columnSpacing={5} rowSpacing={3}>
                {people?.map(
                  (
                    person: {
                      id: number
                      name: string
                      role: string
                      picture: string
                    },
                    index
                  ) => {
                    return (
                      <Grid key={index} item xs={6} sm={4}>
                        <Box className="w-full flex flex-col gap-2">
                          <Avatar
                            src=""
                            alt={`${person.name} picture`}
                            className="w-[150px] h-[150px] bg-[#041658]"
                          >
                            <PersonIcon />
                          </Avatar>
                          <Box className="w-full flex flex-col">
                            <Typography className="text-[#000000] text-[18px]/[24px] md:text-[20px]/[26.63px] font-normal font-primary text-center">
                              {person.name}
                            </Typography>
                            <Typography className="text-[#041658] text-[15.2px]/[22.33px] md:text-[18px]/[24.33px] font-normal font-primary text-center">
                              {person.role}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    )
                  }
                )}
              </Grid>
            </Box>

            <Box
              className="w-full md:w-1/2 flex justify-center items-center"
              data-aos="fade-left"
            >
              <div className="w-full md:w-1/2 h-full relative flex">
                <iframe
                  className="inset-0 w-full h-full  xl:h-[320px] xxl:h-[395px] md:w-[612px] xl:w-[380px] xxl:w-[671px] md:h-full rounded-2xl border-none m-0 md:p-0 aspect-video"
                  src={`https://www.youtube.com/embed/_L6jEtMK8No?autoplay=0&color=white&fs=0&rel=0`}
                  title="Wall street sense"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </Box>
          </Box>
          <Box
            component="div"
            className="w-full flex flex-col gap-5 md:gap-10 mt-10 sm:mt-5"
          >
            <Typography
              variant="h2"
              className="text-[#041658] font-normal font-primary text-[35px]/[35.07px] lg:text-[43px]/[60.07px] xl:text-[48px]/[52.73px] text-center md:text-left"
            >
              Mission and Values
            </Typography>

            <Box
              component="div"
              className="w-full flex flex-col md:flex-row pb-[40px] gap-8"
            >
              <Box
                className="w-full md:w-1/3 border border-solid border-border flex flex-col gap-2 px-4 py-4 rounded-lg"
                sx={{
                  boxShadow: "11px 17px 13px 0px #00000040",
                }}
                data-aos="fade-right"
              >
                <Box className="w-full flex gap-2 items-center">
                  <MissionIcon />{" "}
                  <Typography
                    variant="h2"
                    className="text-primary font-normal font-primary text-[25px]/[28px] text-center md:text-left"
                  >
                    Mission
                  </Typography>
                </Box>

                <Typography className="font-normal font-primary text-[#000000] text-[20px]/[28px] text-left">
                  To provide premium residences that suits the demand of our
                  clientele through sustainable measures.
                </Typography>
              </Box>
              <Box
                className="w-full md:w-1/3 border border-solid border-border flex flex-col gap-2 px-4 py-4 rounded-lg"
                sx={{
                  boxShadow: "11px 17px 13px 0px #00000040",
                }}
                data-aos="fade-up"
              >
                <Box className="w-full flex gap-2 items-center">
                  <VisionIcon />
                  <Typography
                    variant="h2"
                    className="text-primary font-normal font-primary text-[25px]/[28px] text-center md:text-left"
                  >
                    Vision
                  </Typography>
                </Box>
                <Typography className="font-normal font-primary text-[#000000] text-[20px]/[28px] text-left">
                  To be the leading real estate partner providing the best
                  communal living experience while fostering family friendly
                  lifestyle in Nigeria.
                </Typography>
              </Box>

              <Box
                className="w-full md:w-1/3 border border-solid border-border flex flex-col gap-2 px-4 py-4 rounded-lg"
                sx={{
                  boxShadow: "11px 17px 13px 0px #00000040",
                }}
                data-aos="fade-left"
              >
                <Box className="w-full flex gap-2 items-center">
                  <ValuesIcon />
                  <Typography
                    variant="h2"
                    className="text-primary font-normal font-primary text-[25px]/[28px] text-center md:text-left"
                  >
                    Core values
                  </Typography>
                </Box>
                <Box component="ol" className="m-0">
                  <Box
                    component="li"
                    className="font-normal font-primary text-[#000000] text-[20px]/[28px] text-left"
                  >
                    Efficiency
                  </Box>
                  <Box
                    component="li"
                    className="font-normal font-primary text-[#000000] text-[20px]/[28px] text-left"
                  >
                    Passion
                  </Box>
                  <Box
                    component="li"
                    className="font-normal font-primary text-[#000000] text-[20px]/[28px] text-left"
                  >
                    Partnership
                  </Box>
                  <Box
                    component="li"
                    className="font-normal font-primary text-[#000000] text-[20px]/[28px] text-left"
                  >
                    Innovation
                  </Box>
                  <Box
                    component="li"
                    className="font-normal font-primary text-[#000000] text-[20px]/[28px] text-left"
                  >
                    Customer centric
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
