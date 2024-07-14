import { useLottie } from "lottie-react"
import key from "./key.json"

const style = {
  height: 50,
}
export default function KeyIcon() {
  const options = {
    animationData: key,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
