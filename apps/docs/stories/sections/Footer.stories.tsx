import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@repo/ui/components/Footer";

const meta: Meta<typeof Footer> = {
  title: "Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    footer: {
      id: 1,
      footerItems: [
        {
          id: 16,
          title: "Solutions",
          items: [
            { id: 1, title: "UI/UX Design", link: { href: "/ui-ux-design" } },
            {
              id: 2,
              title: "Video Editing",
              link: { href: "/video-editing" },
            },
            {
              id: 3,
              title: "Motion Graphic",
              link: { href: "/motion-graphic" },
            },
          ],
        },
        {
          id: 17,
          title: "Design Pickle",
          items: [
            { id: 4, title: "For B2C", link: { href: "/for-b2c" } },
            { id: 5, title: "For B2B", link: { href: "/for-b2b" } },
          ],
        },
      ],
      socialLinks: [
        {
          id: 24,
          href: "https://www.facebook.com/yourcompany",
          text: "facebook",
          isExternal: true,
          isPrimary: false,
        },
        {
          id: 25,
          href: "https://www.linkedin.com/company/yourcompany",
          text: "linkedin",
          isExternal: true,
          isPrimary: false,
        },
      ],
      legalLinks: [
        {
          id: 26,
          href: "https://www.yourcompany.com/terms-of-service",
          text: "Terms of Service",
          isExternal: true,
          isPrimary: null,
        },
        {
          id: 27,
          href: "https://www.yourcompany.com/privacy-policy",
          text: "Privacy Policy",
          isExternal: true,
          isPrimary: false,
        },
        {
          id: 28,
          href: "https://www.yourcompany.com/terms-of-use",
          text: "Terms of Use",
          isExternal: true,
          isPrimary: false,
        },
      ],
    },
  },
};
