import type { Meta, StoryObj } from "@storybook/react";
import FeaturesSection from "@repo/ui/components/FeaturesSection";

const meta: Meta<typeof FeaturesSection> = {
  title: "Sections/FeaturesSection",
  component: FeaturesSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeaturesSection>;

export const Default: Story = {
  args: {
    sectionTitle: "Graphic Design Without Limits",
    subtitle: "Everything you need to scale your creative content",
    cards: [
      {
        title: "Creative management platform",
        description:
          "An all in one solution built specifically to simplify the creative process in one place.",
        backgroundImage: "/images/creative-platform.jpg",
        ctaText: "Learn More",
        ctaHref: "/platform",
      },
      {
        title: "Designers on demand",
        description:
          "Our easy-to-use, interactive software simplifies the convoluted creative ecosystem.",
        backgroundImage: "/images/designers.jpg",
        ctaText: "Get Started",
        ctaHref: "/designers",
      },
      {
        title: "Flat-rate design",
        description:
          "Supercharge your creative output with unlimited designs. No surprise fees.",
        backgroundImage: "/images/flat-rate.jpg",
        ctaText: "View Pricing",
        ctaHref: "/pricing",
      },
    ],
  },
};

export const WithoutImages: Story = {
  args: {
    sectionTitle: "Our Services",
    subtitle: "Comprehensive design solutions for your needs",
    cards: [
      {
        title: "UI/UX Design",
        description: "Create beautiful and intuitive user interfaces.",
        ctaText: "Learn More",
        ctaHref: "/ui-ux",
      },
      {
        title: "Brand Design",
        description: "Build a strong and consistent brand identity.",
        ctaText: "Explore",
        ctaHref: "/brand",
      },
      {
        title: "Print Design",
        description: "Professional print materials that stand out.",
        ctaText: "See Examples",
        ctaHref: "/print",
      },
    ],
  },
};
