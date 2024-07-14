"use client"
import React from "react"
import { BallTriangle } from "react-loader-spinner"

export default function LoadingPage() {
  return (
    <div
      className="w-full h-[100vh] relative flex flex-col pb-8 pt-[80px] lg:mt-0 md:py-[120px] gap-8 px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] justify-center items-center"
      data-aos="fade-down"
    >
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <BallTriangle
          height={80}
          width={80}
          radius={5}
          color="#B59363"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <div className="w-full flex justify-center items-center text-[#000000] text-4xl text-center font-primary font-normal">
          Loading ...
        </div>
      </div>
    </div>
  )
}
