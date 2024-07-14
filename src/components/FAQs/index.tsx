import { getEntriesByType } from "../data/contentful"
import FAQs from "./faqs"

export const getFAQs = async () => {
  const results = await getEntriesByType("faQs")
  const communities = results.map((item: any) => item.fields)
  return communities
}
export default async function FAQSection() {
  const data: any = await getFAQs()

  return <FAQs data={data} />
}
