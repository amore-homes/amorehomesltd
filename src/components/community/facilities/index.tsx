"use client"
import CCTVIcon from "@/components/lottie/cctv"
import GymPersonIcon from "@/components/lottie/gym"
import SportPersonIcon from "@/components/lottie/recreational-center"
import SecurityIcon from "@/components/lottie/security"
import SolarPowerIcon from "@/components/lottie/solar-power"
import SwimmingPersonIcon from "@/components/lottie/swimming"
import { Divider } from "@mui/material"
import Image from "next/image"

export default function Facilitity() {
  return (
    <section
      id="dreamhome-section"
      className="w-full bg-[#F8F7F7] flex flex-col sm:gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
      data-aos="fade-up"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between gap-2 mb-4">
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col">
            <h4
              className="font-primary font-normal text-[16px]/[24px] lg:text-[20px/[40px] xl:text-2xl/[40px] text-left text-primary uppercase"
              data-aos="fade-up"
            >
              Our community facilities
            </h4>
            <div className="relative">
              <h4
                className="font-primary font-normal text-[25px]/[24px] lg:text-4xl/[42px] xl:text-3xl/[58px] xxl:text-3xl/[60.25px] text-left text-[#100808] uppercase flex gap-2 relative"
                data-aos="fade-up"
              >
                We priotize the well-being of our residents
              </h4>
              <Divider
                orientation="horizontal"
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: 210,
                  borderWidth: 2,
                  borderColor: "#B59363",
                  position: "absolute",
                  left: { xs: 650, lg: 700 },
                  right: "auto",
                  top: { xs: 0, sm: 15, md: 35, lg: 30, xl: 35 },
                }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-8 xl:gap-8 xxl:gap-4 justify-between">
            <div className="w-full max-w-[550px] xl:max-w-[460px] xxl:max-w-[650px] flex flex-col gap-4">
              <div className="w-full flex space-x-4 md:space-x-8">
                <div className="w-[65px] h-[65px] rounded-full bg-border shadow-2xl flex justify-center items-center flex-shrink-0">
                  <SportPersonIcon />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-primary-text text-[16px]/[28.4px] md:text-[25px]/[32.4px] text-left font-bold font-primary capitalize">
                    Children Play Ground
                    <span className="block text-grey-text text-[16px]/[30.4px] font-primary normal-text normal-case">
                      We offer play ground for children that foster mutual
                      support, understanding, and mental wellness for our
                      residents.
                    </span>
                  </h4>
                </div>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <div className="w-[65px] h-[65px] rounded-full bg-border shadow-2xl flex justify-center items-center flex-shrink-0">
                  <CCTVIcon />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-primary-text text-[16px]/[28.4px] md:text-[25px]/[32.4px] text-left font-bold font-primary capitalize">
                    CCTV Surveillance
                    <span className="block text-grey-text text-[16px]/[30.4px] font-primary normal-text">
                      Enjoy a luxurious communal living experience with the
                      highest level of security.
                    </span>
                  </h4>
                </div>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <div className="w-[65px] h-[65px] rounded-full bg-border shadow-2xl flex justify-center items-center flex-shrink-0">
                  <SecurityIcon />
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-primary-text text-[16px]/[28.4px] md:text-[25px]/[32.4px] text-left font-bold font-primary capitalize">
                    24-hour Security
                    <span className="block text-grey-text text-[16px]/[30.4px] font-primary normal-text">
                      We prioritize our residents&apos; safety by providing
                      24-hour security.
                    </span>
                  </h4>
                </div>
              </div>{" "}
              <div className="w-full flex space-x-4 md:space-x-8">
                <div className="w-[65px] h-[65px] rounded-full bg-border shadow-2xl flex justify-center items-center flex-shrink-0">
                  <SecurityIcon />
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-primary-text text-[16px]/[28.4px] md:text-[25px]/[32.4px] text-left font-bold font-primary capitalize">
                    Security Intercom
                    <span className="block text-grey-text text-[16px]/[30.4px] font-primary normal-text">
                      We prioritize our residents&apos; safety by providing
                      24-hour security.
                    </span>
                  </h4>
                </div>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <div className="w-[65px] h-[65px] rounded-full bg-border shadow-2xl flex justify-center items-center flex-shrink-0">
                  <SolarPowerIcon />
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-primary-text text-[16px]/[28.4px] md:text-[25px]/[32.4px] text-left font-bold font-primary capitalize">
                    Solar Street Lamps
                    <span className="block text-grey-text text-[16px]/[30.4px] font-primary normal-text">
                      we integrate solar power systems such as solar powered
                      water heaters, solar street lamps as well as backup
                      Inverter System in our projects.
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex gap-4 xxl:gap-8">
              <Image
                src="/images/solar-lamp.jpg"
                alt="Balcony"
                width={460}
                height={878}
                quality={100}
                className={`hidden md:block rounded-lg h-[355px] w-full md:w-[320px] lg:w-[260px] xl:w-[320px] md:h-[580px] lg:h-[400px] xl:h-[548px] xxl:h-[548px] xxl:w-[400px]`}
                loading="lazy"
              />
              <div className="flex flex-col gap-6">
                <Image
                  src="/images/gym.jpg"
                  alt="Balcony"
                  width={260}
                  height={278}
                  quality={100}
                  className={`hidden md:block rounded-3xl h-[355px] w-full md:w-[320px] lg:w-[260px] xl:w-[320px] md:h-[580px] lg:h-[400px] xl:h-[548px] xxl:h-[180px] xxl:w-[350px]`}
                  loading="lazy"
                />
                <Image
                  src="/images/smiley-girl.jpg"
                  alt="Balcony"
                  width={260}
                  height={278}
                  quality={100}
                  className={`hidden md:block rounded-3xl h-[355px] w-full md:w-[320px] lg:w-[260px] xl:w-[320px] md:h-[580px] lg:h-[400px] xl:h-[548px] xxl:h-[180px] xxl:w-[245px]`}
                  loading="lazy"
                />
                <div className="w-[200px] h-[120px] border border-grey-text border-solid rounded-3xl flex flex-col px-2 py-4">
                  <div className="m-0 p-0 flex gap-3">
                    <SecurityIcon />

                    <h4 className="text-grey-text text-[22px]/[34px] font-primary normal-text mt-1">
                      Security
                    </h4>
                  </div>
                  <span className="text-primary-text text-[16px]/[28.4px] md:text-[40px]/[22px] text-center font-bold font-primary capitalize place-content-center pl-6">
                    24hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
