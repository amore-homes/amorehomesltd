"use client"
import { Box, Grid, IconButton, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { CustomTextField, TextArea } from "../Inputs"
import { SubmitButton } from "../Inputs/button"
import Link from "next/link"
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import { CloseIcon } from "../SVGs"
import axios from "axios"

export default function ContactUsSection() {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [success, setSuccess] = React.useState<boolean>(false)
  const [error, setError] = React.useState<boolean>(false)
  const [message, setMessage] = React.useState<string>("")

  const { executeRecaptcha } = useGoogleReCaptcha()

  // form validation rules
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().required("First name is required"),
    lastname: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email address is required"),
    phone: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  })

  // get functions to build form with useForm() hook
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  async function onSubmit(data: any) {
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
      name: `${data.firstname} ${data.lastname}`,
      email: data.email,
      phone: data.phone,
      message: data.message,
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
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        })
        if (res) {
          setLoading(false)
          setSuccess(true)
          setMessage("Messsage sent successfully")
          setTimeout(() => {
            setSuccess(false)
            setMessage("")
            reset()
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
    <div className="w-full flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative">
      <div className="w-full flex flex-col lg:flex-row gap-2 lg:gap-6">
        <Box
          className="w-full lg:w-1/2 flex flex-col gap-6"
          data-aos="fade-right"
        >
          <Box className="w-full flex flex-col">
            <Typography
              variant="subtitle1"
              className="text-secondary font-primary font-normal text-[30px]/[39.18px] lg:text-[80px]/[90px] xl:text-[96px]/[111px] text-left"
            >
              Contact Us
            </Typography>
            <Typography
              variant="caption"
              className="font-normal font-primary text-[18px]/[24px] xl:text-[28px]/[40.39px] text-left text-secondary"
            >
              We&apos;ll love to Hear From You
            </Typography>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            autoComplete="off"
            className="w-full max-w-[708px] flex my-4"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {error && (
                  <div
                    className="w-full max-w-[300px] mx-auto bg-white border border-white pl-4 pr-1 pt-1 pb-4 flex flex-col justify-between relative gap-1"
                    style={{
                      borderLeft: "4px solid #ff3333",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <Typography className="font-bold font-primary text-lg text-[#ff3333]">
                        Error
                      </Typography>
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
                    <Typography className="font-normal font-primary text-sm text-[#ff3333]">
                      {message}
                    </Typography>
                  </div>
                )}
                {success && (
                  <div
                    className="w-full max-w-[300px] mx-auto bg-white border-l-4 border-[#5cb85c] pl-4 pr-1 pt-1 pb-4 flex flex-col justify-between relative gap-1"
                    style={{
                      borderLeft: "4px solid #5cb85c",
                      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <Typography className="font-bold font-primary text-lg text-[#5cb85c]">
                        Success
                      </Typography>
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
                    <Typography className="font-normal font-primary text-sm text-[#5cb85c]">
                      {message}
                    </Typography>
                  </div>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  name="firstname"
                  register={register}
                  type="text"
                  label="First name"
                  error={!!errors.firstname}
                  helperText={errors.firstname?.message}
                  disabled={loading}
                />
              </Grid>{" "}
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  name="lastname"
                  register={register}
                  type="text"
                  label="Last name"
                  error={!!errors.lastname}
                  helperText={errors.lastname?.message}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  name="email"
                  register={register}
                  type="email"
                  label="Email address"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField
                  name="phone"
                  register={register}
                  type="text"
                  label="Phone number"
                  error={!!errors.phone}
                  helperText={errors.phone?.message}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextArea
                  name="message"
                  register={register}
                  type="message"
                  label="Message"
                  error={!!errors.message}
                  helperText={errors.message?.message}
                  disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <SubmitButton
                  text="Send"
                  loading={loading}
                  disabled={loading}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <div
          className="hidden lg:block w-full md:w-[680px] h-[780px] xl:h-[1000px] xxl:h-[1100.04px] my-24"
          id="map"
          data-aos="fade-up"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7879.764892916524!2d7.4376859!3d9.0744728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b89949e189f%3A0x964c27b087cf7abe!2sAmore%20Court%20by%20Amore%20Homes!5e0!3m2!1sen!2sng!4v1720851648250!5m2!1sen!2sng"
            className="inset-0 w-full h-full lg:h-[780px] rounded-[50px] border-none"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
