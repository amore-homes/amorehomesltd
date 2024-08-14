import { Divider, Grid } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { getEntriesByType } from "../data/contentful"

const getBlogPost = async () => {
  const results = await getEntriesByType("pressStory")
  const detail = results.map((item: any) => item.fields)
  return detail
}
export default async function BlogPostSection() {
  const data: any = await getBlogPost()

  return (
    <section
      id="dreamhome-section"
      className="w-full bg-[#F8F7F7] flex flex-col sm:gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
      data-aos="fade-up"
    >
      <div className="w-full flex flex-col justify-between gap-2 mb-4">
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex flex-col">
            <h4
              className="font-primary font-normal text-[16px]/[24px] lg:text-[20px/[35px] xl:text-2xl/[40px] text-left text-primary uppercase"
              data-aos="fade-up"
            >
              Latest blog post
            </h4>
            <div className="relative">
              <h4
                className="font-primary font-normal text-[25px]/[24px] lg:text-4xl/[42px] xl:text-3xl/[58px] xxl:text-3xl/[50px] text-left text-[#100808] uppercase flex gap-2 relative"
                data-aos="fade-up"
              >
                Stay up to date with latest updates
              </h4>
              <Divider
                orientation="horizontal"
                sx={{
                  display: { xs: "none", sm: "block" },
                  width: 210,
                  borderWidth: 2,
                  borderColor: "#B59363",
                  position: "absolute",
                  left: { xs: 650, lg: 580 },
                  right: "auto",
                  top: { xs: 0, sm: 15, md: 35, lg: 30, xl: 40 },
                }}
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-8 xl:gap-8 xxl:gap-4 justify-between">
            <div className="w-full flex justify-end items-end px-1 md:px-4">
              <Link
                href="/project-updates"
                className="w-[150px] h-[60px] font-bold font-primary text-center text-white text-[17px]/[21.32px] lg:text-[24px]/[32.11px] xl:text-[22px]/[32px] rounded-[10px] bg-secondary flex justify-center items-center gap-1 capitalize px-4"
              >
                View all
              </Link>
            </div>
            <Grid container spacing={2}>
              {data?.slice(0, 4)?.map((blog: any, index: number) => {
                return (
                  <Grid key={`type-${index}`} item xs={12} sm={6} md={4} xl={3}>
                    <div className="w-full flex flex-col gap-2">
                      <Link
                        className="w-full bg-[#F8F8F8] flex flex-col gap-4 rounded-[40px] cursor-pointer"
                        key={`Press story - ${index}`}
                        href={`/project-updates/blogs/${blog.slug}`}
                      >
                        {blog.images.fields?.file?.url && (
                          <Image
                            src={`https:${blog.images.fields?.file?.url}`}
                            alt={blog.description}
                            width={
                              blog.images.fields?.file?.details?.image?.width
                            }
                            height={
                              blog.images.fields?.file?.details?.image?.height
                            }
                            quality={100}
                            className={`w-full h-full sm:h-[226px] sm:w-[${blog.images.fields?.file?.details?.image?.width}px] relative rounded-[20px]`}
                          />
                        )}
                        <div className="m-0 w-full flex flex-col justify-start items-start">
                          <h4 className="text-grey-text text-[16px]/[24px] font-normal font-primary text-left">
                            <span className="font-normal">Written by</span>{" "}
                            {blog.author}
                          </h4>
                          <p className="text-[#000000] text-[18px]/[28px] font-bold font-primary text-left">
                            {blog.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </Grid>
                )
              })}
            </Grid>
          </div>
        </div>
      </div>
    </section>
  )
}
