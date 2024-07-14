"use client"
import {
  ArrowDown,
  BathtubIcon,
  CouchIcon,
  MapIcon,
  RulerIcon,
  SearchIcon,
} from "@/components/SVGs"
import Nodata from "@/components/lottie/no-data"
import {
  Grid,
  IconButton,
  Link,
  Pagination,
  PaginationItem,
} from "@mui/material"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import React from "react"

export default function OurCommunitiesPage({ data }: any) {
  const searchParams = useSearchParams()
  const s: any = searchParams.get("s")
  const t: any = searchParams.get("t")
  const c: any = searchParams.get("c")
  const b: any = searchParams.get("b")
  const tb: any = searchParams.get("tb")
  const d: any = searchParams.get("d")
  const [filteredProperties, setFilteredProperties] = React.useState(data)
  const [search, setSearch] = React.useState<any>("")
  const [location, setLocation] = React.useState<any>(null)
  const [community, setCommunity] = React.useState("any")
  const [propertyType, setPropertyType] = React.useState("any")
  const [bedroom, setBedroom] = React.useState("")
  const [toilet, setToilet] = React.useState("")
  const [dimension, setDimension] = React.useState("")
  const [page, setPage] = React.useState(1)
  const pagesize = 8
  const count = filteredProperties?.length
  const totalPageNumbers = Math.ceil(count / pagesize)
  const startIndex = (page - 1) * pagesize
  const endIndex = startIndex + pagesize

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value)
  }
  React.useEffect(() => {
    if (s || t || c || b || tb || d) {
      setPropertyType(t)
      setCommunity(c)
      setBedroom(b)
      setToilet(tb)
      setDimension(d)
      setSearch(s)
    }
  }, [s, t, c, b, tb, d])

  React.useEffect(() => {
    const filterProperties = () => {
      let filtered = data
      if (search !== "") {
        filtered = filtered?.filter((property: any) => {
          return Object.values(property)
            .join("")
            .toLowerCase()
            .includes(search.toLowerCase())
        })
      }

      if (community !== "any") {
        filtered = filtered.filter(
          (property: any) => property.community.toLowerCase() === community
        )
      }

      if (propertyType !== "any") {
        filtered = filtered.filter(
          (item: any) => item.propertyType.toLowerCase() === propertyType
        )
      }

      if (bedroom) {
        filtered = filtered.filter((property: any) => property.room === bedroom)
      }

      if (toilet) {
        filtered = filtered.filter(
          (property: any) => property.toilet === toilet
        )
      }

      if (dimension) {
        filtered = filtered.filter(
          (property: any) => property.dimension.toLowerCase() === dimension
        )
      }

      setFilteredProperties(filtered)
    }
    filterProperties()
  }, [data, search, community, propertyType, bedroom, toilet, dimension])

  return (
    <div
      className="w-full min-h-screen relative flex flex-col py-24 gap-8"
      data-aos="fade-down"
    >
      <div
        className="w-full flex flex-col pb-4 pt-[40px] md:py-[40px] xl:py-[60px] px-2 lg:px-[30px] xl:px-[40px] xxl:px-[96px] relative gap-10"
        data-aos="fade-down"
      >
        <h1
          className="w-full flex flex-col gap-2 text-secondary text-[37px]/[46.39px] text-center md:text-left font-normal font-primary uppercase"
          data-aos="fade-right"
        >
          Amore Homes
          <span
            className="font-primary font-normal text-center md:text-left text-primary text-[30px]/[30.25px] md:text-[60px]/[50.25px] uppercase pl-8"
            data-aos="fade-left"
          >
            Properties
          </span>
        </h1>
      </div>
      <div className="w-full justify-between md:flex flex-col grid grid-cols-2 gap-4 md:flex-row md:justify-center items-center px-2 md:px-0">
        <div className="relative  md:w-[240px] w-full flex">
          <input
            id={search}
            name="search"
            value={search}
            onChange={(e: any) => setSearch(e.target.value)}
            placeholder="Search for Properties"
            className="w-full md:w-full bg-border appearance-none border border-border border-solid  rounded-[30px] text-[16px]/[24px] placeholder:text-[#605F5F] text-[#000000] font-primary font-normal px-6 py-3 outline-none focus:outline-none"
          />
          <div className="pointer-events-none absolute top-0 inset-y-0 right-2 flex items-center px-2 text-gray-700">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>
        </div>
        <div className="w-full md:w-[240px] relative">
          <select
            id={propertyType}
            name="propertyType"
            value={propertyType}
            onChange={(e: any) => setPropertyType(e.target.value)}
            className="w-full md:w-full bg-border appearance-none border border-border border-solid  rounded-[30px] text-[16px]/[24px] placeholder:text-[#605F5F] text-[#000000] font-primary font-normal px-6 py-3 outline-none focus:outline-none"
          >
            <option value="any" disabled>
              Property type
            </option>
            {[
              {
                value: "townhouse",
                label: "Townhouse",
              },
              {
                value: "apartment",
                label: "Apartments",
              },
            ]?.map((option, index) => {
              return (
                <option key={option.value + index} value={option.value}>
                  {option.label}
                </option>
              )
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
            <IconButton>
              <ArrowDown
                style={{
                  width: 30,
                  height: 30,
                  color: "#808080",
                }}
              />
            </IconButton>
          </div>
        </div>
        <div className="w-full md:w-[240px] relative">
          <select
            id="community"
            name="community"
            value={community}
            onChange={(e) => setCommunity(e.target.value)}
            className="w-full bg-border appearance-none border border-border border-solid  rounded-[30px] text-[16px]/[24px] placeholder:text-[#605F5F] text-[#000000] font-primary font-normal px-6 py-3 outline-none focus:outline-none"
          >
            <option value="any" disabled>
              Community
            </option>
            {[
              {
                value: "amore",
                label: "Amore court",
              },
              {
                value: "utako",
                label: "Utako",
              },
              {
                value: "lummi",
                label: "Lummi court",
              },
            ]?.map((option, index) => {
              return (
                <option key={option.value + index} value={option.value}>
                  {option.label}
                </option>
              )
            })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center px-2 text-gray-700">
            <IconButton>
              <ArrowDown
                style={{
                  width: 30,
                  height: 30,
                  color: "#808080",
                }}
              />
            </IconButton>
          </div>
        </div>
        <div className="w-full md:w-[240px] relative">
          <input
            id="bedroom"
            name="bedroom"
            value={bedroom}
            type="number"
            onChange={(e) => setBedroom(e.target.value)}
            placeholder="Bedroom"
            min={1}
            className=" w-full bg-border border border-border border-solid  rounded-[30px] text-[16px]/[24px] placeholder:text-[#605F5F] text-[#000000] font-primary font-normal px-6 py-3 outline-none focus:outline-none"
          />
        </div>
        <div className="w-full md:w-[240px] relative">
          <input
            id="toilet"
            name="toilet"
            value={toilet}
            type="number"
            min={1}
            onChange={(e) => setToilet(e.target.value)}
            placeholder="Toilet"
            className="w-full bg-border appearance-none border border-border border-solid  rounded-[30px] text-[16px]/[24px] placeholder:text-[#605F5F] text-[#000000] font-primary font-normal px-6 py-3 outline-none focus:outline-none"
          />
        </div>
        <div className="w-full md:w-[240px] relative">
          <input
            id="dimension"
            type="text"
            name="dimension"
            value={dimension}
            onChange={(e) => setDimension(e.target.value)}
            placeholder="Dimension"
            className="w-full bg-border appearance-none border border-border border-solid  rounded-[30px] text-[16px]/[24px] placeholder:text-[#605F5F] text-[#000000] font-primary font-normal px-6 py-3 outline-none focus:outline-none"
          />
        </div>
      </div>
      <div
        className="w-full flex flex-col justify-between gap-8 px-2 md:px-24 mt-4"
        data-aos="zoom-in"
      >
        <Grid container rowSpacing={4} columnSpacing={2}>
          {filteredProperties.length !== 0 ? (
            filteredProperties
              ?.slice(startIndex, endIndex)
              ?.map((type: any, index: number) => {
                console.log("type", type)
                return (
                  <Grid key={`type-${index}`} item xs={12} sm={6} md={4} xl={3}>
                    <div className="w-full flex flex-col">
                      <div
                        key={`item-${index}`}
                        className="w-full flex flex-col justify-center items-center gap-4 cursor-pointer "
                        onClick={() => setLocation(type)}
                      >
                        <div className="w-full bg-[#F5F5F5] flex flex-col gap-8 rounded-[4px] pb-10 shadow-[4px_8px_11px_0px_#00000040] h-[450px]">
                          {type?.image?.fields && (
                            <Image
                              src={`https:${type?.image?.fields.file.url}`}
                              alt={type.image.fields.title}
                              width={type.image.fields.file.details.image.width}
                              height={
                                type.image.fields.file.details.image.height
                              }
                              quality={100}
                              className={`w-full lg:w-[280px] xl:w-[280px] xxl:w-[400px] h-[270px] rounded-[4px] hover:scale-[1.01]`}
                            />
                          )}
                          <h4 className="text-[#000000] text-left font-normal font-primary text-[17px]/[21.32px] px-6">
                            {type.address}
                          </h4>
                          <div className="w-full grid grid-cols-3 lg:flex gap-2 lg:gap-6 px-6">
                            <div className="w-[100px] lg:w-[190.84px] h-[58.39px] flex justify-center items-center rounded-[13px] px-1 hover:scale-[1.02] shadow-[4px_8px_11px_0px_#00000040]">
                              <div className="w-full flex gap-1 justify-center items-center">
                                <BathtubIcon />
                                <h4 className="font-normal font-primary text-[#000000] text-left text-[16px]/[20px]">
                                  {type.toilet}
                                </h4>
                              </div>
                            </div>
                            {/* Couch */}
                            <div className="w-[100px] lg:w-[120.84px] h-[58.39px] flex justify-center items-center rounded-[13px] px-1 hover:scale-[1.02] shadow-[4px_8px_11px_0px_#00000040]">
                              <div className="w-full flex gap-1 justify-center items-center ">
                                <CouchIcon />
                                <h4 className="font-normal font-primary text-[#000000] text-left text-[16px]/[20px]">
                                  {type.room}
                                </h4>
                              </div>
                            </div>
                            {/* Ruler */}
                            <div className="w-[100px] lg:w-[120.84px] h-[58.39px] flex justify-center items-center rounded-[13px] px-1 hover:scale-[1.02] shadow-[4px_8px_11px_0px_#00000040]">
                              <div className="w-full flex gap-1 justify-center items-center">
                                <RulerIcon />
                                <h4 className="font-normal font-primary text-[#000000] text-left text-[16px]/[20px]">
                                  {`${type.dimension}`}
                                </h4>
                              </div>
                            </div>
                            {/* Map */}
                            <div className="w-[100px] lg:w-[120.84px] h-[58.39px] flex justify-center items-center rounded-[13px] px-1 hover:scale-[1.02] shadow-[4px_8px_11px_0px_#00000040]">
                              <Link
                                href="#map"
                                // target="_blank"
                                className="w-full flex gap-1 justify-center items-center"
                              >
                                <MapIcon />
                                <h4 className="font-normal font-primary text-[#000000] text-left text-[16px]/[20px]">
                                  Map
                                </h4>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                )
              })
          ) : (
            <Nodata message="No property available" />
          )}
        </Grid>
        <div className="w-full flex justify-center items-center py-4">
          <div className="w-full flex justify-center gap-4 items-center">
            <Pagination
              className="font-interMedium font-medium text-center text-[22px]/[24px] text-primary-text"
              count={totalPageNumbers}
              page={page}
              boundaryCount={3}
              siblingCount={0}
              onChange={handlePageChange}
              renderItem={(item) => (
                <PaginationItem
                  className="w-[60px] h-[60px] bg-[#FFFFFF0D] border border-solid border-border text-primary-text font-semibold font-interSemibold mx-2"
                  {...item}
                />
              )}
            />
          </div>
        </div>
        {location?.community?.toLowerCase() === "amore" ? (
          <div className="w-full h-full rounded-3xl" id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7879.764892916524!2d7.4376859!3d9.0744728!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b89949e189f%3A0x964c27b087cf7abe!2sAmore%20Court%20by%20Amore%20Homes!5e0!3m2!1sen!2sng!4v1720851648250!5m2!1sen!2sng&z=15"
              className="inset-0 w-full h-full lg:h-[650px] rounded-3xl border-none m-0 p-0 md:p-0 aspect-video bg-white"
              // style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ) : location?.community?.toLowerCase() === "lummi" ? (
          <div className="w-full h-full rounded-3xl" id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1970.012896703425!2d7.4424002!3d9.061411500000018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0be9ec46abdb%3A0x892473bc11394dae!2sLummi%20Island%20by%20Amore%20Homes!5e0!3m2!1sen!2sng!4v1720930482699!5m2!1sen!2sng"
              className="inset-0 w-full h-full lg:h-[650px] rounded-3xl border-none m-0 p-0 md:p-0 aspect-video bg-white"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ) : location?.community?.toLowerCase() === "utako" ? (
          <div className="w-full h-full rounded-3xl" id="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3939.7369007270486!2d7.440162899999999!3d9.08771540000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b8df650a003%3A0x828097e515a655f7!2sShashilga%20Court!5e0!3m2!1sen!2sng!4v1720930689778!5m2!1sen!2sng"
              className="inset-0 w-full h-full lg:h-[650px] rounded-3xl border-none m-0 p-0 md:p-0 aspect-video bg-white"
              // style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        ) : null}
      </div>
    </div>
  )
}
