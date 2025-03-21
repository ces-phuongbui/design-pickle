import { Block } from "@repo/ui/types/index";
import dynamic from "next/dynamic";
import { getGraphicPageData } from "~/data/loaders";

// Dynamic imports for components
const Banner = dynamic(() => import("@repo/ui/components/Banner"), {
  ssr: true,
});
const FeaturesSection = dynamic(
  () => import("@repo/ui/components/FeaturesSection"),
  { ssr: true },
);
const IntroduceHeader = dynamic(
  () => import("@repo/ui/components/IntroduceHeader"),
  { ssr: true },
);
const StatsSection = dynamic(() => import("@repo/ui/components/StatsSection"), {
  ssr: true,
});

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "section.introduce-header":
      return <IntroduceHeader key={index} {...block} />;
    case "section.social-carousel":
      return <Banner key={index} {...block} className="my-8" />;
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

  if (!blocks) {
    return null;
  }

  return <BlockRenderer blocks={blocks} />;
}
