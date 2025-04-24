import Image from 'next/image';

const Icon = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={24}
      height={24}
      className={className}
    />
  );
};

export default Icon;