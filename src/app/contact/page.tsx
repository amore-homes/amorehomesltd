"use client"
import { Box, Grid, Typography } from "@mui/material"
import Image from "next/image"
import React from "react"
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitButton } from "@/components/Inputs/button"
import { CustomTextField, TextArea } from "@/components/Inputs"

export default function ContactUsPage() {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [success, setSuccess] = React.useState<boolean>(false)
  const [error, setError] = React.useState<boolean>(false)
  const [message, setMessage] = React.useState<string>("")

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
    const inputs = {
      id: 2,
      name: `${data.firstname} ${data.lastname}`,
      email: data.email,
      phone: data.phone,
      message: data.message,
    }
    setLoading(true)
    try {
      const res = await fetch("http://localhost:5001/contact-us", {
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
        console.log("RESPONSE:", res)
        reset()
      }
    } catch (error: any) {
      setLoading(false)
      setError(true)
      setMessage(error)
      console.log("ERROR:", error)
    }
  }
  console.log("message", message)
  return (
    <div
      className="w-full flex flex-col gap-4 justify-center lg:justify-start items-center lg:items-start pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
      data-aos="fade-down"
    >
      <div
        className="w-full flex flex-col lg:flex-row gap-2 lg:gap-6"
        data-aos="fade-up"
        data-aos-once={true}
      >
        <Box
          className="w-full lg:w-1/2 flex flex-col gap-6"
          data-aos="fade-up-right"
          data-aos-once={true}
        >
          <Box className="w-full flex flex-col mt-[50px]">
            <Typography
              variant="subtitle1"
              className="text-[#041658] font-primary font-normal text-[40px]/[39.18px] lg:text-[80px]/[90px] xl:text-[96px]/[111px] text-left"
            >
              Contact Us
            </Typography>
            <Typography
              variant="caption"
              className="font-normal font-primary text-[18px]/[24px] xl:text-[28px]/[40.39px] text-left text-[#041658]"
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
        <Box className="w-full lg:w-1/2 relative" data-aos="fade-up">
          <Image
            src="/images/map.svg"
            alt="map icon"
            width={975.62}
            height={1162.04}
            className="hidden lg:block rounded-[70px] w-full h-[780px] xl:h-[1000px] xxl:h-[1100.04px]"
          />
        </Box>
      </div>
    </div>
  )
}
