import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// variants
//default, outline, contained

const buttonVariants = cva(
  "flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4 py-2 ml-0",
  {
    variants: {
      variant: {
        default:
          "text-white bg-transparent border border-transparent hover:border-gray-500",
        outline: "text-white bg-transparent border border-border-gray-500",
        contained: "text-white bg-white border border-white ",
        icon: "text-buttonGray bg-transparent border border-buttonGray p-1",
        highlight:
          "text-white bg-gradient-to-l from-blue-800 to-sky-400 font-spacemono text-2xs rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  endIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, endIcon, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {endIcon && <span className="ml-2">{endIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
