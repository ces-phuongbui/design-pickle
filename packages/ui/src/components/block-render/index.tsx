import { Block } from "@repo/ui/types/index";

type BlockRendererProps = {
  blocks: Block[];
  // eslint-disable-next-line no-unused-vars
  blockRenderer: (block: Block, index: number) => JSX.Element | null;
};

export function BlockRenderer({ blocks, blockRenderer }: BlockRendererProps) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
