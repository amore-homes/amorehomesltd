import { getEntriesByType } from "@/components/data/contentful"
import OurCommunities from "./communities"

const getOurCommunityImages = async () => {
  const results = await getEntriesByType("ourCommunitiesPage")
  const communities = results.map((item: any) => item.fields)
  return communities
}
export default async function OurCommunitiesPage() {
  const data: any = await getOurCommunityImages()
  return <OurCommunities data={data} />
}
