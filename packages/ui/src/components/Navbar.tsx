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
import { StrapiImage } from "./StrapiImage";
import { ListItem } from "./ListItem";
import { cn } from "../lib/utils";
import Link from "next/link";

export const Navbar = ({ navBar }: { navBar: any }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { logo, navItems, cta } = navBar;

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
              <StrapiImage alt="logo" src={logo.url} width={100} height={50} />
            </a>
          </NavigationMenuItem>

          {/* mobile
          <span className="flex md:hidden">
            <ModeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex w-5 h-5 md:hidden"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="text-xl font-bold">
                    Shadcn/React
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 justify-center items-center mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    rel="noreferrer noopener"
                    href="https://github.com/vukhanhtruong/turborepo-nextjs-shadcn-landing-page"
                    target="_blank"
                    className={`w-[110px] border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    <GitHubLogoIcon className="mr-2 w-5 h-5" />
                    Github
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </span> */}

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
