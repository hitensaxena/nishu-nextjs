import { ImageProps as NextImageProps } from 'next/image';
import NextImage from 'next/image';

interface ImageProps extends Omit<NextImageProps, 'width' | 'height'> {
  width?: number;
  height?: number;
  className?: string;
}

const Image = ({ src, alt, className = '', width = 800, height = 600, ...props }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};

export default Image;