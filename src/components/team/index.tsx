import { Divider } from "@mui/material"
import Link from "next/link"
import { getEntriesByType } from "../data/contentful"
import OurTeamMembers from "./teams"

const getAboutUsDetail = async () => {
  const results = await getEntriesByType("teams")
  const detail = results.map((item: any) => item.fields)
  return detail
}
export default async function OurTeamSection() {
  const data: any = await getAboutUsDetail()

  const sortedItems = data?.sort((a: any, b: any) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
  })
  return (
    <section
      id="dreamhome-section"
      className="w-full bg-[#F8F7F7] flex flex-col sm:gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
      data-aos="fade-up"
    >
      <div className="w-full flex flex-col justify-between gap-2 mb-4">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col">
            <h4
              className="font-primary font-normal text-[16px]/[24px] lg:text-[20px/[40px] xl:text-2xl/[40px] text-left text-primary uppercase"
              data-aos="fade-up"
            >
              Our teams
            </h4>
            <div className="relative">
              <h4
                className="font-primary font-normal text-[25px]/[24px] lg:text-4xl/[42px] xl:text-3xl/[58px] xxl:text-3xl/[60.25px] text-left text-[#100808] uppercase flex gap-2 relative"
                data-aos="fade-up"
              >
                Meet Our amazing Team of Experts
              </h4>
              <Divider
                orientation="horizontal"
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: 210,
                  borderWidth: 2,
                  borderColor: "#B59363",
                  position: "absolute",
                  left: { xs: 650, lg: 479 },
                  right: "auto",
                  top: { xs: 0, sm: 15, md: 35, lg: 30, xl: 40 },
                }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-8 xl:gap-8 xxl:gap-4 justify-between">
            <div className="w-full flex justify-end items-end">
              <Link
                href="/about-us"
                className="w-[250px] h-[60px] font-normal font-primary text-center text-white text-[17px]/[21.32px] lg:text-[24px]/[32.11px] xl:text-[28px]/[35.11px] rounded-[10px] bg-secondary flex justify-center items-center mr-8 capitalize"
              >
                View all Teams
              </Link>
            </div>
            <OurTeamMembers data={sortedItems} />
          </div>
        </div>
      </div>
    </section>
  )
}
