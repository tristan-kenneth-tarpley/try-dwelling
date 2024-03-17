import classNames from "classnames";
import { monospaceClassName } from "../Monospace/styles";

export interface LinkProps {
  href: string;
  variant?: "text" | "mono";
}

export const linkClassName = ({variant}: LinkProps) => classNames(
  "underline hover:text-stone-600", 
  {
    "font-sans": variant === "text",
    uppercase: variant === "mono",
    [monospaceClassName({ size: "base" })]: variant === "mono",
  }
);