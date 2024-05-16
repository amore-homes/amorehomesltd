import * as React from "react"
import { styled } from "@mui/material/styles"
import MuiAccordion, {
  AccordionProps,
  AccordionSlots,
} from "@mui/material/Accordion"
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import { Divider, Fade } from "@mui/material"
import { ArrowDown } from "../SVGs"

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  margin: "16px 0",
  borderRadius: 16,
  "&::before": {
    display: "none",
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowDown />} {...props} />
))(() => ({
  padding: "4px 18px",
  backgroundColor: "#F4F4F4",
  borderRadius: 4,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: 8,
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "16px 28px 16px 28px",
}))

export default function FAQSection() {
  const [type, setType] = React.useState<string>("")
  const [expanded, setExpanded] = React.useState<string | false>("panel1")
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    fetch("http://localhost:5001/faqs")
      .then((response) => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => console.error("Error fetching posts:", error))
  }, [])

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }
  const handleTypeChange = (type: string) => {
    setType(type)
  }
  const questionData =
    type === "property"
      ? data?.filter(
          (item: {
            id: number
            question: string
            answer: string
            type: string
          }) => item.type === "property"
        )
      : type === "investor"
      ? data?.filter(
          (item: {
            id: number
            question: string
            answer: string
            type: string
          }) => item.type === "investor"
        )
      : type === "others"
      ? data?.filter(
          (item: {
            id: number
            question: string
            answer: string
            type: string
          }) => item.type === "others"
        )
      : data
  return (
    <div className="relative w-full flex flex-col item-center justify-center gap-[90px]">
      <div
        className="w-full  flex flex-col justify-center items-center"
        data-aos="fade-up"
      >
        <h4 className="w-full font-bold font-primary text-[20px]/[28px] lg:text-[28px]/[34.53px] xl:text-[40px]/[54.53px] xxl:text-[64px]/[10.25px] text-center text-[#100808] tracking-[0.36px] uppercase">
          Investing In Real Estate In Abuja
        </h4>
        <div className="w-full flex gap-4 lg:gap-20 justify-center items-center">
          <div className="flex justify-center items-center gap-2">
            <span className="text-xs text-primary">&#9679;</span>{" "}
            <p
              className={
                type === "property"
                  ? `w-full max-w-[473px] flex justify-center items-center gap-2 font-normal font-primary text-primary text-[12px]/[18px] lg:text-[24px]/[30.09px] text-center uppercase underline decoration-[4px] cursor-pointer my-0`
                  : `w-full max-w-[473px] flex justify-center items-center gap-2 font-normal font-primary text-primary text-[12px]/[18px] lg:text-[24px]/[30.09px] text-center uppercase cursor-pointer my-0`
              }
              onClick={() => handleTypeChange("property")}
            >
              Properties
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <span className="text-xs text-primary">&#9679;</span>{" "}
            <p
              className={
                type === "investor"
                  ? `w-full max-w-[473px] font-normal font-primary text-primary text-[12px]/[18px] lg:text-[24px]/[30.09px] text-center uppercase underline decoration-[4px] underline-offset-8 cursor-pointer my-0`
                  : `w-full max-w-[473px] font-normal font-primary text-primary text-[12px]/[18px] lg:text-[24px]/[30.09px] text-center uppercase cursor-pointer my-0`
              }
              onClick={() => handleTypeChange("investor")}
            >
              Investor relations
            </p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <span className="text-xs text-primary">&#9679;</span>{" "}
            <p
              className={
                type === "others"
                  ? `w-full max-w-[473px] flex justify-center items-center gap-2 font-normal font-primary text-primary text-[12px]/[18px] lg:text-[24px]/[30.09px] text-center uppercase underline decoration-[4px] underline-offset-8 cursor-pointer my-0`
                  : `w-full max-w-[473px] flex justify-center items-center gap-2  font-normal font-primary text-primary text-[12px]/[18px] lg:text-[24px]/[30.09px] text-center uppercase cursor-pointer my-0`
              }
              onClick={() => handleTypeChange("others")}
            >
              Miscellaneous
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div
          className="w-full max-w-[1083px]"
          data-aos="fade-up"
          data-aos-once={true}
        >
          {questionData?.map(
            (
              faq: {
                id: number
                question: string
                answer: string
                type: string
              },
              index
            ) => {
              return (
                <Accordion
                  key={`FAQ-${index}`}
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
                  slots={{ transition: Fade as AccordionSlots["transition"] }}
                  slotProps={{ transition: { timeout: 400 } }}
                  sx={{
                    "&::before": {
                      display: "none",
                    },
                    "& .MuiAccordion-region": {
                      height: expanded === `panel${index + 1}` ? "auto" : 0,
                    },
                    "& .MuiAccordionDetails-root": {
                      display:
                        expanded === `panel${index + 1}` ? "#041658" : "black",
                    },
                  }}
                >
                  <AccordionSummary
                    aria-controls={`panel${index + 1}d-content`}
                    id={`panel${index + 1}d-header`}
                  >
                    <Typography
                      variant="caption"
                      className="font-normal font-gordita text-lg/[21.6px] text-left text-[#041658]"
                    >
                      {`${index + 1}. ${faq.question}`}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="font-normal font-gordita text-[16px]/[21.6px] text-left text-[#041658] tracking-[0.18px]">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )
            }
          )}
        </div>
      </div>
    </div>
  )
}
