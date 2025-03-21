import Link from "next/link";
import { StrapiImage } from "../StrapiImage";
import { Button } from "./button";

export interface FeatureCardProps {
  title: string;
  description: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const FeatureCard = ({
  title,
  description,
  backgroundImage,
  ctaText,
  ctaHref,
}: FeatureCardProps) => {
  return (
    <div
      data-testid="feature-card"
      className="relative h-[600px] overflow-hidden rounded-lg bg-gradient-to-b from-purple-600 to-teal-500 p-6 text-white"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <StrapiImage
            alt={title}
            src={backgroundImage}
            width={400}
            height={600}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/50 to-teal-900/90" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <h3 className="text-3xl font-bold">{title}</h3>

        <div className="space-y-4">
          <p className="text-xl text-gray-100 mb-5">{description}</p>
          <Link href={ctaHref ?? ""}>
            <Button
              variant="link"
              className="group px-0 text-white hover:no-underline bg-white bg-opacity-20 p-4"
            >
              {ctaText ?? "Read more"}{" "}
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
