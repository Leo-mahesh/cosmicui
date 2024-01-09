import React from "react";

interface InputProps {
  placeholder?: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  touched?: boolean | undefined;
  error?: string | undefined;
  noMt?: boolean;
  Icon?: any;
  RightIcon?: any;
  name: string;
  id: string;
  type?: string;
  onRightIconClick?: (event: boolean) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  onKeyDown = () => {},
  touched,
  error,
  noMt,
  Icon,
  RightIcon,
  name,
  id,
  type = "text",
  onRightIconClick,
}) => {
  const errorFound =
    touched && typeof error === "string" && error !== "underline";

  return (
    <div className={`flex relative flex-col ${noMt ? "mt-0" : "mt-6"} `}>
      <label
        className={`font-poppins text-sm font-semibold    ${
          errorFound ? "text-red" : "text-textSecondary"
        }`}
      >
        {label}
      </label>
      {Icon && (
        <Icon
          className={`absolute top-[27px]     ${
            errorFound ? " text-red" : "text-textSecondary"
          }`}
          size={18}
        />
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className={`mt-1  outline-none focus:outline-none text-poppins font-normal  text-md
        border-b 
        ${Icon ? "pl-[24px]" : "pl-[0px]"} 
        ${
          errorFound
            ? "border-red text-red"
            : "text-textPrimary border-textPrimary "
        }
        ${RightIcon ? "pr-[22px]" : "pr-[0px]"}
        `}
      />

      {RightIcon && (
        <RightIcon
          onClick={() => {
            if (onRightIconClick) {
              onRightIconClick(type == "text" ? false : true);
            }
          }}
          className={`absolute top-[27px] right-[0px]    ${
            errorFound ? " text-red" : "text-textSecondary"
          }`}
          size={18}
        />
      )}

      {errorFound && (
        <p className="text-[10px] mt-1 text-red font-mont">{error}</p>
      )}
    </div>
  );
};

export default Input;
