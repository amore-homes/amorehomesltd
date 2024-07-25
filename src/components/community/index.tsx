"use client"
import Image from "next/image"
import Facilitity from "./facilities"
import LummiHomeFeatures from "./home-features"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"

export default function CommunityDescription({
  imageData,
  name,
  description,
  caption,
}: any) {
  const HEADING_1 = ({ children }: any) => (
    <h1 className="w-full flex flex-col gap-2 text-primary-text text-[30px]/[35.4px] md:text-[35px]/[40px] text-left font-bold font-primary normal-case mt-2">
      {children}
    </h1>
  )
  const HEADING_2 = ({ children }: any) => (
    <h2 className="w-full flex flex-col gap-2 text-primary-text text-[28px]/[35.4px] md:text-[32px]/[40px] text-left font-bold font-primary normal-case mt-2">
      {children}
    </h2>
  )
  const HEADING_3 = ({ children }: any) => (
    <h3 className="w-full flex flex-col gap-2 text-primary-text text-[26px]/[30.4px] md:text-[28px]/[32.4px] text-left font-bold font-primary normal-case mt-2">
      {children}
    </h3>
  )
  const HEADING_4 = ({ children }: any) => (
    <h4 className="w-full flex flex-col gap-2 text-primary-text text-[22px]/[30px] md:text-[25px]/[34px] text-left font-bold font-primary normal-case mt-2">
      {children}
    </h4>
  )
  const HEADING_5 = ({ children }: any) => (
    <h5 className="w-full flex flex-col gap-2 text-primary-text text-[22px]/[28.2px] text-left font-bold font-primary normal-case mt-2">
      {children}
    </h5>
  )
  const HEADING_6 = ({ children }: any) => (
    <h6 className="w-full flex flex-col gap-2 text-primary-text text-[18px]/[24.5px] text-left font-bold font-primary normal-case mt-2">
      {children}
    </h6>
  )
  const Bold = ({ children }: any) => (
    <p className="w-full flex flex-col gap-2 text-primary-text text-[32px]/[40px] text-left font-bold font-primary normal-case mt-2">
      {children}
    </p>
  )
  const Text = ({ children }: any) => (
    <p className="w-full flex flex-col gap-2 text-primary-text text-[16px]/[28.4px] md:text-[20px]/[32.4px] text-left font-normal font-primary">
      {children}
    </p>
  )

  const renderOption = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
        const assetType = node.data.target.fields.file.contentType
        switch (assetType) {
          case "video/mp4":
            return (
              <video width="100%" height="100%" controls>
                <source
                  src={node.data.target.fields.file.url}
                  type="video/mp4"
                />
              </video>
            )
          case "image/png":
            return (
              <Image
                src={`https:${node.data.target.fields.file.url}`}
                height={node.data.target.fields.file.details.image.height}
                width={node.data.target.fields.file.details.image.width}
                alt={node.data.target.fields.description}
                className={`w-full xl:w-[${node.data.target.fields.file.details.image.width}] h-[206px] xl:h-[655px] relative rounded-[25px]`}
              />
            )
          case "image/jpeg":
            return (
              <Image
                src={`https:${node.data.target.fields.file.url}`}
                height={node.data.target.fields.file.details.image.height}
                width={node.data.target.fields.file.details.image.width}
                alt={node.data.target.fields.description}
                className={`w-full xl:w-[${node.data.target.fields.file.details.image.width}] h-[206px] xl:h-[655px] relative rounded-[25px]`}
              />
            )
          default:
            return "Nothing to see here..."
        }
      },
      [BLOCKS.PARAGRAPH]: (node: any, children: any) => <Text>{children}</Text>,
      [BLOCKS.HEADING_1]: (node: any, children: any) => (
        <HEADING_1>{children}</HEADING_1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: any) => (
        <HEADING_2>{children}</HEADING_2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: any) => (
        <HEADING_3>{children}</HEADING_3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: any) => (
        <HEADING_4>{children}</HEADING_4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: any) => (
        <HEADING_5>{children}</HEADING_5>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: any) => (
        <HEADING_6>{children}</HEADING_6>
      ),
    },
    renderMark: {
      [MARKS.BOLD]: (text: any) => <Bold>{text}</Bold>,
    },
    renderText: (text: string) => {
      return text
        .split("\n")
        .reduce((children: any, textSegment: any, index: number) => {
          return [...children, index > 0 && <br key={index} />, textSegment]
        }, [])
    },
  }
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
                    {caption}
                  </span>
                </h1>
              </div>

              <div className="w-full max-w-[1680px] flex flex-col gap-2">
                {documentToReactComponents(description, renderOption)}
              </div>
            </div>
            <div className="w-full  hidden md:flex gap-4 xxl:gap-8">
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
      {/* Home features */}
      <LummiHomeFeatures />
    </div>
  )
}
