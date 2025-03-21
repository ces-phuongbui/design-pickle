interface Image {
  id: string;
  documentId: string;
  url: string;
  alternativeText: string | null;
  name: string;
}

export enum ButtonType {
  DEFAULT = "default",
  DESTRUCTIVE = "destructive",
  OUTLINE = "outline",
  SECONDARY = "secondary",
  GHOST = "ghost",
  LINK = "link",
}

export interface IButton {
  label: string;
  href?: string;
  type: ButtonType;
  color?: string;
}

export type ICarouselItem = {
  id: string | number;
  image: Image;
  name: string;
};

export type CardFeature = {
  id: number | string;
  title: string;
  cta: IButton;
  backgroundImage?: Image;
  description?: string;
};

export type CardStat = {
  value: string | number;
  label?: string;
  subLabel: string;
};

export type ComponentType =
  | "section.introduce-header"
  | "section.social-carousel"
  | "section.features"
  | "section.start";

interface Base<T extends ComponentType, D extends {} = {}> {
  __component: T;
  id: string;
  createdAt: string;
  updatedAt: string;
  data?: D;
}

export interface NavLink {
  href: string;
  text: string;
  isExternal: boolean;
  isPrimary: boolean;
}

export type Block = Introduce | SocialCarousel | Features | Stat;

export interface Introduce extends Base<"section.introduce-header"> {
  title: string;
  description: string;
  button: IButton;
}

export interface SocialCarousel extends Base<"section.social-carousel"> {
  bannerImage: Image;
  logos: ICarouselItem[];
}

export interface Features extends Base<"section.features"> {
  title: string;
  subTitle?: string;
  cards: CardFeature[];
}

export interface Stat extends Base<"section.start"> {
  title: string;
  subTitle: string;
  cards: CardStat[];
}
