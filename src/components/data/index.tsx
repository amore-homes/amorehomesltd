import { Fonts } from "@/app"
import { FormControl, MenuItem, styled } from "@mui/material"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

export const MenuProps = {
  "& .Mui-selected": {
    backgroundColor: "#FFFFFF",
  },
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
      padding: "16px 12px",
      display: "flex",
      alignItems: "flex-start",
      gap: 8,
      borderRadius: 8,
      border: `1px solid #FFF`,
    },
  },
}
export const StyledMenuItem = styled(MenuItem)({
  width: 280,
  font: `normal normal 400 normal 20px/25.08px ${Fonts.primary}`,
  color: "#000000",
  padding: 4,
  background: "#FFFFFF",
  "&:hover": {
    background: "#FFFFFF",
  },

  "&:focused": {
    background: "#FFFFFF",
    font: `normal normal 400 normal 20px/25.08px ${Fonts.primary}`,
  },
})
export const StyledSelectFormControl = styled(FormControl)({
  width: "100%",
  "& label": {
    font: `normal normal 400 normal 22px/27.59px ${Fonts.primary}`,
  },
  "& label.Mui-focused": {
    color: "#8A8A8A",
  },
  "& .MuiInput-underline:after": {
    borderBottom: "none",
  },
})

export function moveItemToFront(array: any, item: any) {
  const ceoIndex = array.findIndex((person: any) => person.position === item)
  if (ceoIndex > -1) {
    const [ceo] = array.splice(ceoIndex, 1)
    array.unshift(ceo)
  }
  return array
}
