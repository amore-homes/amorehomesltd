import { getEntriesByType } from "@/components/data/contentful"
import AboutUs from "./about-us"

const getAboutUsDetail = async () => {
  const results = await getEntriesByType("teams")
  const detail = results.map((item: any) => item.fields)
  return detail
}
const getVideoId = async () => {
  const results = await getEntriesByType("aboutUsVideo")
  const detail = results.map((item: any) => item.fields)
  return detail
}
const getMission = async () => {
  const results = await getEntriesByType("mission")
  const detail = results.map((item: any) => item.fields)
  return detail
}
const getVision = async () => {
  const results = await getEntriesByType("vision")
  const detail = results.map((item: any) => item.fields)
  return detail
}
const getCoreValue = async () => {
  const results = await getEntriesByType("coreValue")
  const detail = results.map((item: any) => item.fields)
  return detail
}
const getMoreInformation = async () => {
  const results = await getEntriesByType("moreInformation")
  const detail = results.map((item: any) => item.fields)
  return detail
}
export default async function AboutUsPage() {
  const data: any = await getAboutUsDetail()
  const videoId: any = await getVideoId()
  const mission: any = await getMission()
  const vission: any = await getVision()
  const coreValue = await getCoreValue()
  const moreInformation = await getMoreInformation()

  return (
    <AboutUs
      data={data}
      videoId={videoId}
      mission={mission}
      vision={vission}
      coreValue={coreValue}
      moreInformation={moreInformation}
    />
  )
}
