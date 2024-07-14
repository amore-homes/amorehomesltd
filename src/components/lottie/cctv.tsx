import { useLottie } from "lottie-react"
import cctv from "./cctv.json"

const style = {
  height: 60,
}
export default function CCTVIcon() {
  const options = {
    animationData: cctv,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
