import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCard } from "@repo/ui/components/ui/feature-card";

const meta: Meta<typeof FeatureCard> = {
  title: "UI/FeatureCard",
  component: FeatureCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
  args: {
    title: "Creative management platform",
    description:
      "An all in one solution built specifically to simplify the creative process in one place.",
    backgroundImage: "/images/creative-platform.jpg",
    ctaText: "Learn More",
    ctaHref: "/platform",
  },
};

export const WithoutBackground: Story = {
  args: {
    title: "Designers on demand",
    description: "Access to professional designers whenever you need them.",
    ctaText: "Get Started",
    ctaHref: "/designers",
  },
};
