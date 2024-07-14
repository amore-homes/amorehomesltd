import { useLottie } from "lottie-react"
import arrowUp from "./arrowUp.json"

const style = {
  height: 60,
}
export default function ArrowUpIcon() {
  const options = {
    animationData: arrowUp,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
