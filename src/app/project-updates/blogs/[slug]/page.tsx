import {
  getEntryBySlug,
  createContentClient,
} from "@/components/data/contentful"
import Image from "next/image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { Button } from "@mui/material"
import Link from "next/link"

const client = createContentClient()
export async function generateStaticParams() {
  const queryOptions = {
    content_type: "pressStory",
    select: "fields.slug",
  }
  const stories = await client.getEntries(queryOptions)
  return stories.items.map((story) => ({
    slug: story.fields.slug,
  }))
}

export default async function BlogDetailPage({ params }: any) {
  const { slug } = params
  const blog = await getEntryBySlug(slug, "pressStory")
  const { title, content, images, lastUpdate }: any = blog

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
    <p className="w-full flex flex-col gap-2 text-primary-text text-[16px]/[28.4px] md:text-[22px]/[32.4px] text-justify font-normal font-primary">
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
    <div className="w-full min-h-screen relative flex flex-col gap-12 mt-[150px] items-center">
      <div className="w-full max-w-[1280px] flex flex-col pb-4 px-4 lg:px-[30px] xl:px-[40px] xxl:px-[96px] relative gap-10 items-center">
        <div className="w-full flex flex-col">
          <Link
            href="/project-updates"
            className="w-[120px] rounded-full bg-secondary text-white flex justify-center items-center text-sm font-primary font-bold py-1 uppercase"
          >
            Go back
          </Link>
        </div>
        <div className="w-full flex flex-col">
          <h1 className="w-full flex flex-col gap-2 text-secondary text-[37px]/[46.39px] text-left font-normal font-primary uppercase m-0">
            {title}
          </h1>
          <p className="w-full flex flex-col gap-2 text-primary-text text-[18px]/[28.4px] text-left font-normal font-primary normal-case m-0">
            Last Update: {lastUpdate}
          </p>
        </div>
        <div className="w-full relative cursor-pointer" data-aos="fade-right">
          <Image
            src={`https:${images.fields.file.url}`}
            alt={title}
            width={images.fields.file.details.image.width}
            height={images.fields.file.details.image.height}
            quality={100}
            className={`w-full xl:w-[${images.fields.file.details.image.width}] h-[206px] xl:h-[655px] relative rounded-[25px]`}
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          {documentToReactComponents(content, renderOption)}
        </div>
      </div>
    </div>
  )
}
