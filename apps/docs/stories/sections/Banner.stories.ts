import Banner from "@repo/ui/components/Banner";
import type { Meta, StoryObj } from "@storybook/react";

const mockLogos = [
  {
    id: "1",
    name: "Facebook",
    image: {
      id: "logo-1",
      documentId: "fb-logo",
      url: "/uploads/733547_06ff671146.png",
      alternativeText: "Facebook logo",
      name: "facebook-logo",
    },
  },
  {
    id: "2",
    name: "Twitter",
    image: {
      id: "logo-2",
      documentId: "twitter-logo",
      url: "/uploads/4494477_82266f498c.png",
      alternativeText: "Twitter logo",
      name: "twitter-logo",
    },
  },
  {
    id: "3",
    name: "Instagram",
    image: {
      id: "logo-3",
      documentId: "ig-logo",
      url: "/uploads/2111463_6be0b596b0.png",
      alternativeText: "Instagram logo",
      name: "instagram-logo",
    },
  },
  {
    id: "4",
    name: "LinkedIn",
    image: {
      id: "logo-4",
      documentId: "linkedin-logo",
      url: "/uploads/2111646_dace61ae40.png",
      alternativeText: "LinkedIn logo",
      name: "linkedin-logo",
    },
  },
  {
    id: "5",
    name: "YouTube",
    image: {
      id: "logo-5",
      documentId: "yt-logo",
      url: "/uploads/1384060_c2bee1e09e.png",
      alternativeText: "YouTube logo",
      name: "youtube-logo",
    },
  },
  {
    id: "6",
    name: "Pinterest",
    image: {
      id: "logo-6",
      documentId: "pin-logo",
      url: "/uploads/145808_cfb4875fba.png",
      alternativeText: "Pinterest logo",
      name: "/uploads/145808_cfb4875fba.png",
    },
  },
  {
    id: "7",
    name: "Pinterest",
    image: {
      id: "logo-6",
      documentId: "pin-logo",
      url: "/uploads/145808_cfb4875fba.png",
      alternativeText: "Pinterest logo",
      name: "/uploads/145808_cfb4875fba.png",
    },
  },
];

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

export const Default: Story = {
  args: {
    bannerImage: {
      id: "1",
      documentId: "banner-1",
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c99bb7213868729.674e2852b904c.jpg",
      alternativeText: "Banner showing a beautiful landscape",
      name: "banner-default",
    },
    logos: mockLogos,
  },
};

export const WithoutLogos: Story = {
  args: {
    bannerImage: {
      id: "2",
      documentId: "banner-2",
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c99bb7213868729.674e2852b904c.jpg",
      alternativeText: "Simple banner image",
      name: "banner-simple",
    },
    logos: [],
  },
};

export const DarkBanner: Story = {
  args: {
    bannerImage: {
      id: "3",
      documentId: "banner-3",
      url: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/c99bb7213868729.674e2852b904c.jpg",
      alternativeText: "Dark themed banner",
      name: "banner-dark",
    },
    logos: mockLogos,
    className: "dark-theme",
  },
};
