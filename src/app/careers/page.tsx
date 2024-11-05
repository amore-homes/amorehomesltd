import { getEntriesByType } from "@/components/data/contentful"
import Careers from "."

const getCareers = async () => {
  const results = await getEntriesByType("careers")
  const careers = results.map((career: any) => career.fields)
  return careers
}
export default async function CareerPage() {
  const data = await getCareers()

  return <Careers careerPosts={data} />
}
