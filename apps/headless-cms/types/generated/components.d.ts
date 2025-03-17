import type { Schema, Struct } from "@strapi/strapi";

export interface ElementsItem extends Struct.ComponentSchema {
  collectionName: "components_elements_items";
  info: {
    description: "";
    displayName: "Item";
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    link: Schema.Attribute.Component<"elements.link", false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: "components_elements_links";
  info: {
    displayName: "Link";
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    isPrimary: Schema.Attribute.Boolean;
    text: Schema.Attribute.String;
  };
}

export interface ElementsMenuCategory extends Struct.ComponentSchema {
  collectionName: "components_elements_menu_categories";
  info: {
    description: "";
    displayName: "Menu Category";
  };
  attributes: {
    items: Schema.Attribute.Component<"elements.item", true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsMenuItem extends Struct.ComponentSchema {
  collectionName: "components_elements_menu_items";
  info: {
    displayName: "Menu Item";
  };
  attributes: {
    menuItems: Schema.Attribute.Component<"elements.menu-category", true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsSocialLogo extends Struct.ComponentSchema {
  collectionName: "components_elements_social_logos";
  info: {
    description: "";
    displayName: "socialLogo";
    icon: "twitter";
  };
  attributes: {
    image: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    name: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: "components_layout_footers";
  info: {
    description: "";
    displayName: "Footer";
  };
  attributes: {
    footerItems: Schema.Attribute.Component<"elements.menu-category", true>;
    legalLinks: Schema.Attribute.Component<"elements.link", true>;
    socialLinks: Schema.Attribute.Component<"elements.link", true>;
  };
}

export interface LayoutNavBar extends Struct.ComponentSchema {
  collectionName: "components_layout_nav_bars";
  info: {
    description: "";
    displayName: "Navbar";
  };
  attributes: {
    cta: Schema.Attribute.Component<"elements.link", true>;
    logo: Schema.Attribute.Media<"images" | "files" | "videos" | "audios">;
    navItems: Schema.Attribute.Component<"elements.menu-item", true>;
  };
}

export interface SectionFeatures extends Struct.ComponentSchema {
  collectionName: "components_section_features";
  info: {
    displayName: "features";
  };
  attributes: {
    cards: Schema.Attribute.Component<"shared.card-feature", true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionIntroduceHeader extends Struct.ComponentSchema {
  collectionName: "components_section_introduce_headers";
  info: {
    displayName: "introduce-header";
    icon: "message";
  };
  attributes: {
    button: Schema.Attribute.Component<"shared.button", false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionSocialCarousel extends Struct.ComponentSchema {
  collectionName: "components_section_social_carousels";
  info: {
    description: "";
    displayName: "SocialCarousel";
  };
  attributes: {
    alt: Schema.Attribute.String;
    bannerImage: Schema.Attribute.Media<"images">;
    logos: Schema.Attribute.Component<"elements.social-logo", true>;
  };
}

export interface SectionStart extends Struct.ComponentSchema {
  collectionName: "components_section_starts";
  info: {
    description: "";
    displayName: "Stat";
  };
  attributes: {
    cards: Schema.Attribute.Component<"shared.card-stat", true>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: "components_shared_buttons";
  info: {
    description: "";
    displayName: "button";
    icon: "cursor";
  };
  attributes: {
    color: Schema.Attribute.String;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ["default", "destructive", "secondary", "outline", "ghost", "link"]
    >;
  };
}

export interface SharedCardFeature extends Struct.ComponentSchema {
  collectionName: "components_shared_card_features";
  info: {
    description: "";
    displayName: "card-feature";
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<"images">;
    cta: Schema.Attribute.Component<"shared.button", true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedCardStat extends Struct.ComponentSchema {
  collectionName: "components_shared_card_stats";
  info: {
    description: "";
    displayName: "card-stat";
  };
  attributes: {
    label: Schema.Attribute.String;
    subLabel: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedFeatures extends Struct.ComponentSchema {
  collectionName: "components_shared_features";
  info: {
    description: "";
    displayName: "features";
    icon: "bulletList";
  };
  attributes: {
    cards: Schema.Attribute.Component<"shared.card-feature", true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: "components_shared_media";
  info: {
    displayName: "Media";
    icon: "file-video";
  };
  attributes: {
    file: Schema.Attribute.Media<"images" | "files" | "videos">;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: "components_shared_quotes";
  info: {
    displayName: "Quote";
    icon: "indent";
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: "components_shared_rich_texts";
  info: {
    description: "";
    displayName: "Rich text";
    icon: "align-justify";
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: "components_shared_seos";
  info: {
    description: "";
    displayName: "Seo";
    icon: "allergies";
    name: "Seo";
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<"images">;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: "components_shared_sliders";
  info: {
    description: "";
    displayName: "Slider";
    icon: "address-book";
  };
  attributes: {
    files: Schema.Attribute.Media<"images", true>;
  };
}

declare module "@strapi/strapi" {
  export module Public {
    export interface ComponentSchemas {
      "elements.item": ElementsItem;
      "elements.link": ElementsLink;
      "elements.menu-category": ElementsMenuCategory;
      "elements.menu-item": ElementsMenuItem;
      "elements.social-logo": ElementsSocialLogo;
      "layout.footer": LayoutFooter;
      "layout.nav-bar": LayoutNavBar;
      "section.features": SectionFeatures;
      "section.introduce-header": SectionIntroduceHeader;
      "section.social-carousel": SectionSocialCarousel;
      "section.start": SectionStart;
      "shared.button": SharedButton;
      "shared.card-feature": SharedCardFeature;
      "shared.card-stat": SharedCardStat;
      "shared.features": SharedFeatures;
      "shared.media": SharedMedia;
      "shared.quote": SharedQuote;
      "shared.rich-text": SharedRichText;
      "shared.seo": SharedSeo;
      "shared.slider": SharedSlider;
    }
  }
}
