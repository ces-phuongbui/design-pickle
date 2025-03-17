import { Features } from "../types";
import { FeatureCard } from "./ui/feature-card";

const FeaturesSection = ({ title, subtitle, cards }: Features) => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">{title}</h2>
          {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description ?? ""}
              backgroundImage={card.backgroundImage?.url ?? ""}
              ctaText={card.cta?.label}
              ctaHref={card.cta?.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
