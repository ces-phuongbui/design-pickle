import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import React from "react";
import { cn } from "../lib/utils";
import { StrapiImage } from "./StrapiImage";

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  imageSrc?: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, imageSrc, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "flex items-start gap-3 min-h-[80px] select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            {imageSrc && (
              <div className="flex items-center justify-center rounded-md bg-muted">
                <StrapiImage
                  alt="logo"
                  src={imageSrc}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";

export { ListItem };
