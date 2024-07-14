"use client"
import Image from "next/image"
import CountUp from "react-countup"
import MissionIcon from "../lottie/mission"
import ValuesIcon from "../lottie/values"
import VisionIcon from "../lottie/vision"

export default function MissionVision({ mission, vision, coreValue }: any) {
  return (
    <section
      id="dreamhome-section"
      className="w-full bg-white flex flex-col sm:gap-4 pb-4 pt-[40px] md:py-[40px] xl:py-[60px] xxl:pt[120px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
      data-aos="fade-up"
    >
      <div className="w-full flex flex-col gap-12">
        <div className="w-full flex relative gap-10" data-aos="fade-down">
          <h1
            className="w-full flex flex-col gap-2 text-secondary text-[37px]/[46.39px] text-center md:text-left font-normal font-primary uppercase"
            data-aos="fade-right"
          >
            Amore Homes
            <span
              className="font-primary font-normal text-center md:text-left text-primary text-[30px]/[30.25px] md:text-[60px]/[50.25px] uppercase pl-8"
              data-aos="fade-left"
            >
              Mission and vision
            </span>
          </h1>
        </div>
        <div className="w-full flex flex-col xl:flex-row gap-8 xl:gap-8 xxl:gap-4 justify-between">
          <div className="w-full max-w-[550px] xl:max-w-[460px] xxl:max-w-[650px] flex flex-col gap-4">
            <div className="w-full flex space-x-4 md:space-x-8">
              <div className="w-[65px] h-[65px] rounded-full bg-border shadow-2xl flex justify-center items-center flex-shrink-0">
                <MissionIcon />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-primary-text text-[16px]/[28.4px] md:text-[25px]/[32.4px] text-left font-bold font-primary capitalize">
                  Mission
                  <span className="block text-grey-text text-[16px]/[30.4px] font-primary normal-text normal-case">
                    {mission?.[0].mission}
                  </span>
                </h4>
              </div>
            </div>
            <div className="w-full flex space-x-4 md:space-x-8">
              <div className="w-[65px] h-[65px] rounded-full bg-border shadow-2xl flex justify-center items-center flex-shrink-0">
                <VisionIcon />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-primary-text text-[16px]/[28.4px] md:text-[25px]/[32.4px] text-left font-bold font-primary capitalize">
                  Vision
                  <span className="block text-grey-text text-[16px]/[30.4px] font-primary normal-text">
                    {vision?.[0].vision}
                  </span>
                </h4>
              </div>
            </div>
            <div className="w-full flex space-x-4 md:space-x-8">
              <div className="w-[65px] h-[65px] rounded-full bg-border shadow-2xl flex justify-center items-center flex-shrink-0">
                <ValuesIcon />
              </div>

              <div className="flex flex-col gap-4">
                <h4 className="text-primary-text text-[16px]/[28.4px] md:text-[25px]/[32.4px] text-left font-bold font-primary capitalize">
                  Core values
                  <ol className="m-0 ml-1">
                    {coreValue?.map((value: any, index: number) => {
                      return (
                        <li
                          key={`core-value- ${index}`}
                          className="block text-grey-text text-[16px]/[30.4px] font-primary normal-text"
                        >
                          {value.coreValue}
                        </li>
                      )
                    })}
                  </ol>
                </h4>
              </div>
            </div>
          </div>
          <div className="flex gap-4 xxl:gap-8">
            <div className="flex flex-col gap-6">
              <div
                className={`rounded-lg bg-secondary h-[200px] w-[350px] xl:w-[340px] xxl:w-[350px] flex justify-center items-center`}
              >
                <div className="flex gap-6">
                  <div className="flex flex-col">
                    <h4 className="font-primary font-bold text-4xl/[34px] text-left text-white">
                      <CountUp end={12} />+
                    </h4>
                    <p className="font-primary font-semibold text-sm text-left text-white">
                      years of experience
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src="/images/amore-team-2.jpg"
                alt="Balcony"
                width={460}
                height={478}
                quality={100}
                className={`rounded-lg w-full h-[355px] lg:w-[260px] xl:w-[320px] lg:h-[400px] xl:h-[320px] xxl:h-[320px] xxl:w-[350px]`}
                loading="lazy"
              />
            </div>
            <Image
              src="/images/amore-team.jpg"
              alt="Balcony"
              width={460}
              height={878}
              quality={100}
              className={`hidden md:block rounded-lg h-[355px] w-full md:w-[320px] lg:w-[260px] xl:w-[320px] md:h-[580px] lg:h-[400px] xl:h-[548px] xxl:h-[548px] xxl:w-[500px] border border-solid border-white`}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
