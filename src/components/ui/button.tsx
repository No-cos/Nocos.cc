import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // "inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-[700] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2  disabled:pointer-events-none disabled:opacity-50",
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-base font-[700] transition-all duration-100",
   
  {
    variants: {
      variant: {
        default: "bg-nocosPurple-500 hover:bg-nocosPurple-600  px-6  w-full lg:w-[194px]  text-white",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
        "bg-nocosLemon-200 hover:bg-nocosLemon-300  px-6  w-full lg:w-[194px]  text-black",

        ghost: "bg-slate-300 bg-opacity-20 text-white hover:bg-opacity-30 ",

        link: "text-primary underline-offset-4 hover:underline",
        formBtn: "bg-nocosPurple-500 hover:bg-nocosPurple-600  px-10   lg:w-[120px] rounded-lg  md:text-lg text-base text-white",
      },
      size: {
        default: "h-[56px] px-4 py-2 ",
        sm: "h-[32px] rounded-xl px-3 font-[500] leading-3 ",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
