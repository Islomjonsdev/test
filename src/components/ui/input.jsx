import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, inputForm, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        inputForm ? "py-[5px] px-[12px] border border-[#D9D9D9] rounded-[2px] outline-none max-w-[274px] w-full d-block" : ""
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
