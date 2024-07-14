import { useLottie } from "lottie-react"
import team from "./teamMembers.json"

const style = {
  height: 60,
}
export default function TeamMemberIcon() {
  const options = {
    animationData: team,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
