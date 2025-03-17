import type { Meta, StoryObj } from "@storybook/react";
import StatsSection from "@repo/ui/components/StatsSection";

const meta: Meta<typeof StatsSection> = {
  title: "Sections/StatsSection",
  component: StatsSection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StatsSection>;

export const Default: Story = {
  args: {
    title: "Our Impact",
    description: "See what we've achieved together",
    stats: [
      {
        value: "20k+",
        label: "requests",
        subLabel: "completed to date",
      },
      {
        value: "2,000+",
        label: "customers",
        subLabel: "used our services",
      },
      {
        value: "200k+",
        label: "hours",
        subLabel: "dedicated to design",
      },
      {
        value: "4.9/5",
        label: "average rating",
        subLabel: "satisfaction rate",
      },
    ],
  },
};

export const WithoutSubLabels: Story = {
  args: {
    title: "Key Metrics",
    description: "Our performance in numbers",
    stats: [
      {
        value: "99.9%",
        label: "Uptime",
      },
      {
        value: "24/7",
        label: "Support",
      },
      {
        value: "1M+",
        label: "Users",
      },
      {
        value: "50+",
        label: "Countries",
      },
    ],
  },
};
