import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

type HeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;

interface TitleProps extends HeadingProps {
  children: ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className, ...rest }) => {
  return (
    <h1 className={`font-bold text-white ${className}`} {...rest}>
      {children}
    </h1>
  );
};

export default Title;
