"use client"
import {
  Box,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
  styled,
  tabsClasses,
} from "@mui/material"
import React from "react"
import { Fonts } from ".."
import BlogPage from "@/components/project-updates/blog"
import EventsPage from "@/components/project-updates/events/event"
import { SearchIcon } from "@/components/SVGs"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}
interface StyledTabProps {
  label: string
}

export const StyledTabs = styled(Tabs)({
  padding: "0 24px",
  margin: 0,
  [`& .${tabsClasses.scrollButtons}`]: {
    "&.Mui-disabled": { opacity: 0.3 },
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
})

export const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(() => ({
  minWidth: 50,
  cursor: "pointer",
  font: `normal normal 400 normal 19px/23.82px ${Fonts.primary}`,
  color: "#000000",
  textTransform: "uppercase",
  textAlign: "left",
  "&:hover": {
    color: "#001252E0",
  },
  "&.Mui-selected": {
    color: "#001252E0",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "#FFFFFF",
  },
}))

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component="div" className="w-full">
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}
export default function ProjectUpdatePage() {
  const [value, setValue] = React.useState(0)
  const [search, setSearch] = React.useState("")

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  const handleSearch = (event: any) => {
    setSearch(event.target.value)
  }
  return (
    <div className="w-full relative bg-[#F3F3F3]" data-aos="fade-down">
      <Box
        component="section"
        className="w-fullh-full flex flex-col justify-start items-start pb-8 pt-[80px] px-4 lg:mt-0 md:py-[60px] relative gap-8 overflow-hidden"
      >
        <Box
          className="w-full flex justify-end items-end mt-8"
          data-aos="zoom-in-left"
        >
          <Box className="relative w-full max-w-[426px]">
            <TextField
              variant="outlined"
              name="search"
              type="search"
              value={search}
              onChange={handleSearch}
              placeholder="Search blog"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
              }}
              className="w-full outline-none focus:outline-none border-none"
              InputProps={{
                sx: {
                  boxShadow: "0px 4px 6px -1px #00000040 inset",
                },
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
                className:
                  "w-full max-w-[426px] bg-white rounded-[30px] text-[14px]/[17.55px] placeholder:text-[#706F6F] text-[#000000] font-primary font-normal px-3",
              }}
            />
          </Box>
        </Box>
        <Box className="w-full max-w-[1440px] flex flex-col pb-4 px-4 lg:px-[30px] xl:px-[40px] xxl:px-[96px] relative gap-10">
          <Typography
            variant="h1"
            className="w-full flex flex-col gap-2 text-[#041658] text-[37px]/[46.39px] text-center md:text-left font-normal font-primary uppercase m-0"
            data-aos="fade-up"
          >
            Amore Homes
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Box className="w-full sm:w-[200px]">
              <StyledTabs
                value={value}
                onChange={handleChange}
                sx={{
                  padding: "0 24px",
                  margin: 0,
                  [`& .${tabsClasses.scrollButtons}`]: {
                    "&.Mui-disabled": { opacity: 0.3 },
                  },
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                }}
              >
                <StyledTab label="Blog" {...a11yProps(0)} />
                <StyledTab label="Events" {...a11yProps(1)} />
              </StyledTabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <BlogPage />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <EventsPage />
            </CustomTabPanel>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
