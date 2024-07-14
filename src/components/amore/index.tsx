"use client"
import Image from "next/image"
import Facilitity from "./facilities"

export default function AmoreCommunitySection({ imageData, name }: any) {
  return (
    <div className="w-full flex flex-col">
      <section
        id="community-section"
        className="w-full flex flex-col sm:gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 md:pb-0 pt-[40px] md:pt-[40px] xl:pt-[60px] px-4 pr-0 md:pl-8 lg:pl-[38px] xl:pl-[60px] xxl:pl-[96px] relative"
        data-aos="fade-up"
      >
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col xl:flex-row gap-8 xl:gap-1 xxl:gap-12">
            <div className="flex flex-col gap-6 place-content-center">
              <div className="w-full flex flex-col justify-center items-center gap-2">
                <h1 className="w-full flex flex-col gap-2 text-primary-text text-[30px]/[35.4px] md:text-[60px]/[80px] font-bold font-primary uppercase text-center m-0 p-0">
                  {name}
                  <span className="w-full flex flex-col gap-2 text-grey-text text-[16px]/[24px] md:text-[18px]/[24px] text-center font-semibold font-primary">
                    Modern living sourrounded by nature
                  </span>
                </h1>
              </div>
              <p className="w-full flex flex-col gap-2 text-primary-text text-[16px]/[28.4px] md:text-[20px]/[32.4px] text-left font-normal font-primary">
                Amore Court by Amore Homes at Utako District carries the future
                of smart living in its details and promises a life that will
                fulfil your dreams of growing your family in a tranquil and
                secured environment with unparalleled modern opulence; a
                one-of-a-kind opportunity to be of a part of vibrant innovative
                community in Abuja&apos;s most accessible land development.
              </p>
              <p className="w-full flex flex-col gap-2 text-primary-text text-[16px]/[28.4px] md:text-[20px]/[32.4px] text-left font-normal font-primary">
                Featuring 11 home units, Amore Court comprises 8 townhouses and
                3 blocks of flats of 4 bedrooms and an ensuite servants quarters
                each.
              </p>
              <p className="w-full flex flex-col gap-2 text-primary-text text-[16px]/[28.4px] md:text-[20px]/[32.4px] text-left font-normal font-primary">
                Deliberately designed spaces, crafted to suit your elegant taste
                awaits you, Come Home to Amore.
              </p>
            </div>
            <div className="w-full hidden md:flex gap-4 xxl:gap-8">
              {imageData && (
                <Image
                  src={`https:${imageData?.fields.file.url}`}
                  alt={imageData.fields.title}
                  width={imageData.fields.file.details.image.width}
                  height={imageData.fields.file.details.image.height}
                  quality={100}
                  className={`hidden md:block h-[355px] w-full md:w-[320px] lg:w-[260px] xl:w-[320px] md:h-[580px] lg:h-[400px] xl:h-[548px] xxl:h-[648px] xxl:w-[980px]`}
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Facilities */}
      <Facilitity />
    </div>
  )
}
