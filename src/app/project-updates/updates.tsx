"use client"
import BlogPage from "@/components/project-updates/blog"
import SearchBlog from "@/components/project-updates/blog/search"
import EventsPage from "@/components/project-updates/events"
import React from "react"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div className="w-full m-0 p-0" hidden={value !== index} {...other}>
      {value === index && children}
    </div>
  )
}

export default function ProjectUpdates({
  pressStories,
  shortStories,
  eventData,
  topEvents,
  latestEvents,
}: any) {
  const [value, setValue] = React.useState(0)
  const [search, setSearch] = React.useState("")
  const [filteredProperties, setFilteredProperties] =
    React.useState(pressStories)

  React.useEffect(() => {
    const filterProperties = () => {
      let filtered = pressStories
      if (search !== "") {
        filtered = filtered?.filter((property: any) => {
          return Object.values(property)
            .join("")
            .toLowerCase()
            .includes(search.toLowerCase())
        })
      }

      setFilteredProperties(filtered)
    }
    filterProperties()
  }, [pressStories, search])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }
  const handleChange = (newValue: number) => setValue(newValue)

  return (
    <div className="w-full min-h-screen relative flex flex-col">
      <SearchBlog handleSearch={handleSearch} search={search} />
      <div className="w-full flex flex-col pb-4 px-0 lg:px-[30px] xl:px-[40px] xxl:px-[96px] relative gap-10">
        <h1
          className="w-full flex flex-col gap-2 text-secondary text-[37px]/[46.39px] text-center md:text-left font-normal font-primary uppercase m-0"
          data-aos="fade-up"
        >
          Amore Homes
        </h1>
        <div className="w-full flex px-6 gap-4">
          <div
            className={
              value === 0
                ? "font-normal font-primary text-[19px]/[23.82px] text-[#001252E0] uppercase cursor-pointer text-left hover:text-[#001252E0]"
                : "font-normal font-primary text-[19px]/[23.82px] text-[#000000] uppercase cursor-pointer text-left hover:text-[#001252E0]"
            }
            onClick={() => handleChange(0)}
          >
            Blog
          </div>
          <div
            className={
              value === 1
                ? "font-normal font-primary text-[19px]/[23.82px] text-[#001252E0] uppercase cursor-pointer text-left hover:text-[#001252E0]"
                : "font-normal font-primary text-[19px]/[23.82px] text-[#000000] uppercase cursor-pointer text-left hover:text-[#001252E0]"
            }
            onClick={() => handleChange(1)}
          >
            Events
          </div>
        </div>
        <div className="w-full">
          <CustomTabPanel value={value} index={0}>
            <BlogPage shortStories={shortStories} data={filteredProperties} />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <EventsPage
              data={eventData}
              topEvents={topEvents}
              latestEvents={latestEvents}
            />
          </CustomTabPanel>
        </div>
      </div>
    </div>
  )
}
