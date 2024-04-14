import { cn } from "@/lib/utils";
import React from "react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const StarIcon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 495.65 481.19"
    fill="#ffde31"
    {...props}
    className={cn("inline-block", props.className)}
  >
    <path d="M495.65,292.56v-96l-203.32,20.53c-.59-1.11-1.22-2.19-1.88-3.25L409.91,48,326.77,0l-77.15,190.36c-.58-.02-1.15-.04-1.73-.04s-1.19,.02-1.78,.04L168.96,0,85.82,48l119.49,165.88c-.66,1.05-1.28,2.12-1.86,3.21L0,196.56v96l203.49-28.37c.57,1.06,1.17,2.1,1.81,3.12l-119.48,165.89,83.14,48,77.15-190.37c.59,.02,1.18,.04,1.78,.04s1.15-.02,1.73-.04l77.15,190.36,83.14-48-119.46-165.84c.64-1.02,1.26-2.07,1.83-3.14l203.37,28.36Z" />
  </svg>
);
