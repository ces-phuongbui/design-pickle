import { StrapiImage } from "@repo/ui/components/StrapiImage";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StrapiImage> = {
  title: "Components/StrapiImage",
  component: StrapiImage,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    className: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof StrapiImage>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/id/1/200/300",
    alt: "Sample Image",
    className: "w-20 h-20 object-cover",
    width: 200,
    height: 200,
  },
};

export const CustomStyling: Story = {
  args: {
    src: "https://picsum.photos/id/1/200/300",
    alt: "Styled Image",
    className: "w-40 h-40 rounded-lg border border-gray-300",
    width: 200,
    height: 200,
  },
};
