import React, { ReactNode, DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface ImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className, ...rest }) => {
  return <img src={src} alt={alt} className={` ${className}`} {...rest} />;
};

export default Image;
