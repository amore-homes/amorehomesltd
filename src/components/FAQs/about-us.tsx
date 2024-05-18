import { Fade } from "@mui/material"
import MuiAccordion, {
  AccordionProps,
  AccordionSlots,
} from "@mui/material/Accordion"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import * as React from "react"
import { ArrowDown } from "../SVGs"
import { aboutUsFaqs as data } from "../data/util"

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

export default function AboutUsFAQs() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1")

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }

  return (
    <div className="relative w-full flex flex-col item-center justify-center gap-[90px]">
      <div className="w-full flex flex-col items-center justify-center">
        <div
          className="w-full max-w-[1083px]"
          data-aos="fade-up"
          data-aos-once={true}
        >
          {data?.map(
            (
              faq: {
                id: number
                question: string
                answer: string
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
