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
      "layout.footer": LayoutFooter;
      "layout.nav-bar": LayoutNavBar;
      "shared.media": SharedMedia;
      "shared.quote": SharedQuote;
      "shared.rich-text": SharedRichText;
      "shared.seo": SharedSeo;
      "shared.slider": SharedSlider;
    }
  }
}
