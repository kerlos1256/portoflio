import React, {
  DetailedHTMLProps,
  FC,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useState,
} from "react";

type htmlProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >;

interface props extends htmlProps {
  label: string;
  name: string;
  empty: boolean;
  multiline?: boolean;
}

const Input: FC<props> = ({
  label,
  name,
  empty,
  multiline = false,
  ...props
}) => {
  const [focus, setFocus] = useState<boolean>();

  if (multiline) {
    return (
      <div className="relative w-full">
        <label
          className={`${
            focus
              ? "-translate-y-full p-0 text-DarkCyan"
              : !empty
              ? "-translate-y-full p-0  "
              : "opacity-60 px-4 py-2 text-gray-300"
          } transition-all duration-500 absolute pointer-events-none `}
          htmlFor={name}
        >
          {label}
        </label>
        <textarea
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          id={name}
          name={name}
          className="outline-none bg-transparent w-full p-2 resize-y min-h-[2.5rem] max-h-32"
          {...props}
        />
        <div className="w-full h-[0.125rem] bg-white"></div>
        <div
          className={`${
            focus ? "w-full" : "w-0"
          } h-[0.125rem] absolute bottom-0 left-1/2 -translate-x-1/2 bg-DarkCyan origin-center duration-500 transition-all`}
        ></div>
      </div>
    );
  } else {
    return (
      <div className="relative w-96">
        <label
          className={`${
            focus
              ? "-translate-y-full p-0 text-DarkCyan"
              : !empty
              ? "-translate-y-full p-0  "
              : "opacity-60 px-4 py-2 text-gray-300"
          } transition-all duration-500 absolute pointer-events-none `}
          htmlFor={name}
        >
          {label}
        </label>
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          id={name}
          name={name}
          className="outline-none bg-transparent w-full p-2"
          {...props}
        />
        <div className="w-full h-[0.0625rem] bg-white"></div>
        <div
          className={`${
            focus ? "w-full" : "w-0"
          } h-[0.0625rem] absolute bottom-0 left-1/2 -translate-x-1/2 bg-DarkCyan origin-center duration-500 transition-all`}
        ></div>
      </div>
    );
  }
};

export default Input;
