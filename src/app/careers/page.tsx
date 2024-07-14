import React from "react"
import Careers from "."
import { getEntriesByType } from "@/components/data/contentful"

const getCareers = async () => {
  const results = await getEntriesByType("careers")
  const careers = results.map((career: any) => career.fields)
  return careers
}
export default async function CareerPage() {
  const data = await getCareers()

  return <Careers careerPosts={data} />
}
