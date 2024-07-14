import { useLottie } from "lottie-react"
import recreationalCenter from "./recreational-center.json"

const style = {
  height: 30,
}
export default function SportPersonIcon() {
  const options = {
    animationData: recreationalCenter,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
