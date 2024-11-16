"use client"
import React from "react"
import { Divider } from "@mui/material"
import CertificateIcon from "@/components/lottie/certificate"
import KeyIcon from "@/components/lottie/key"
import DiscountIcon from "@/components/lottie/discount"
import Image from "next/image"
import { BriefIcon, DoubleCheckIcon } from "@/components/SVGs"
import CountUp from "react-countup"
import TeamMemberIcon from "@/components/lottie/teamMember"

export default function LummiHomeFeatures() {
  return (
    <section
      id="homefeatures-section"
      className="w-full flex flex-col sm:gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
      data-aos="fade-up"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between gap-2 mb-4">
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col">
            <h4
              className="font-primary font-normal text-[16px]/[24px] lg:text-[20px/[40px] xl:text-2xl/[40px] text-left text-primary uppercase"
              data-aos="fade-up"
            >
              Home Features
            </h4>
            <div className="relative">
              <h4
                className="font-primary font-normal text-[25px]/[24px] lg:text-4xl/[42px] xl:text-3xl/[58px] xxl:text-3xl/[60.25px] text-left text-[#100808] uppercase flex gap-2 relative"
                data-aos="fade-up"
              >
                We provide the best communal living experience, fostering a
                family-friendly lifestyle.
              </h4>
            </div>
          </div>
          <div className="w-full flex flex-col xl:flex-row gap-8 xl:gap-8 xxl:gap-8 justify-between">
            <div className="w-full max-w-[550px] xl:max-w-[680px]">
              <Image
                src="/images/smiley-couple.jpg"
                alt="Balcony"
                width={460}
                height={878}
                quality={100}
                className={`hidden md:block rounded-lg h-[355px] w-full md:w-[320px] lg:w-[260px] xl:w-[320px] md:h-[580px] lg:h-[400px] xl:h-[548px] xxl:h-[380px] xxl:w-[650px]`}
                loading="lazy"
              />
            </div>

            <div className="w-full flex flex-col gap-4">
              <div className="w-full flex space-x-4 md:space-x-8">
                <DoubleCheckIcon />
                <h4 className="text-primary-text text-[18px]/[30.4px] text-left font-bold font-primary capitalize">
                  Ample Parking Space
                </h4>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <DoubleCheckIcon />
                <h4 className="text-primary-text text-[18px]/[30.4px] text-left font-bold font-primary capitalize">
                  4 Bedroom (all ensuite)
                </h4>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <DoubleCheckIcon />

                <h4 className="text-primary-text text-[18px]/[30.4px] text-left font-bold font-primary capitalize">
                  1 Bedroom Servant Qtrs
                </h4>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <DoubleCheckIcon />

                <h4 className="text-primary-text text-[18px]/[30.4px] text-left font-bold font-primary capitalize">
                  Sustainable Design
                </h4>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <DoubleCheckIcon />

                <h4 className="text-primary-text text-[18px]/[30.4px] text-left font-bold font-primary capitalize">
                  All Room Wardrobes
                </h4>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <DoubleCheckIcon />

                <h4 className="text-primary-text text-[18px]/[30.4px] text-left font-bold font-primary capitalize">
                  Kitchen Cabinet and Appliances
                </h4>
              </div>

              <div className="w-full flex space-x-4 md:space-x-8">
                <DoubleCheckIcon />

                <h4 className="text-primary-text text-[18px]/[30.4px] text-left font-bold font-primary capitalize">
                  Smart Solar Power System
                </h4>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <DoubleCheckIcon />

                <h4 className="text-primary-text text-[18px]/[30.4px] text-left font-bold font-primary capitalize">
                  Solar Water Heater
                </h4>
              </div>
              <div className="w-full flex space-x-4 md:space-x-8">
                <DoubleCheckIcon />

                <h4 className="text-primary-text text-[18px]/[30.4px] text-left font-bold font-primary capitalize">
                  Home Automation
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
