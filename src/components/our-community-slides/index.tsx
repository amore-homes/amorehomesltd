import { getEntriesByType } from "../data/contentful"
import CommunityContent from "./community"

export const getOurCommunityImages = async () => {
  const results = await getEntriesByType("homepageOurCommunities")
  const communities = results.map((item: any) => item.fields)
  return communities
}
export default async function CommunityImages() {
  const data: any = await getOurCommunityImages()

  return <CommunityContent data={data} />
}
