import { useLottie } from "lottie-react"
import values from "./values.json"

const style = {
  height: 30,
  marginTop: 10,
}
export default function ValuesIcon() {
  const options = {
    animationData: values,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
