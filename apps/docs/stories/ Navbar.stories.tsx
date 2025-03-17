import { Navbar } from "@repo/ui/components/Navbar";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Navbar> = {
  title: "Layout/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    navBar: {
      logo: { url: "/logo.png" },
      navItems: [
        {
          id: "1",
          title: "Services",
          menuItems: [
            {
              id: "1-1",
              title: "Development",
              items: [
                {
                  id: "1-1-1",
                  title: "Web Development",
                  description: "Custom web applications",
                  link: { href: "/services/web-development" },
                  icon: { url: "https://picsum.photos/50/50" },
                },
              ],
            },
          ],
        },
      ],
      cta: [
        {
          text: "Sign In",
          href: "/login",
          isPrimary: false,
          isExternal: false,
        },
        {
          text: "Get Started",
          href: "/signup",
          isPrimary: true,
          isExternal: false,
        },
      ],
    },
  },
};
