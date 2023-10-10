import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

interface DivProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const Box: React.FC<DivProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Box;
