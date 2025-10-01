import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-stevens-md font-stevens-bold transition-all duration-stevens-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stevens-primary/20 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-stevens-primary text-stevens-white shadow-stevens-md hover:bg-stevens-maroon-dark hover:shadow-stevens-lg",
        destructive:
          "bg-stevens-error text-stevens-white shadow-stevens-md hover:bg-stevens-error/90 hover:shadow-stevens-lg",
        outline:
          "border-2 border-stevens-primary bg-stevens-white text-stevens-primary shadow-stevens-sm hover:bg-stevens-primary hover:text-stevens-white hover:shadow-stevens-md",
        secondary:
          "border-2 border-stevens-primary text-stevens-primary bg-stevens-white shadow-stevens-sm hover:bg-stevens-primary hover:text-stevens-white hover:shadow-stevens-md",
        ghost: "hover:bg-stevens-gray-100 hover:text-stevens-gray-900",
        link: "text-stevens-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-stevens-lg py-stevens-md text-stevens-lg",
        sm: "h-10 px-stevens-md py-stevens-sm text-stevens-base",
        lg: "h-14 px-stevens-xl py-stevens-lg text-stevens-xl",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
