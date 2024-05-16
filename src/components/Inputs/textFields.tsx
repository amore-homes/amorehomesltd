import { FormHelperText } from "@mui/material"
import React, { InputHTMLAttributes } from "react"

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  id?: string
  placeholder?: string
  value?: string | number
  type?: string
  onChange?: any
  name?: string
  register?: any
  error?: boolean | undefined
  helperText?: string | undefined
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  id,
  placeholder,
  type,
  value,
  onChange,
  name,
  register,
  disabled,
  error,
  helperText,
  ...props
}) => {
  return (
    <div className="w-full relative flex flex-col gap-1">
      <label
        className="text-[#3E3E3E] text-[27]/[33.36px] font-normal font-primary tracking-[0.02em] capitalize disabled:text-[#98A2B3]"
        htmlFor={id}
      >
        {label}
      </label>
      {register ? (
        <>
          <input
            className={
              error === true
                ? `peer w-full px-4 py-4 rounded-[18px] bg-[#ECECEC] border border-solid border-[#FF0000] justify-start items-center gap-2.5 flex text-[#FF0000] font-inter text-sm/[20px] font-normal cursor-text hover:border-[#FF0000] focus:outline-none focus:border-[#FF0000]`
                : `peer w-full px-4 py-4 rounded-[18px] border border-solid border-border bg-[#ECECEC] justify-start items-center gap-3 flex font-inter text-sm/[20px] font-normal cursor-text text-[#101928] hover:border-primary focus:outline-none focus:border-primary disabled:bg-[#F5F5F5] disabled:hover:border-[#F5F5F5] disabled:cursor-not-allowed disabled:text-[#98A2B3] placeholder:text-[#98A2B3]`
            }
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            type={type}
            placeholder={placeholder}
            name={name}
            disabled={disabled}
            error={error ? error : undefined}
            {...register(name)}
            {...props}
          />
        </>
      ) : (
        <>
          <input
            id={id}
            className={
              error === true
                ? `peer w-full px-4 py-4 rounded-[18px] border border-solid border-[#FF0000] justify-start items-center gap-2.5 flex text-[#FF0000] bg-[#ECECEC] font-inter text-sm/[20px] font-normal cursor-text hover:border-[#FF0000] focus:outline-none focus:border-[#FF0000]`
                : `peer w-full px-4 py-4 rounded-[18px] border border-solid border-border bg-[#ECECEC] justify-start items-center gap-3 flex font-inter text-sm/[20px] font-normal cursor-text text-[#101928] hover:border-primary focus:outline-none focus:border-primary disabled:bg-[#F5F5F5] disabled:hover:border-[#F5F5F5] disabled:cursor-not-allowed disabled:text-[#98A2B3] placeholder:text-[#98A2B3]`
            }
            style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
            value={value}
            type={type}
            placeholder={placeholder}
            name={name}
            disabled={disabled}
            onChange={onChange}
            {...props}
          />
        </>
      )}
      {error && (
        <FormHelperText className="text-[#FF0000] text-xs font-inter font-normal ml-1">
          {helperText}
        </FormHelperText>
      )}
    </div>
  )
}

export default TextField
