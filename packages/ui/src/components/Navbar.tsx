"use client";

import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";

import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { StrapiImage } from "./Media";
import { ListItem } from "./ListItem";
import { cn } from "../lib/utils";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

type NavItem = {
  id: number;
  title: string;
  menuItems: MenuItem[];
};

type MenuItem = {
  id: number;
  title: string;
  items: ListItem[];
};

type ListItem = {
  id: number;
  title: string;
  description?: string;
  link: {
    href: string;
  };
  icon: {
    url: string;
  };
};

type Logo = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: {
      url: string;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type CTA = {
  id: number;
  href: string;
  text: string;
  isExternal: boolean;
  isPrimary: boolean;
};

export type NavBarProps = {
  id: number;
  navItems: NavItem[];
  logo: Logo;
  cta: CTA[];
};

export const Navbar = ({ navBar }: { navBar: NavBarProps }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { logo, navItems, cta } = navBar;
  console.log("🚀 ~ Navbar ~ logo:", logo);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b-[1px] dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container flex justify-between px-4 w-screen h-14">
          <NavigationMenuItem className="flex">
            <a rel="noreferrer noopener" href="/">
              <StrapiImage
                alt="logo"
                src={String(logo?.url)}
                width={100}
                height={100}
              />
            </a>
          </NavigationMenuItem>

          {/* Mobile View */}
          <div className="flex md:hidden items-center">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="ml-3">
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-4 p-4">
                  {navItems.map((navItem: any) => (
                    <div key={navItem.id} className="space-y-2">
                      <span className="text-lg font-medium">
                        {navItem.title}
                      </span>
                      <ul className="space-y-2">
                        {navItem.menuItems.map((menuItem: any) => (
                          <li key={menuItem.id}>
                            <ul className="pl-4 space-y-1">
                              {menuItem.items.map((item: any) => (
                                <li key={item.id}>
                                  <Link
                                    href={item.link.href}
                                    className="text-sm text-gray-700 dark:text-gray-300"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {cta.map((ctaItem: any) =>
                    ctaItem.isPrimary ? (
                      <Button
                        key={ctaItem.href}
                        asChild
                        className="border border-gray-700 hover:border-gray-900"
                      >
                        <Link
                          href={ctaItem.href}
                          className="cursor-pointer"
                          target={ctaItem.isExternal ? "_blank" : "_self"}
                        >
                          {ctaItem.text}
                        </Link>
                      </Button>
                    ) : (
                      <Link
                        key={ctaItem.href}
                        href={ctaItem.href}
                        className="cursor-pointer self-center mr-3"
                        target={ctaItem.isExternal ? "_blank" : "_self"}
                      >
                        {ctaItem.text}
                      </Link>
                    ),
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <nav className="hidden gap-2 md:flex">
            {Array.isArray(navItems) &&
              navItems.map((navItem: any) => (
                <NavigationMenuItem
                  key={navItem.id}
                  className="hidden gap-1 md:flex relative"
                >
                  <NavigationMenuTrigger>
                    {String(navItem.title)}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul
                      className={cn(
                        "grid gap-3 p-4 md:w-[600px] lg:w-[500px]",
                        navItem.menuItems.length > 1
                          ? "lg:grid-cols-[.75fr_1fr]"
                          : "grid-cols-1",
                      )}
                    >
                      {Array.isArray(navItem.menuItems) &&
                        navItem.menuItems.map((menuItem: any) => (
                          <li key={menuItem.id} className="space-y-2">
                            <span className="ml-3 text-sm">
                              {String(menuItem.title)}
                            </span>
                            <ul className="space-y-2">
                              {menuItem.items.map((item: any) => {
                                return (
                                  <ListItem
                                    key={item.id}
                                    href={String(item.link.href)}
                                    title={String(item.title)}
                                    imageSrc={String(item.icon?.url)}
                                  >
                                    {String(item.description)}
                                  </ListItem>
                                );
                              })}
                            </ul>
                          </li>
                        ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
          </nav>

          <div className="hidden gap-2 md:flex">
            {Array.isArray(cta) &&
              cta.map((ctaItem) => (
                <Button
                  key={ctaItem.id}
                  asChild
                  variant={ctaItem.isPrimary ? "default" : "outline"}
                >
                  <Link
                    href={String(ctaItem.href)}
                    className="cursor-pointer"
                    target={ctaItem.isExternal ? "_blank" : "_self"}
                  >
                    {String(ctaItem.text)}
                  </Link>
                </Button>
              ))}

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
