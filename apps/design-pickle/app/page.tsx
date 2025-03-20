import "../index.css";
import { getLandingPageData } from "~/data/loaders";
import { Block } from "@repo/ui/types/index";
import StatsSection from "@repo/ui/components/StatsSection";
import { BlockRenderer } from "@repo/ui/components/block-render/index";
import { RenderSocialLinks } from "@repo/ui/components/Banner";
import { LandingPageHeaderSection } from "@repo/ui/components/LandingPageHeader";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "section.landing-page-heading":
      return <LandingPageHeaderSection key={index} {...block} />;
    case "section.social-carousel":
      return <RenderSocialLinks key={block.id} {...block} />;
    case "section.start":
      return <StatsSection key={index} {...block} />;
    default:
      return null;
  }
}

export default async function LandingPage() {
  const data = await getLandingPageData();
  const blocks = data?.data?.blocks;
  if (!blocks) return null;

  return <BlockRenderer blocks={blocks} blockRenderer={blockRenderer} />;
}
