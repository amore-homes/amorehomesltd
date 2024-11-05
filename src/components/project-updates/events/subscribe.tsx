"use client"
import { CloseIcon } from "@/components/SVGs"
import LoadingButton from "@mui/lab/LoadingButton"
import { Button, IconButton } from "@mui/material"
import axios from "axios"
import React, { FormEvent } from "react"
// import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { TailSpin } from "react-loader-spinner"
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3"

export default function BlogSubscriptionPage() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
    >
      <SubscriptionForm />
    </GoogleReCaptchaProvider>
  )
}
function SubscriptionForm() {
  const [email, setEmail] = React.useState<string>("")
  const [message, setMessage] = React.useState<string>("")
  const [loading, setLoading] = React.useState<boolean>(false)
  const [success, setSuccess] = React.useState<boolean>(false)
  const [error, setError] = React.useState<boolean>(false)
  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!executeRecaptcha) {
      setMessage("Failed to load reCAPTCHA")
      return
    }

    try {
      setLoading(true)
      const token = await executeRecaptcha("subscribe")

      const res = await axios.post("/api/subscribe", {
        email,
        recaptchaToken: token,
      })
      if (res) {
        setLoading(false)
        setMessage(res.data.message)
        setEmail("")
      }
    } catch (error: any) {
      if (error.response) {
        setLoading(false)
        setMessage(error.response.data.message)
      } else {
        setMessage("An error occurred. Please try again.")
      }
    }
  }

  return (
    <div className="w-full sm:w-1/2 mt-8 sm:mt-6 flex flex-col gap-4">
      <div className="w-full">
        {message !== "" && (
          <div
            className="w-full max-w-[300px] mx-auto bg-white border border-white pl-4 pr-1 pt-1 pb-4 flex flex-col justify-between relative gap-1"
            style={{
              borderLeft: "4px solid #ff3333",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-bold font-primary text-lg text-secondary">
                Message
              </h4>
              <IconButton
                className=" cursor-pointer"
                onClick={() => {
                  setSuccess(false)
                  setMessage("")
                }}
              >
                <CloseIcon style={{ width: 25, height: 25 }} />
              </IconButton>
            </div>
            <p className="font-normal font-primary text-sm text-secondary">
              {message}
            </p>
          </div>
        )}
      </div>
      <form className="w-full relative" onSubmit={handleSubscribe}>
        <input
          id="subscribe"
          className={`relative w-full px-6 py-4 rounded-[42.5px] border border-solid border-[#00000080] bg-[#FFFFFF] justify-start items-center gap-3 flex font-inter text-xl/[24.6px] font-normal cursor-text text-[#101928] hover:border-primary focus:outline-none focus:border-primary disabled:bg-[#F5F5F5] disabled:hover:border-[#F5F5F5] disabled:cursor-not-allowed disabled:text-[#98A2B3] placeholder:text-[#B7B7B7] shadow-[0px_4px_4px_0px_#00000040_inset]`}
          value={email}
          type="email"
          placeholder="Enter your email"
          name="subscribe"
          onChange={({ target }: any) => {
            setEmail(target.value)
          }}
          required
        />
        <LoadingButton
          type="submit"
          className="absolute top-0 right-[-25px] sm:right-0 w-[110px] sm:w-[170px] h-[60px] rounded-[42.5px] border-[3px] border-solid border-[#FFFFFF80] text-white font-normal font-primary bg-secondary hover:bg-[#2b324b] shadow-[0px_4px_44px_3px_#00000040]"
          loading={loading}
          disabled={loading || email === ""}
          loadingIndicator={
            <TailSpin
              height="30"
              width="30"
              color={"#FFFFFF"}
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          }
        >
          Subscribe
        </LoadingButton>
      </form>
    </div>
  )
}
