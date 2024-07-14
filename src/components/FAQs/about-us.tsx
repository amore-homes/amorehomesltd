import MuiAccordion, { AccordionProps } from "@mui/material/Accordion"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import { styled } from "@mui/material/styles"
import * as React from "react"
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

export default function AboutUsFAQs({ data }: any) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1")

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }

  return (
    <section
      id="morefinfo-section"
      className="w-full bg-white flex flex-col sm:gap-4 pb-4 pt-[40px] md:py-[40px] xl:py-[60px]  px-4 md:px-8 lg:px-[38px] xl:px-[60px] xxl:px-[96px] relative"
      data-aos="fade-left"
      data-aos-once={true}
    >
      <div className="w-full flex flex-col gap-8">
        <div
          className="w-full flex flex-col relative gap-10"
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
              General information
            </span>
          </h1>
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full max-w-[1083px]">
            {data?.map((faq: any, index: number) => {
              return (
                <Accordion
                  key={`FAQ-${index}`}
                  expanded={expanded === `panel${index + 1}`}
                  onChange={handleChange(`panel${index + 1}`)}
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
                      className="font-normal font-primary text-lg/[21.6px] text-left text-secondary"
                    >
                      {`${index + 1}. ${faq.question}`}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="font-normal font-primary text-[16px]/[21.6px] text-left text-secondary tracking-[0.18px]">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
