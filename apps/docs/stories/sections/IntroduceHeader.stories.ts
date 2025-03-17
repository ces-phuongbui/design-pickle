import type { Meta, StoryObj } from "@storybook/react";
import {
  IntroduceHeader,
  ButtonType,
} from "@repo/ui/components/IntroduceHeader";

const meta: Meta<typeof IntroduceHeader> = {
  title: "Sections/IntroduceHeader",
  component: IntroduceHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof IntroduceHeader>;

export const Primary: Story = {
  args: {
    title: "Graphic Design Services",
    description:
      "Scale your creative content quickly with flat-rate, on-demand graphic design services. Our team of designers are experienced, vetted, and dedicated to making your life easier.",
    button: {
      label: "Get Started",
      href: "/get-started",
      type: ButtonType.DEFAULT,
      color: "#C3F53B",
    },
  },
};

export const WithOutlineButton: Story = {
  args: {
    title: "Design Services",
    description: "Professional design services on demand.",
    button: {
      label: "Learn More",
      href: "/learn-more",
      type: ButtonType.OUTLINE,
    },
  },
};
