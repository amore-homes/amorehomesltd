"use client"
import { ArrowDown, FilterIcon } from "@/components/SVGs"
import { Grid, IconButton, InputLabel } from "@mui/material"
import Menu from "@mui/material/Menu"
import * as React from "react"

export default function HomepageSearchFilters({
  propertyType,
  room,
  toilet,
  community,
  dimension,
  handlePropertyChange,
  handleRoomChange,
  handleToiletChange,
  handleDimensionChange,
  handleCommunityChange,
}: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton onClick={handleClick}>
        <FilterIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <div className="w-full max-w-[400px] flex">
          <form noValidate autoComplete="off" className="w-full flex py-4 px-6">
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <div className="relative w-full flex flex-col gap-1">
                  <InputLabel
                    id="bedroom"
                    className="w-full font-normal font-primary text-[16px]/[24px] xl:text-[16px]/[24px]"
                  >
                    Property type
                  </InputLabel>
                  <select
                    id={propertyType}
                    name="propertyType"
                    value={propertyType}
                    onChange={handlePropertyChange}
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
                  <div className="pointer-events-none absolute top-6 inset-y-0 right-2 flex items-center px-2 text-gray-700">
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
              </Grid>
              <Grid item xs={12}>
                <div className="relative w-full flex flex-col gap-1">
                  <InputLabel
                    id="bedroom"
                    className="w-full font-normal font-primary text-[16px]/[24px] xl:text-[16px]/[24px]"
                  >
                    Community
                  </InputLabel>
                  <select
                    id={community}
                    name="community"
                    value={community}
                    onChange={handleCommunityChange}
                    className="w-full md:w-full bg-border appearance-none border border-border border-solid  rounded-[30px] text-[16px]/[24px] placeholder:text-[#605F5F] text-[#000000] font-primary font-normal px-6 py-3 outline-none focus:outline-none"
                  >
                    <option value="any" disabled>
                      Community
                    </option>
                    {[
                      { label: "Amore court", value: "amore" },
                      { label: "Lummi island", value: "lummi" },
                      { label: "Utako", value: "utako" },
                    ]?.map((option, index) => {
                      return (
                        <option key={option.value + index} value={option.value}>
                          {option.label}
                        </option>
                      )
                    })}
                  </select>
                  <div className="pointer-events-none absolute top-6 inset-y-0 right-2 flex items-center px-2 text-gray-700">
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
              </Grid>
              <Grid item xs={12}>
                <div className="relative w-full flex flex-col gap-1">
                  <InputLabel
                    id="bedroom"
                    className="w-full font-normal font-primary text-[18px]/[24px] xl:text-[22px]/[27.59px]"
                  >
                    Bedroom
                  </InputLabel>
                  <input
                    type="number"
                    id="bedroom"
                    className="w-full md:w-full bg-border appearance-none border border-border border-solid  rounded-[30px] text-[16px]/[24px] placeholder:text-[#605F5F] text-[#000000] font-primary font-normal px-6 py-3 outline-none focus:outline-none"
                    value={room}
                    onChange={handleRoomChange}
                    placeholder="e.g 2"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="relative w-full flex flex-col gap-1">
                  <InputLabel
                    id="toilet"
                    className="w-full font-normal font-primary text-[18px]/[24px] xl:text-[22px]/[27.59px]"
                  >
                    Toilets
                  </InputLabel>
                  <input
                    type="number"
                    id="toilet"
                    className="w-full md:w-full bg-border appearance-none border border-border border-solid  rounded-[30px] text-[16px]/[24px] placeholder:text-[#605F5F] text-[#000000] font-primary font-normal px-6 py-3 outline-none focus:outline-none"
                    value={toilet}
                    onChange={handleToiletChange}
                    placeholder="e.g 2"
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="relative w-full flex flex-col gap-1">
                  <InputLabel
                    id="dimension"
                    className="w-full font-normal font-primary text-[18px]/[24px] xl:text-[22px]/[27.59px]"
                  >
                    Dimension
                  </InputLabel>
                  <input
                    type="text"
                    id="dimension"
                    className="w-full md:w-full bg-border appearance-none border border-border border-solid  rounded-[30px] text-[16px]/[24px] placeholder:text-[#605F5F] text-[#000000] font-primary font-normal px-6 py-3 outline-none focus:outline-none"
                    value={dimension}
                    onChange={handleDimensionChange}
                    placeholder="e.g 200m"
                  />
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </Menu>
    </div>
  )
}
