import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Renders a styled textarea element with the component's base utility classes and any additional classes or props.
 *
 * @param className - Additional CSS classes to merge with the component's base class list
 * @returns A textarea element with data-slot="textarea", merged className utilities, and all provided props applied
 */
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-border placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-white px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        //Auxiliary Class
        "md:text-base",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };