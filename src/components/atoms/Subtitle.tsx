import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

type ParagraphProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

interface SubTitleProps extends ParagraphProps {
  children: ReactNode;
  className?: string;
  color?: string; // Allow custom color
}

const SubTitle: React.FC<SubTitleProps> = ({
  children,
  className,
  color, // Add color prop
  ...rest
}) => {
  const textColorStyle = color ? `text-${color}` : "text-white"; // Use custom color or default to white

  return (
    <p className={`font-bold ${textColorStyle} ${className}`} {...rest}>
      {children}
    </p>
  );
};

export default SubTitle;
