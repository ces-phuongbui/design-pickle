import { cn } from "@repo/ui/lib/utils";
import { StrapiImage } from "../StrapiImage";

interface LogoCarouselProps {
  logoUrl: string;
  name: string;
  className?: string;
}

export const LogoCarousel = ({
  logoUrl,
  name,
  className,
}: LogoCarouselProps) => {
  return (
    <div
      className={cn(
        "flex items-center bg-transparent p-4 rounded-md space-x-3",
        className,
      )}
    >
      <div className="relative w-8 h-8">
        <StrapiImage
          alt={`${name} logo`}
          src={logoUrl}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <span className="text-white text-lg font-medium">{name}</span>
    </div>
  );
};
