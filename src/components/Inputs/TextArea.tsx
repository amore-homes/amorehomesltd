import { FormHelperText } from "@mui/material"
import React, { TextareaHTMLAttributes } from "react"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  id?: string
  placeholder?: string
  type?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  name?: string
  value?: any
  register?: any
  error?: boolean | undefined
  helperText?: string | undefined
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  id,
  placeholder,
  value,
  type,
  onChange,
  name,
  register,
  disabled,
  error,
  helperText,
  ...rest
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
        <textarea
          id={id}
          className={
            error
              ? "resize-none bg-[#ECECEC] w-full min-h-[140px] px-4 py-3.5 rounded-lg border border-solid border-[#FF0000] inline-flex  justify-start items-start gap-2.5 text-[#FF0000] font-inter text-sm font-normal cursor-text hover:border-[#FF0000] focus:outline-none focus:border-[#FF0000]"
              : "resize-none bg-[#ECECEC] w-full min-h-[140px] px-4 py-3.5 rounded-lg border border-solid border-border inline-flex justify-start items-start gap-2.5 text-[#101928] placeholder:text-[#98A2B3] font-inter text-sm font-normal cursor-text hover:border-primary focus:outline-none focus:border-primary disabled:bg-[#F5F5F5] disabled:hover:border-[#F5F5F5] disabled:cursor-not-allowed disabled:text-[#8C8C8C]"
          }
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          error={error ? error : undefined}
          {...register(name)}
          {...rest}
        />
      ) : (
        <textarea
          id={id}
          value={value}
          name={name}
          className={
            error
              ? "resize-none w-full h-24 px-4 py-3.5 rounded-lg border border-solid border-[#FF0000] inline-flex  justify-start items-start gap-2.5 text-[#FF0000] font-inter text-sm font-normal cursor-text hover:border-[#FF0000] focus:outline-none focus:border-[#FF0000]"
              : "resize-none w-full h-24 px-4 py-3.5 rounded-lg bg-[#1F1F1F] border border-solid border-border-dark inline-flex  justify-start items-start gap-2.5 text-greytext font-inter text-sm font-normal cursor-text hover:border-primary-darker focus:outline-none focus:border-primary-darker disabled:bg-[#F5F5F5] disabled:hover:border-[#F5F5F5] disabled:cursor-not-allowed disabled:text-[#8C8C8C] "
          }
          onChange={onChange}
          placeholder={placeholder}
          {...rest}
        />
      )}
      <FormHelperText className="text-[#FF0000] text-xs font-inter font-normal ml-1">
        {helperText}
      </FormHelperText>
    </div>
  )
}

export default TextArea
