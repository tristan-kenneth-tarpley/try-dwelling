import classNames from "classnames";

export type MonospaceProps = {
  className?: string;
  size?: "base" | "sm" | "xs";
};

export const monospaceClassName = ({ size, className }: MonospaceProps) =>
  classNames(
    "font-mono",
    {
      "text-base": size === "base",
      "text-sm": size === "sm",
      "text-xs": size === "xs",
    },
    className
  );