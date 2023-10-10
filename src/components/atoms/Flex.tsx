import React, { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react";

interface DivProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const Flex: React.FC<DivProps> = ({ children, className, ...rest }) => {
  return (
    <div className={`flex ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
