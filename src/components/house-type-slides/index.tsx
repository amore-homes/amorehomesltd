import { getEntriesByType } from "../data/contentful"
import HouseTypes from "./house-types"

export const getHouseTypes = async () => {
  const results = await getEntriesByType("houseTypes")
  const housetype = results.map((item: any) => item.fields)
  return housetype
}
export default async function HouseTypePage() {
  const data: any = await getHouseTypes()

  return <HouseTypes data={data} />
}
