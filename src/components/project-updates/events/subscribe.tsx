"use client"
import { CloseIcon } from "@/components/SVGs"
import LoadingButton from "@mui/lab/LoadingButton"
import { Button, IconButton } from "@mui/material"
import axios from "axios"
import React from "react"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { TailSpin } from "react-loader-spinner"

export default function SubscribePage() {
  const [subscribe, setSubscribe] = React.useState("")
  const [loading, setLoading] = React.useState<boolean>(false)
  const [success, setSuccess] = React.useState<boolean>(false)
  const [error, setError] = React.useState<boolean>(false)
  const [message, setMessage] = React.useState<string>("")

  const { executeRecaptcha } = useGoogleReCaptcha()

  const handleSubscribe = ({ target }: any) => {
    setSubscribe(target.value)
  }
  async function onSubmit() {
    setLoading(true)
    if (!executeRecaptcha) {
      setError(true)
      setLoading(false)
      setMessage("No recaptcha available")
      setTimeout(() => {
        setError(false)
        setMessage("")
      }, 3200)
      return
    }
    const gRecaptchaToken = await executeRecaptcha("inqurySubmit")
    const inputs = {
      email: subscribe,
    }

    const response = await axios({
      method: "post",
      url: "/api/recaptchaSubmit",
      data: {
        gRecaptchaToken,
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
    if (response.data?.success === true) {
      try {
        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        })
        if (res) {
          setLoading(false)
          setSuccess(true)
          setMessage("ThankS for subscribing!")
          setTimeout(() => {
            setSuccess(false)
            setMessage("")
            setSubscribe("")
          }, 3200)
        }
      } catch (error: any) {
        setLoading(false)
        setError(true)
        setMessage(error)
      }
    } else {
      setLoading(false)
      setError(true)
      setMessage("Failed to verify recaptcha")
      setTimeout(() => {
        setError(false)
        setMessage("")
      }, 3200)
    }
  }
  return (
    <div className="w-full sm:w-1/2 mt-8 sm:mt-6 flex flex-col gap-4">
      <div className="w-full">
        {error && (
          <div
            className="w-full max-w-[300px] mx-auto bg-white border border-white pl-4 pr-1 pt-1 pb-4 flex flex-col justify-between relative gap-1"
            style={{
              borderLeft: "4px solid #ff3333",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-bold font-primary text-lg text-[#ff3333]">
                Error
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
            <p className="font-normal font-primary text-sm text-[#ff3333]">
              {message}
            </p>
          </div>
        )}
        {success && (
          <div
            className="w-full max-w-[350px] mx-auto bg-white border-l-4 border-[#5cb85c] pl-4 pr-1 pt-1 pb-4 flex flex-col justify-between relative gap-1"
            style={{
              borderLeft: "4px solid #5cb85c",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <div className="flex justify-between items-center">
              <h4 className="font-bold font-primary text-lg text-[#5cb85c]">
                Success
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
            <p className="font-normal font-primary text-sm text-[#5cb85c]">
              {message}
            </p>
          </div>
        )}
      </div>
      <div className="w-full relative">
        <input
          id="subscribe"
          className={`relative w-full px-6 py-4 rounded-[42.5px] border border-solid border-[#00000080] bg-[#FFFFFF] justify-start items-center gap-3 flex font-inter text-xl/[24.6px] font-normal cursor-text text-[#101928] hover:border-primary focus:outline-none focus:border-primary disabled:bg-[#F5F5F5] disabled:hover:border-[#F5F5F5] disabled:cursor-not-allowed disabled:text-[#98A2B3] placeholder:text-[#B7B7B7] shadow-[0px_4px_4px_0px_#00000040_inset]`}
          value={subscribe}
          type="text"
          placeholder="Enter your email"
          name="subscribe"
          onChange={handleSubscribe}
        />
        <LoadingButton
          className="absolute top-0 right-[-25px] sm:right-0 w-[110px] sm:w-[170px] h-[60px] rounded-[42.5px] border-[3px] border-solid border-[#FFFFFF80] text-white font-normal font-primary bg-secondary hover:bg-[#2b324b] shadow-[0px_4px_44px_3px_#00000040]"
          loading={loading}
          disabled={loading || subscribe === ""}
          onClick={onSubmit}
        >
          {loading ? (
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
          ) : (
            "Subscribe"
          )}
        </LoadingButton>
      </div>
    </div>
  )
}
