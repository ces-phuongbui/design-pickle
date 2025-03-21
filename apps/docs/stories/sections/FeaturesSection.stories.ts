import type { Meta, StoryObj } from "@storybook/react";
import FeaturesSection from "@repo/ui/components/FeaturesSection";
import { ButtonType } from "@repo/ui/types/index";

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
    title: "Graphic Design Without Limits",
    subTitle: "Everything you need to scale your creative content",
    cards: [
      {
        id: 1,
        title: "Creative management platform",
        description:
          "An all in one solution built specifically to simplify the creative process in one place.",
        backgroundImage: {
          id: "",
          documentId: "",
          url: "/uploads/computer3_963b925579.jpg",
          alternativeText: null,
          name: "",
        },
        cta: {
          label: "Read More",
          type: ButtonType.DEFAULT,
        },
      },
      {
        id: 2,
        title: "Designers on demand",
        description:
          "Our easy-to-use, interactive software simplifies the convoluted creative ecosystem.",
        backgroundImage: {
          id: "",
          documentId: "",
          url: "/uploads/computer1_ebc75547c5.jpg",
          alternativeText: null,
          name: "designers",
        },
        cta: {
          label: "Get Started",
          type: ButtonType.DEFAULT,
        },
      },
      {
        id: 3,
        title: "Flat-rate design",
        description:
          "Supercharge your creative output with unlimited designs. No surprise fees.",
        backgroundImage: {
          id: "",
          documentId: "",
          url: "/uploads/computer2_b441ceebaa.jpg",
          alternativeText: null,
          name: "flat-rate",
        },
        cta: {
          label: "View Pricing",
          type: ButtonType.DEFAULT,
        },
      },
    ],
  },
};

export const WithoutImages: Story = {
  args: {
    title: "Our Services",
    subTitle: "Comprehensive design solutions for your needs",
    cards: [
      {
        id: 1,
        title: "UI/UX Design",
        description: "Create beautiful and intuitive user interfaces.",
        cta: {
          label: "Read More",
          type: ButtonType.DEFAULT,
        },
      },
      {
        id: 2,
        title: "Brand Design",
        description: "Build a strong and consistent brand identity.",
        cta: {
          label: "Get Started",
          type: ButtonType.DEFAULT,
        },
      },
      {
        id: 3,
        title: "Print Design",
        description: "Professional print materials that stand out.",
        cta: {
          label: "View Pricing",
          type: ButtonType.DEFAULT,
        },
      },
    ],
  },
};
