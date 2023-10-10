import React, { ReactNode, HTMLAttributes, DetailedHTMLProps } from "react";

type SpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

interface CustomSpanProps extends SpanProps {
  children: ReactNode;
  className?: string;
}

const Span: React.FC<CustomSpanProps> = ({ children, className, ...rest }) => {
  return (
    <span className={`${className}`} {...rest}>
      {children}
    </span>
  );
};

export default Span;
