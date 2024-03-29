import classNames from "classnames";
import { monospaceClassName } from "../typography/Monospace/styles";

export interface ButtonProps {
  className?: string;
  variant?: "primary" | "outline" | "ghost" | "danger";
  rel?: string;
  target?: string;
  href?: string;
  id?: string;
  type?: "button" | "submit";
  size?: "sm" | "base" | "lg";
}

export const buttonClassName = (props: ButtonProps) => {
  const {
    variant = "primary",
    size = "base",
  } = props;

  const monospaceSize =
    (
      {
        sm: "xs",
        base: "sm",
        lg: "base",
      } as const
    )[size] ?? "base";

  return classNames(
    "rounded-md px-2 py-4 border border-solid duration-200",
    monospaceClassName({ size: monospaceSize, className: "uppercase" }),
    {
      primary:
        "bg-yellow-400 hover:bg-stone-800 hover:text-white border-stone-800",
      outline:
        "bg-transparent hover:bg-stone-800 hover:text-white border-stone-800",
      ghost: "border-transparent hover:bg-stone-800 hover:text-white",
      danger: "border-red-500 bg-red-500 hover:bg-red-600 hover:text-white",
    }[variant],
    {
      sm: "px-1 py-2",
      base: "px-1 py-2",
      lg: "px-2 py-4",
    }[size]
  );
};