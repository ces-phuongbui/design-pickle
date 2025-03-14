"use client";

import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { StrapiImage } from "./Media";
import { ListItem } from "./ListItem";
import { cn } from "../lib/utils";
import Link from "next/link";

export const Navbar = ({ navBar }: { navBar: any }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { logo, navItems, cta } = navBar;
  console.log("🚀 ~ Navbar ~ cta:", cta);

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
              <StrapiImage alt="logo" src={logo.url} width={200} height={100} />
            </a>
          </NavigationMenuItem>

          {/* desktop */}
          <nav className="hidden gap-2 md:flex">
            {navItems.map((navItem: any) => (
              <NavigationMenuItem
                key={navItem.id}
                className="hidden gap-1 md:flex relative"
              >
                <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className={cn(
                      "grid gap-3 p-4 md:w-[600px] lg:w-[500px]",
                      navItem.menuItems.length > 1
                        ? "lg:grid-cols-[.75fr_1fr]"
                        : "grid-cols-1",
                    )}
                  >
                    {navItem.menuItems.map((menuItem: any) => (
                      <li key={menuItem.id} className="space-y-2">
                        <span className="ml-3 text-sm">{menuItem.title}</span>
                        <ul className="space-y-2">
                          {menuItem.items.map((item: any) => {
                            return (
                              <ListItem
                                key={item.id}
                                href={item.link.href}
                                title={item.title}
                                imageSrc={item.icon.url}
                              >
                                {item.description}
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

            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
