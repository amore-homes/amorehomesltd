import { useLottie } from "lottie-react"
import gym from "./gym.json"

const style = {
  height: 60,
}
export default function GymPersonIcon() {
  const options = {
    animationData: gym,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
