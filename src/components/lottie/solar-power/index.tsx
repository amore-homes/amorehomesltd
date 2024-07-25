import { useLottie } from "lottie-react"
import solar from "./solar.json"

const style = {
  height: 35,
}
export default function SolarPowerIcon() {
  const options = {
    animationData: solar,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
