import { useLottie } from "lottie-react"
import security from "./security.json"

const style = {
  height: 50,
}
export default function SecurityIcon() {
  const options = {
    animationData: security,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
