"use client";

import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { IButton } from "../types";

interface IntroduceHeaderProps {
  title: string;
  description: string;
  button: IButton;
}

export const IntroduceHeader: React.FC<IntroduceHeaderProps> = ({
  title,
  description,
  button,
}) => {
  const router = useRouter();

  const handleNavigation = () => {
    const { href = "/" } = button;
    router.push(href ?? "/");
  };

  return (
    <section className="relative w-full bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto flex ">
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="w-2/4">
            <p className="mb-8 text-lg text-gray-300 md:text-xl max-w-[80%]">
              {description}
            </p>

            <Button
              variant={button.type || "default"}
              className={`text-base font-medium ${
                button.color ? "bg-[`${button.color}`] text-black" : ""
              }`}
              onClick={handleNavigation}
              style={
                button.color ? { backgroundColor: button.color } : undefined
              }
            >
              {button.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
