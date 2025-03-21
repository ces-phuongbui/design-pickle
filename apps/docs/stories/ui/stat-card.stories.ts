import type { Meta, StoryObj } from "@storybook/react";
import { StatCard } from "@repo/ui/components/ui/stat-card";

const meta: Meta<typeof StatCard> = {
  title: "UI/StatCard",
  component: StatCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {
  args: {
    value: "20k+",
    label: "Active Users",
    subLabel: "and growing",
  },
};

export const WithoutSubLabel: Story = {
  args: {
    value: "99.9%",
    label: "Uptime",
  },
};
