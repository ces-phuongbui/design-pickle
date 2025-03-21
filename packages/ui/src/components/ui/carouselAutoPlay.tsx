import { cn } from "@repo/ui/lib/utils";
import { Carousel, CarouselContent } from "./carousel";

export const CarouselAutoPlay = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Carousel
      className={cn("w-full", className)}
      opts={{
        loop: true,
      }}
      autoplay={true}
      autoplayInterval={2500}
    >
      <CarouselContent>{children}</CarouselContent>
    </Carousel>
  );
};
