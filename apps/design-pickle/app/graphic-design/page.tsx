import Banner from "@repo/ui/components/Banner";
import FeaturesSection from "@repo/ui/components/FeaturesSection";
import { IntroduceHeader } from "@repo/ui/components/IntroduceHeader";
import StatsSection from "@repo/ui/components/StatsSection";
import { getGraphicPageData } from "~/data/loaders";
import { Block } from "@repo/ui/types/index";

// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#reference
export const dynamic = "force-dynamic";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "section.introduce-header":
      return <IntroduceHeader key={index} {...block} />;
    case "section.social-carousel":
      return <Banner key={block.id} {...block} className="my-8" />;
    case "section.features":
      return <FeaturesSection key={index} {...block} />;
    case "section.start":
      return <StatsSection key={index} {...block} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}

export default async function page() {
  const graphicDesign = await getGraphicPageData();
  const blocks = graphicDesign?.data?.blocks;
  if (!blocks) return null;

  return <BlockRenderer blocks={blocks} />;
}
