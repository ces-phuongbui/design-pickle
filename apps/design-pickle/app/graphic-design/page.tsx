import Banner from "@repo/ui/components/Banner";
import FeaturesSection from "@repo/ui/components/FeaturesSection";
import { IntroduceHeader } from "@repo/ui/components/IntroduceHeader";
import StatsSection from "@repo/ui/components/StatsSection";
import { getGraphicPageData } from "~/data/loaders";
import { Block } from "@repo/ui/types/index";
import { BlockRenderer } from "@repo/ui/components/block-render/index";

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

export default async function page() {
  const graphicDesign = await getGraphicPageData();
  const blocks = graphicDesign?.data?.blocks;
  if (!blocks) return null;

  return <BlockRenderer blocks={blocks} blockRenderer={blockRenderer} />;
}
