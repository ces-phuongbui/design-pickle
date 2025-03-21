import { Features } from "../types";
import { FeatureCard } from "./ui/feature-card";

const FeaturesSection = ({ title, subTitle, cards }: Features) => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">{title}</h2>
          {subTitle && <p className="text-sm text-gray-400">{subTitle}</p>}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <FeatureCard
              key={card.id}
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
