import type { Meta, StoryObj } from "@storybook/react";
import { LogoCarousel } from "@repo/ui/components/ui/logoCarousel";

const meta: Meta<typeof LogoCarousel> = {
  title: "UI/LogoCarousel",
  component: LogoCarousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LogoCarousel>;

export const Default: Story = {
  args: {
    logoUrl:
      "https://s3-alpha-sig.figma.com/img/2f5f/65c8/29804df6babafa0a47c751ab71c3f825?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a3QV8cPAyyUCJHfwehbe4PBwtl3zo3vViJVXB20AWuEqJxxdO6mVjyJ4n-jISxXT4T~ovcbup23l0VhnDSk7Rev37XXiSu-SDJ-FQO8lzRdSrFZvb739i0xYOXiMUeyApyd-S~9in3CiEZ5lkTijWvrxaC-z1UXeupzV-ouS43-sx5yghwCX4VMALIfB~s-wdclj08qH5gb6Y7MU2RGT5SY2LfJjAutbGsJlP-pZ~gbkHf418uLNR-JkJdxwt8iRN68~ROfyqvgHCn-Uemf-JLYiSTm1AejrgXDYJJnl24WB~N65lJ5fGWqD5vCF4eyqbAJJx7t99ftGIjfazcmHqg__",
    name: "Example Logo",
  },
};

export const WithCustomClass: Story = {
  args: {
    ...Default.args,
    className: "bg-gray-800",
  },
};
