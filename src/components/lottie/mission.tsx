import { useLottie } from "lottie-react"
import mission from "./mission.json"

const style = {
  height: 60,
}
export default function MissionIcon() {
  const options = {
    animationData: mission,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
