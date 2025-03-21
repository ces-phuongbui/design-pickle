import { Hero } from "@repo/ui/components/Hero";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Hero> = {
  title: "Section/Hero",
  component: Hero,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultHero: Story = {
  args: {
    headline: "Transform Your Digital Presence",
    excerpt: "We help businesses create stunning digital experiences that engage customers and drive growth.",
    links: [
      { title: "Get Started", link: "https://example.com/get-started" },
      { title: "Learn More", link: "https://example.com/learn-more" }
    ]
  },
};

export const SingleLink: Story = {
  args: {
    headline: "Simple and Effective Solutions",
    excerpt: "Our streamlined approach delivers results without the complexity.",
    links: [
      { title: "Contact Us", link: "https://example.com/contact" }
    ]
  },
};

export const MultipleLinks: Story = {
  args: {
    headline: "Complete Suite of Services",
    excerpt: "Explore our range of specialized services designed to meet your unique needs.",
    links: [
      { title: "Design", link: "https://example.com/design" },
      { title: "Development", link: "https://example.com/development" },
      { title: "Marketing", link: "https://example.com/marketing" }
    ]
  },
}; 