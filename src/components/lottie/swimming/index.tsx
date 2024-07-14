import { useLottie } from "lottie-react"
import swim from "./swim.json"

const style = {
  height: 60,
}
export default function SwimmingPersonIcon() {
  const options = {
    animationData: swim,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
