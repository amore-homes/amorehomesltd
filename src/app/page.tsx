import FAQSection from "@/components/FAQs"
import { ArrowUp } from "@/components/SVGs"
import ContactUsSection from "@/components/contact-us"
import HouseTypePage from "@/components/house-type-slides"
import LatestProjects from "@/components/latest-projects"
import CommunityImages from "@/components/our-community-slides"
import { Divider } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import HomePageHeroSearch from "../components/homePageSearch"
import WhyChooseUs from "@/components/why-us"
import OurTeamSection from "@/components/team"
import BlogPostSection from "@/components/blog-post"

export default function HomePage() {
  return (
    <div className="w-full">
      <div className="relative w-full h-screen overflow-hidden">
        {/* <iframe
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          src="/video/amore-vid.mp4"
          title="Amore homes yoyutube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe> */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <video
            className="w-full h-full object-cover object-center"
            src="/video/amore-vid.mp4"
            autoPlay
            loop
            muted
          ></video>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-[#04165880] backdrop-blur-sm gap-8">
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <Image
              src="/images/logo-with-text.svg"
              alt="Amore logo"
              width={641}
              height={300}
              className="w-[280px] h-[150px] lg:w-[380px] lg:h-[200px] xl:w-[441px] xl:h-[230px] xxl:w-[641px] xxl:h-[300px]"
              priority
            />
            <span className="font-normal font-primary text-[15px]/[18.81px] text-white lg:text-xl xl:text-2xl/[35px] xxl:text-4xl/[45.14px] text-left uppercase mt-[-25px]">
              Homes for Sustainability
            </span>
          </div>
          <HomePageHeroSearch />

          <Link
            href="#committee-section"
            className="hidden xxl:block absolute left-auto right-16 top-auto bottom-20 cursor-pointer"
          >
            <ArrowUp />
          </Link>
          <Link
            href="#committee-section"
            className="xs:hidden lg:block xxl:hidden absolute left-auto right-16 top-auto bottom-10 cursor-pointer"
          >
            <ArrowUp style={{ width: 48, height: 48 }} />
          </Link>
          <Link
            href="#committee-section"
            className="block lg:hidden absolute left-auto right-8 top-auto bottom-10 cursor-pointer"
          >
            <ArrowUp style={{ width: 45, height: 38 }} />
          </Link>
        </div>
      </div>
      {/* *** OUR COMMUNITIES *** */}
      <CommunityImages />
      {/* *** LATEST PROJECTS *** */}
      <LatestProjects />
      {/* *** Dream home *** */}
      <WhyChooseUs />
      {/* *** HOUSE TYPES *** */}
      <section
        id="committee-section"
        className="w-full flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[80px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
        data-aos="fade-up"
      >
        <div className="w-full flex flex-col lg:flex-row justify-between gap-2 mb-4">
          <div className="w-full lg:w-2/3 flex gap-2">
            <div className="w-full flex flex-col">
              <h4
                className="font-primary font-normal text-[16px]/[28px] lg:text-[20px/[40px] xl:text-2xl/[40px] text-left text-primary uppercase"
                data-aos="fade-up"
              >
                Our Home Design
              </h4>
              <div className="relative">
                <h4
                  className="font-primary font-normal text-[25px]/[24px] lg:text-4xl/[42px] xl:text-3xl/[58px] xxl:text-4xl/[60.25px] text-left text-[#100808] uppercase flex gap-2 relative"
                  data-aos="fade-up"
                >
                  Our House Types
                </h4>
                <Divider
                  orientation="horizontal"
                  sx={{
                    width: 107,
                    borderWidth: 2,
                    borderColor: "#B59363",
                    position: "absolute",
                    left: { xs: 220, sm: 310 },
                    top: { xs: 25, sm: 35, md: 40, lg: 40 },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <HouseTypePage />
      </section>
      {/* *** OUR HOUSE *** */}
      <OurTeamSection />
      {/* *** FAQs *** */}
      <section
        id="faqs-section"
        className="w-full flex flex-col sm:gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
        data-aos="fade-up"
      >
        <div className="w-full flex flex-col lg:flex-row justify-between gap-2 mb-4">
          <div className="w-full lg:w-2/3 flex gap-2">
            <div className="w-full flex flex-col">
              <h4
                className="font-primary font-normal text-[16px]/[24px] lg:text-[20px/[40px] xl:text-2xl/[40px] text-left text-primary uppercase"
                data-aos="fade-up"
              >
                Frequently Ask Questions
              </h4>

              <div className="relative">
                <h4
                  className="font-primary font-normal text-[25px]/[24px] lg:text-4xl/[42px] xl:text-3xl/[58px] xxl:text-4xl/[60.25px] text-left text-[#100808] uppercase flex gap-2 relative"
                  data-aos="fade-up"
                >
                  More Information
                </h4>
                <Divider
                  orientation="horizontal"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    width: 210,
                    borderWidth: 2,
                    borderColor: "#B59363",
                    position: "absolute",
                    left: 370,
                    right: "auto",
                    top: { xs: 0, sm: 15, md: 40, lg: 38 },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <FAQSection />
      </section>
      {/* *** CONTACT US *** */}
      <section
        id="contact-us-section"
        className="w-full flex flex-col gap-4"
        data-aos="fade-up"
        data-aos-once={true}
      >
        <div className="w-full flex justify-start items-start bg-[#F8F7F7]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] py-4">
          <Image
            src="/images/logo-with-blue-text.svg"
            alt="Amore homes Logo"
            width={255}
            height={103}
            data-aos="fade-right"
            data-aos-once={true}
            priority
          />
        </div>
        <ContactUsSection />
      </section>
      {/* *** BLOG *** */}
      <BlogPostSection />
    </div>
  )
}
