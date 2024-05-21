"use client"
import AboutUsFAQs from "@/components/FAQs/about-us"
import { PersonIcon } from "@/components/SVGs"
import MissionIcon from "@/components/lottie/mission"
import ValuesIcon from "@/components/lottie/values"
import VisionIcon from "@/components/lottie/vision"
import { Avatar, Box, Grid, Typography } from "@mui/material"

const people = [
  {
    id: 1,
    name: "Engr. Shehu Abubakar Sani",
    role: "Chief Executive Officer",
    picture: "/images/amorehomes-ceo.jpeg",
  },
  {
    id: 2,
    name: "Lawal Sa’adatu Kuki Esq.",
    role: "Manager Finance &Admin",
    picture: "/images/amore-md-finance.jpeg",
  },
  {
    id: 3,
    name: "Ridwan Abdulrahman",
    role: "Contract and Procurement Officer",
    picture: "/images/amorehomes-C&P.jpeg",
  },
  {
    id: 4,
    name: "Muhammed Hayatu Yunusa",
    role: "Project Manager",
    picture: "/images/amore-homes-PM.jpeg",
  },
  {
    id: 5,
    name: "Muhammad Awwal Shafiu",
    role: "Project Architect",
    picture: "/images/amorehomes-PA.jpeg",
  },
  {
    id: 6,
    name: "Muazu Umar Idris",
    role: "Project manager",
    picture: "/images/amore-PM.jpeg",
  },
  {
    id: 7,
    name: "George Jane Telema",
    role: "Investment Advisor",
    picture: "/images/Amore-IA.jpeg",
  },
]

export default function AboutUsPage() {
  return (
    <div className="w-full  relative" data-aos="fade-down">
      <Box
        component="section"
        className="w-fullh-full flex flex-col justify-start items-start pb-8 pt-[80px] px-4 lg:mt-0 md:py-[60px] relative gap-8 overflow-hidden"
      >
        <Box className="w-full max-w-[1500px] flex flex-col pb-4 pt-[40px] md:py-[40px] xl:py-[60px] px-2 lg:px-[30px] xl:px-[40px] xxl:px-[96px] relative gap-10">
          <Typography
            variant="h1"
            className="w-full flex flex-col gap-2 text-[#041658] text-[37px]/[46.39px] text-center md:text-left font-normal font-primary uppercase"
            data-aos="fade-right"
          >
            Amore Homes
            <Typography
              variant="caption"
              className="font-primary font-normal text-center md:text-left text-primary text-[30px]/[30.25px] md:text-[60px]/[50.25px] uppercase pl-8"
              data-aos="fade-left"
            >
              The Team
            </Typography>
          </Typography>
          <Typography
            variant="h2"
            className="text-[#041658] font-normal font-primary text-[25px]/[30.07px] lg:text-[43px]/[60.07px] xl:text-[40px]/[52.73px] text-center md:text-left"
            data-aos="fade-up"
          >
            Meet Our Team of Experts
          </Typography>
          <Box className="w-full flex flex-col lg:flex-row gap-6">
            <Box className="w-full lg:w-1/2 flex" data-aos="zoom-in">
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
                            src={person.picture}
                            alt={`${person.name} picture`}
                            className="w-[150px] h-[150px] bg-[#041658]"
                          >
                            <PersonIcon />
                          </Avatar>
                          <Box className="w-full flex flex-col">
                            <Typography className="text-[#000000] text-[18px]/[24px] md:text-[16px]/[26px] font-normal font-primary text-center">
                              {person.name}
                            </Typography>
                            <Typography className="text-[#041658] text-[15.2px]/[22.33px] md:text-[14px]/[24px] font-normal font-primary text-center">
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
              className="relative w-full lg:w-1/2 flex  px-12 xxl:px-[100px]"
              data-aos="fade-left"
            >
              <iframe
                className="inset-0 w-full h-full lg:h-[395px] lg:w-[415px] xl:w-[505px] xxl:w-[671px] rounded-2xl border-none m-0 md:p-0 aspect-video"
                src={`https://www.youtube.com/embed/_L6jEtMK8No?autoplay=0&color=white&fs=0&rel=0`}
                title="beautiful house"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </Box>
          </Box>
          {/* Mission and vision */}
          <Box
            component="div"
            className="w-full flex flex-col gap-5 xl:gap-10 py-5 sm:py-5"
          >
            <Typography
              variant="h2"
              className="text-[#041658] font-normal font-primary text-[35px]/[35.07px] lg:text-[43px]/[60.07px] xl:text-[48px]/[52.73px] text-center md:text-left"
            >
              Mission and Values
            </Typography>

            <Box
              component="div"
              className="w-full flex flex-col lg:flex-row pb-[40px] gap-8"
            >
              <Box
                className="w-full xl:w-1/3 border border-solid border-border flex flex-col gap-2 px-4 pb-4 sm:py-4  rounded-lg"
                sx={{
                  boxShadow: "11px 17px 13px 0px #00000040",
                }}
                data-aos="fade-right"
              >
                <Box className="w-full flex flex-col sm:flex-row sm:gap-2 justify-start items-center">
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
                className="w-full xl:w-1/3 border border-solid border-border flex flex-col gap-2 px-4 pb-4 sm:py-4  rounded-lg"
                sx={{
                  boxShadow: "11px 17px 13px 0px #00000040",
                }}
                data-aos="fade-right"
              >
                <Box className="w-full flex flex-col sm:flex-row sm:gap-2 justify-start items-center">
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
                className="w-full xl:w-1/3 border border-solid border-border flex flex-col gap-2 px-4 pb-4 sm:py-4 rounded-lg"
                sx={{
                  boxShadow: "11px 17px 13px 0px #00000040",
                }}
                data-aos="fade-right"
              >
                <Box className="w-full flex flex-col sm:flex-row sm:gap-2 justify-start items-center">
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
          {/* *** FAQs *** */}
          <Box
            component="div"
            className="w-full flex flex-col gap-5 md:gap-10 pb-5 sm:py-5"
          >
            <Typography
              variant="h2"
              className="text-[#041658] font-normal font-primary text-[35px]/[35.07px] lg:text-[43px]/[60.07px] xl:text-[40px]/[52.73px] text-center md:text-left pb-4 sm:pb-0"
            >
              More Information
            </Typography>

            <AboutUsFAQs />
          </Box>
        </Box>
      </Box>
    </div>
  )
}
