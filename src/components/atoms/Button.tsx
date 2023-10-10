import React, { ReactNode, MouseEvent, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "black" | "red" | "white"; // Define variant variants
  size?: "small" | "medium" | "large"; // Define size variants
}

export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  const getColorClass = () => {
    switch (variant) {
      case "black":
        return "bg-black";
      case "white":
        return "bg-white";
      default:
        return "bg-blue-500";
    }
  };

  const getTextColorClass = () => {
    switch (variant) {
      case "black":
        return "text-blue-500";
      case "white":
        return "text-black";
      default:
        return "text-white";
    }
  };

  const getBorderClass = () => {
    switch (variant) {
      case "black":
        return "border-2 border-slate";
      case "white":
        return "border-2 border-transparent";
      default:
        return "border-2 border-transparent";
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "p-1 text-sm";
      case "large":
        return "p-3 text-lg";
      default:
        return "p-2";
    }
  };

  return (
    <button
      className={`rounded-full p-2 font-bold  ${getSizeClass()} ${getColorClass()} ${getTextColorClass()} ${getBorderClass()} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
