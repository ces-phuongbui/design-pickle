import Image from "next/image";
import { getStrapiURL } from "../lib/utils";

interface StrapiImageProps {
  src: string;
  alt: string | null;
  className?: string;
  [key: string]: string | number | boolean | undefined | null;
}

export function StrapiImage({
  src,
  alt,
  className,
  ...rest
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);

  if (!imageUrl) {
    return null;
  }

  return (
    <Image
      src={imageUrl}
      alt={alt ?? "No alt text provided."}
      className={className}
      {...rest}
    />
  );
}

export function getStrapiMedia(url: string | null): string | null {
  if (!url) {
    return null;
  }

  // Check if URL is already absolute or data URL
  if (/^(data:|http|\/\/)/.test(url)) {
    return url;
  }

  return `${getStrapiURL()}${url}`;
}
