import { Divider } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { getEntriesByType } from "../data/contentful"

export const getHomePageLatestProject = async () => {
  const results = await getEntriesByType("newUpdates")
  const latestProjects = results.map((item: any) => item.fields)
  return latestProjects
}
export const getHomePageLatestProjectDescription = async () => {
  const results = await getEntriesByType("newUpdateDescription")
  const description = results.map((item: any) => item.fields)
  return description
}
export default async function LatestProjects() {
  const data: any = await getHomePageLatestProject()
  const projectDescription: any = await getHomePageLatestProjectDescription()
  const project1 = data?.find((item: any) => item.name === "Update-1")
  const project2 = data?.find((item: any) => item.name === "Update-2")
  const project3 = data?.find((item: any) => item.name === "Update-3")
  const project4 = data?.find((item: any) => item.name === "Update-4")
  const project5 = data?.find((item: any) => item.name === "Update-5")
  const project6 = data?.find((item: any) => item.name === "Update-6")

  return (
    <section
      id="project-section"
      className="w-full flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
      data-aos="fade-up"
    >
      <div className="w-full flex flex-col lg:flex-row justify-between gap-2 mb-4">
        <div className="w-full lg:w-2/3 flex gap-2">
          <div className="w-full flex flex-col" data-aos="fade-up">
            <h4 className="font-primary font-normal text-[16px]/[28px] lg:text-[28px/[40px] xl:text-3xl/[40px] text-left text-primary uppercase">
              New Updates
            </h4>

            <div className="relative">
              <h4 className="font-primary font-normal text-[25px]/[24px] lg:text-4xl/[42px] xl:text-4xl/[58px] xxl:text-4xl/[60.25px] text-left text-[#100808] uppercase flex gap-2 relative">
                Latest Projects
              </h4>
              <Divider
                orientation="horizontal"
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: 210,
                  borderWidth: 2,
                  borderColor: "#B59363",
                  position: "absolute",
                  left: 290,
                  right: "auto",
                  top: { xs: 0, sm: 15, md: 40, lg: 35 },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full relative flex flex-col sm:flex-row gap-4">
        {project1?.image?.fields?.file?.url && (
          <Image
            src={`https:${project1?.image?.fields?.file?.url}`}
            alt={project1?.title}
            width={project1?.image?.fields?.file?.details?.image?.width}
            height={project1?.image?.fields?.file?.details?.image?.height}
            quality={100}
            className={`rounded-sm h-[200px] w-full lg:w-1/3 xl:h-[414px]`}
            loading="lazy"
            data-aos="fade-right"
          />
        )}
        {project2?.image?.fields?.file?.url && (
          <Image
            src={`https:${project2?.image?.fields?.file?.url}`}
            alt={project2?.title}
            width={project2?.image?.fields?.file?.details?.image?.width}
            height={project2?.image?.fields?.file?.details?.image?.height}
            quality={100}
            className={`rounded-sm h-[200px] w-full lg:w-2/3 xl:h-[414px]`}
            loading="lazy"
            data-aos="fade-left"
          />
        )}
      </div>
      <div className="w-full flex relative flex-col lg:flex-row">
        <div className="w-full sm:w-[580px] md:w-[800px] lg:w-[900px] xl:w-[750px] xxl:w-[1200px] flex justify-between gap-1 xl:gap-4">
          <div className="flex gap-4">
            {project3?.image?.fields?.file?.url && (
              <Image
                src={`https:${project3?.image?.fields?.file?.url}`}
                alt={project3?.title}
                width={project3?.image?.fields?.file?.details?.image?.width}
                height={project3?.image?.fields?.file?.details?.image?.height}
                quality={100}
                className={`rounded-sm h-[285px] w-[135px] lg:w-[260px] xl:w-[280px] lg:h-[480px] xl:h-[578px] xxl:h-[878px] xxl:w-[460px]`}
                loading="lazy"
                data-aos="fade-up"
              />
            )}
            <div className=" flex flex-col gap-1 lg:gap-3 xl:gap-4">
              {project4?.image?.fields?.file?.url && (
                <Image
                  src={`https:${project4?.image?.fields?.file?.url}`}
                  alt={project4?.title}
                  width={project4?.image?.fields?.file?.details?.image?.width}
                  height={project4?.image?.fields?.file?.details?.image?.height}
                  quality={100}
                  className={`rounded-sm h-[150px] lg:h-[250px] w-[185px] lg:w-[350px] xl:h-[350px] xl:w-[431px] xxl:h-[401px] xxl:w-[693px]`}
                  loading="lazy"
                  data-aos="flip-left"
                />
              )}
              <div className="w-full flex gap-1">
                <div>
                  {project5?.image?.fields?.file?.url && (
                    <Image
                      src={`https:${project5?.image?.fields?.file?.url}`}
                      alt={project5?.title}
                      width={
                        project5?.image?.fields?.file?.details?.image?.width
                      }
                      height={
                        project5?.image?.fields?.file?.details?.image?.height
                      }
                      quality={100}
                      className={`w-[120px] sm:w-1/2 lg:w-[150px] h-[150px] lg:h-[216px] xl:h-[210px] xl:w-[320px] xxl:h-[459px] xxl:w-[328px] rounded-sm`}
                      loading="lazy"
                      data-aos="flip-right"
                    />
                  )}
                </div>
                <div>
                  {project6?.image?.fields?.file?.url && (
                    <Image
                      src={`https:${project6?.image?.fields?.file?.url}`}
                      alt={project6?.title}
                      width={
                        project6?.image?.fields?.file?.details?.image?.width
                      }
                      height={
                        project6?.image?.fields?.file?.details?.image?.height
                      }
                      quality={100}
                      className={`w-[120px] sm:w-1/2 rounded-sm h-[150px] lg:h-[216px] lg:w-[180px] xl:w-[210px] xl:h-[210px] xxl:h-[460px] xxl:w-[328px]`}
                      loading="lazy"
                      data-aos="flip-right"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[400px] mt-8 flex flex-col gap-6 md:pl-8">
          <div className="w-full relative px-8">
            <Divider
              orientation="horizontal"
              sx={{
                width: 107,
                borderWidth: 2,
                borderColor: "#B59363",
                position: "absolute",
                left: 0,
                top: { xs: 25, sm: 35, md: 38, lg: 40, xl: 40 },
              }}
            />

            <h4
              className="font-primary font-normal text-[25px]/[24px] lg:text-3xl/[42px] xl:text-[28px]/[38px] xxl:text-[32px]/[45.14px] text-left text-primary uppercase flex gap-2 relative left-[80px] top-4"
              data-aos="zoom-in-right"
              data-aos-once={true}
            >
              New Arrivals
            </h4>
          </div>
          <Link
            href="/our-communities"
            className="w-full h-[60px] font-normal font-primary text-center text-white text-[17px]/[21.32px] lg:text-[24px]/[32.11px] xl:text-[26px]/[35.11px] rounded-[10px] bg-secondary mt-4 md:mt-8 flex justify-center items-center"
            data-aos="fade-left"
            data-aos-once={true}
          >
            View all properties
          </Link>
          <p
            className="w-full px-2 font-primary font-normal text-[#000000] text-[18px]/[28px] lg:text-[22px]/[32.62px] xl:text-[24px]/[28px] text-left"
            data-aos="fade-up"
          >
            {projectDescription?.[0]?.description}
          </p>
        </div>
      </div>
    </section>
  )
}
