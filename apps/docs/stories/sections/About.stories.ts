import { About } from "@repo/ui/components/About";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof About> = {
  title: "Section/About",
  component: About,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof About>;

export default meta;

type Story = StoryObj<typeof meta>;
export const AboutSection: Story = {
  args: {
    title: "About Our Company",
    description: "We are a leading provider of innovative solutions that help businesses transform their digital presence. Our team of experts is dedicated to delivering exceptional results that exceed expectations."
  },
};

export const ShortDescription: Story = {
  args: {
    title: "Who We Are",
    description: "A creative team passionate about design and technology."
  },
};
