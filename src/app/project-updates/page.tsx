import { getEntriesByType } from "@/components/data/contentful"
import ProjectUpdates from "./updates"

const getPressStories = async () => {
  const results = await getEntriesByType("pressStory")
  const story = results.map((item: any) => item.fields)
  return story
}
const getShortStories = async () => {
  const results = await getEntriesByType("latestStories")
  const story = results.map((item: any) => item.fields)
  return story
}

const getEventPicture = async () => {
  const results = await getEntriesByType("picturesOfEvents")
  const pictures = results.map((item: any) => item.fields)
  return pictures
}
const getTopEventPicture = async () => {
  const results = await getEntriesByType("topEvents")
  const pictures = results.map((item: any) => item.fields)
  return pictures
}

const getLatestEventPicture = async () => {
  const results = await getEntriesByType("latestEvents")
  const pictures = results.map((item: any) => item.fields)
  return pictures
}
export default async function ProjectUpdatePage() {
  const pressStories = await getPressStories()
  const shortStories = await getShortStories()
  const data: any = await getEventPicture()
  const topEvents: any = await getTopEventPicture()
  const latestEvents: any = await getLatestEventPicture()
  return (
    <div className="w-full relative bg-[#F3F3F3]" data-aos="fade-down">
      <section className="w-fullh-full flex flex-col justify-start items-start pb-8 pt-[80px] px-4 lg:mt-0 md:py-[60px] relative gap-8 overflow-hidden">
        <ProjectUpdates
          pressStories={pressStories}
          shortStories={shortStories}
          eventData={data}
          topEvents={topEvents}
          latestEvents={latestEvents}
        />
      </section>
    </div>
  )
}
