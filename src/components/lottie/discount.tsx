import { useLottie } from "lottie-react"
import discount from "./discount.json"

const style = {
  height: 100,
}
export default function DiscountIcon() {
  const options = {
    animationData: discount,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
