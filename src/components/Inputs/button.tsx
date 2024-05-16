import { Fonts } from "@/app"
import LoadingButton from "@mui/lab/LoadingButton"
import { styled } from "@mui/material/styles"
import { TailSpin } from "react-loader-spinner"

interface ButtonProps {
  loading?: boolean
  text?: string
  icon?: React.ReactNode
  onClick?: any
  disabled?: boolean
  sx?: any
}

export const StyledButton = styled(LoadingButton)({
  alignItems: "center",
  font: `normal normal 400 normal 27px/33.86px ${Fonts.primary}`,
  padding: "14.5px 16px",
  gap: 10,
  flexShrink: 0,
  width: "100%",
  height: 48,
  marginTop: 16,
  transition: "all 0.3s ease-in-out",
  borderRadius: 10,
  color: "#FFFFFF",
  cursor: "pointer",
  boxShadow: "0px 0px 0px 1px #12B76A",
  textTransform: "capitalize",
  "&.MuiLoadingButton-root": {
    backgroundColor: "#041658",
    boxShadow: "0px 4px 4px 0px #00000040",
    color: "#FFFFFF",
  },
  "&:hover": {
    backgroundColor: "#041658",
  },
  "&:focus": {
    backgroundColor: "#041658",
  },
  "&.Mui-disabled": {
    backgroundColor: "#041658",
  },
})

export function SubmitButton({
  loading,
  text,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      loading={loading}
      type="submit"
      disabled={disabled}
      loadingIndicator={
        loading && (
          <TailSpin
            height="30"
            width="30"
            color={"#FFFFFF"}
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )
      }
      {...rest}
    >
      <span>{!loading && text}</span>
    </StyledButton>
  )
}
