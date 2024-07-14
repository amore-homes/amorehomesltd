import { useLottie } from "lottie-react"
import certificate from "./certificate.json"

const style = {
  height: 60,
}
export default function CertificateIcon() {
  const options = {
    animationData: certificate,
    loop: true,
    autoplay: true,
  }

  const { View } = useLottie(options, style)

  return View
}
