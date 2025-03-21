"use client";

import { cn } from "../lib/utils";
import { ICarouselItem, SocialCarousel } from "../types";
import { StrapiImage } from "./StrapiImage";
import { CarouselItem } from "./ui/carousel";
import { CarouselAutoPlay } from "./ui/carouselAutoPlay";
import { LogoCarousel } from "./ui/logoCarousel";

export interface LogoItem {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BannerProps extends SocialCarousel {
  className?: string;
}

export const RenderSocialLinks = ({ logos }: { logos: ICarouselItem[] }) => {
  return (
    <CarouselAutoPlay className="w-full absolute bottom-0">
      {logos.map((item) => (
        <CarouselItem key={item.id} className="md:basis-1/3 lg:basis-1/6">
          <LogoCarousel
            logoUrl={item.image?.url}
            name={item.name}
            className="w-full max-w-xs"
          />
        </CarouselItem>
      ))}
    </CarouselAutoPlay>
  );
};

export const Banner = ({ className, bannerImage, logos }: BannerProps) => {
  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
        <StrapiImage
          alt={bannerImage.alternativeText}
          src={bannerImage.url}
          width={800}
          height={200}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
      </div>
      <RenderSocialLinks logos={logos} />
    </section>
  );
};

export default Banner;
