"use client"
import React from "react"
import TeamMemberIcon from "../lottie/teamMember"
import { Divider } from "@mui/material"
import CertificateIcon from "../lottie/certificate"
import KeyIcon from "../lottie/key"
import DiscountIcon from "../lottie/discount"
import Image from "next/image"
import { BriefIcon } from "../SVGs"
import CountUp from "react-countup"

export default function WhyChooseUs() {
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
              Why Choose us
            </h4>
            <div className="relative">
              <h4
                className="font-primary font-normal text-[25px]/[24px] lg:text-4xl/[42px] xl:text-3xl/[58px] xxl:text-3xl/[60.25px] text-left text-[#100808] uppercase flex gap-2 relative"
                data-aos="fade-up"
              >
                We will provide you with the best dream home
              </h4>
              <Divider
                orientation="horizontal"
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: 210,
                  borderWidth: 2,
                  borderColor: "#B59363",
                  position: "absolute",
                  left: { xs: 650, lg: 770 },
                  right: "auto",
                  top: { xs: 0, sm: 15, md: 35, lg: 30, xl: 35 },
                }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-8 xl:gap-8 xxl:gap-8 justify-between">
            <div className="w-full md:max-w-[550px] xl:w-[460px] xxl:w-[550px] flex flex-col gap-4">
              <div className="w-full flex space-x-4 md:space-x-8">
                <div className="w-[65px] h-[65px] rounded-full bg-border shadow-2xl flex justify-center items-center flex-shrink-0">
                  <TeamMemberIcon />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-primary-text text-[16px]/[28.4px] md:text-[25px]/[32.4px] text-left font-bold font-primary capitalize">
                    Experienced Team
                    <span className="block text-grey-text text-[16px]/[30.4px] font-primary normal-text normal-case">
                      Our experienced team of experts will guide you in choosing
                      the perfect home that suits your needs.
                    </span>
                  </h4>
                </div>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <div className="w-[65px] h-[65px] rounded-full bg-border shadow-2xl flex justify-center items-center flex-shrink-0">
                  <CertificateIcon />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-primary-text text-[16px]/[28.4px] md:text-[25px]/[32.4px] text-left font-bold font-primary capitalize">
                    Certified Properties
                    <span className="block text-grey-text text-[16px]/[30.4px] font-primary normal-text">
                      Our properties meet the highest industry standards,
                      ensuring excellence in quality, safety, and
                      sustainability. providing peace of mind to our clients
                    </span>
                  </h4>
                </div>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <div className="w-[65px] h-[65px] rounded-full bg-border shadow-2xl flex justify-center items-center flex-shrink-0">
                  <KeyIcon />
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-primary-text text-[16px]/[28.4px] md:text-[25px]/[32.4px] text-left font-bold font-primary capitalize">
                    Fast Buy and Fast Process
                    <span className="block text-grey-text text-[16px]/[30.4px] font-primary normal-text">
                      We streamline the buying process to ensure swift and
                      efficient transactions, providing you with a seamless
                      experience from start to finish
                    </span>
                  </h4>
                </div>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <div className="w-[65px] h-[65px] rounded-full bg-border shadow-2xl flex justify-center items-center flex-shrink-0">
                  <DiscountIcon />
                </div>

                <div className="flex flex-col gap-4">
                  <h4 className="text-primary-text text-[16px]/[28.4px] md:text-[25px]/[32.4px] text-left font-bold font-primary capitalize">
                    Discount Properties
                    <span className="block text-grey-text text-[16px]/[30.4px] font-primary normal-text">
                      Our goal is to provide you with the best buying
                      opportunities, ensuring excellent value and promising
                      returns on your investment
                    </span>
                  </h4>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex gap-4 xxl:gap-4">
              <div className="flex flex-col gap-4">
                <div
                  className={`rounded-lg bg-secondary h-[180px] w-[350px] xl:w-[320px] xxl:w-[350px] flex justify-center items-center`}
                >
                  <div className="flex gap-6">
                    <BriefIcon className="w-[45px] h-[45px]" />
                    <div className="flex flex-col">
                      <h4 className="font-primary font-bold text-[45px]/[46px] text-left text-white">
                        <CountUp end={12} />+
                      </h4>
                      <p className="font-primary font-semibold text-sm text-left text-white">
                        years of experience
                      </p>
                    </div>
                  </div>
                </div>
                <Image
                  src="/images/happy-family.jpg"
                  alt="Balcony"
                  width={400}
                  height={478}
                  quality={100}
                  className={`rounded-lg w-full h-[355px] lg:w-[260px] xl:w-[320px] lg:h-[400px] xl:h-[320px] xxl:h-[338px] xxl:w-[340px]`}
                  loading="lazy"
                />
              </div>
              <Image
                src="/images/balcony.jpg"
                alt="Balcony"
                width={460}
                height={878}
                quality={100}
                className={`hidden md:block rounded-lg h-[355px] w-full md:w-[320px] lg:w-[260px] xl:w-[320px] md:h-[580px] lg:h-[400px] xl:h-[528px] xxl:h-[548px] xxl:w-[480px]`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
