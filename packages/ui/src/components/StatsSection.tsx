import React from "react";
import { StatCard } from "./ui/stat-card";
import { Stat } from "../types";

const StatsSection = ({ title, subTitle, cards }: Stat) => {
  console.log("stat: ", title, subTitle, cards);
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          <p className="text-gray-400">{subTitle}</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <StatCard
              key={index}
              value={card.value}
              label={card.label}
              subLabel={card.subLabel ?? ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
