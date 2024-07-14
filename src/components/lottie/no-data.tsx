import { useLottie } from "lottie-react"
import nodata from "./no-data.json"

interface Props {
  message?: string
  height?: number | string
  color?: string
}
export default function Nodata({ message, height, color }: Props) {
  const options = {
    animationData: nodata,
    loop: true,
    autoplay: true,
  }
  const style = {
    height: height ? height : 200,
  }

  const { View } = useLottie(options, style)

  return (
    <div className="w-full flex flex-col justify-center items-center py-2 md:py-8">
      {View}
      <div
        className={
          color
            ? `font-bold font-primary text-${color} text-center text-xl -mt-4`
            : `font-bold font-primary text-grey-text text-center text-xl -mt-4`
        }
      >
        {message ? message : "No data available"}
      </div>
    </div>
  )
}
