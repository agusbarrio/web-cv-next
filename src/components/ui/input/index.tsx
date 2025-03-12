import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & { label: string }
>(
  (
    { className, label, required, name, className: classNameInput, ...props },
    ref
  ) => {
    return (
      <div className={cn("relative", classNameInput)}>
        <input
          id={name}
          className="peer w-full bg-transparent border-b border-gray-700 text-gray-300 pb-2 pt-6 focus:outline-none transition-all duration-300 placeholder-transparent relative focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
          ref={ref}
          placeholder=" "
          required={required}
          name={name}
          {...props}
        />
        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-l from-blue-800 to-sky-400 transition-all duration-300 peer-focus:w-full" />
        <label
          htmlFor={name}
          className="absolute left-0 -top-0.5 text-xs text-gray-500 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-xs  transition-all duration-200"
        >
          {label}
          {required && <span className="text-gray-500"> *</span>}
        </label>
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
