import { useLottie } from "lottie-react"
import vision from "./vision.json"

const style = {
  height: 60,
}
export default function VisionIcon() {
  const options = {
    animationData: vision,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
