import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

type MetaProps = Meta<typeof Card>;

const meta: MetaProps = {
  title: "UI/Card",
  component: Card,
  argTypes: {
    className: {
      description: "Override or extend the styles applied to the component",
      control: "text",
      table: {
        category: "Override/extend",
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
  },
} satisfies MetaProps;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ ...args }) => {
    return (
      <div className="flex max-h-[280px] max-w-[280px]">
        <Card {...args}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </CardDescription>
          </CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    );
  },
};
