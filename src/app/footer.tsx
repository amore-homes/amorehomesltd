import {
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  MobilePhone,
  TwitterIcon,
} from "@/components/SVGs"
import { Box, Divider, Link } from "@mui/material"

export default function FooterSection() {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <footer
      className="w-full h-full xl:h-[400px] flex flex-col py-[30px] relative gap-8 overflow-hidden"
      data-aos="fade-up"
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          boxShadow: "49px 4px 7px 0px #00000040",
          backgroundColor: "#0B0E4BB0",
          backgroundImage: {
            xs: `linear-gradient(rgba(11, 14, 75, 0.69), rgba(11, 14, 75, 0.69)),url("/images/footer-image.jpeg")`,
            md: `linear-gradient(rgba(4, 22, 88, 0.6), rgba(4, 22, 88, 0.6)),url("/images/footer-image.jpeg")`,
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
      <Box className="w-full text-white text-center text-[30px]/[36px]  lg:text-[53px]/[66px] font-normal font-primary">
        More Information:
      </Box>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row gap-4 lg:gap-8 xxl:gap-10">
          <div className="w-full md:w-1/2 flex gap-4 px-4">
            <LocationIcon style={{ width: 90, height: 90 }} />
            <span className="font-normal font-primary text-white text-[20px]/[28px] md:text-[27.3px]/[38px] xl:text-[30px]/[45px]">
              Lummi Island by Amore Homes, 892 N Okonjo-Iweala Wy, Utako, Abuja.
            </span>
          </div>
          <Divider
            sx={{
              borderColor: "#FFFFFF",
              borderWidth: { xs: 0.5, md: "4px" },
            }}
          />
          <div className="w-full md:w-1/2 flex gap-4 px-4">
            <MobilePhone style={{ width: 90, height: 90 }} />
            <Link
              href="tel: +2347003000400"
              className="font-normal font-primary text-white text-[20px]/[28px] md:text-[27.3px]/[38px] xl:text-[30px]/[45px]"
            >
              Call +2347003000400 For Information about Virtual tours
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#001252E0] mt-4 md:mt-[50px]">
        <div className="w-full flex flex-row gap-4 lg:gap-8 xxl:gap-10 justify-between px-8 py-2">
          <div className="w-full flex flex-col gap-1 md:gap-2">
            <span className="text-white text-[13.2px]/[20px] lg:text-[26px]/[33.86px] font-normal font-primary">
              Copyright © All Rights Reserved Amore Homes, {year}
            </span>
            <Link
              href="/terms-and-conditions"
              underline="always"
              className="text-[#94CDD5] text-[16px]/[24px] md:text-[20px]/[25.08px] font-normal font-primary normal-case"
            >
              Terms and Conditions
            </Link>
          </div>
          <div className="flex gap-4 items-center">
            <Link
              underline="none"
              href="https://www.twitter.com/amore_homes/"
              target="_blank"
              className="text-white hover:text-primary hover:scale-110 cursor-pointer"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="https://www.instagram.com/amore_homes/"
              target="_blank"
              className="text-white hover:text-primary hover:scale-110 cursor-pointer"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://web.facebook.com/AmoreHomesltd/?_rdc=1&_rdr"
              target="_blank"
              className="text-white hover:text-primary hover:scale-110 cursor-pointer"
            >
              <FacebookIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
