import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "@repo/ui/components/Banner";

const meta: Meta<typeof Banner> = {
  title: "Sections/Banner",
  component: Banner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Banner>;

const mockLogos = [
  {
    id: 1,
    href: "https://cdn-icons-png.flaticon.com/128/2111/2111463.png",
    name: "Instagram",
  },
  {
    id: 2,
    href: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    name: "Youtube",
  },
  {
    id: 3,
    href: "https://cdn-icons-png.flaticon.com/512/4494/4494477.png",
    name: "Twitter",
  },
  {
    id: 4,
    href: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    name: "Facebook",
  },
  {
    id: 5,
    href: "https://cdn-icons-png.flaticon.com/512/3046/3046121.png",
    name: "Tiktok",
  },
  {
    id: 6,
    href: "https://cdn-icons-png.flaticon.com/512/145/145808.png",
    name: "Pinterest",
  },
  {
    id: 7,
    href: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
    name: "Telegram",
  },
  {
    id: 8,
    href: "https://cdn-icons-png.flaticon.com/512/1409/1409941.png",
    name: "Snapchat",
  },
  {
    id: 9,
    href: "https://cdn-icons-png.flaticon.com/512/2504/2504957.png",
    name: "Whatsapp",
  },
];

export const Default: Story = {
  args: {
    bannerImage:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c99bb7213868729.674e2852b904c.jpg",
    bannerAlt: "Banner Image",
    logos: mockLogos,
  },
};

export const WithCustomClass: Story = {
  args: {
    ...Default.args,
    className: "custom-class",
  },
};
