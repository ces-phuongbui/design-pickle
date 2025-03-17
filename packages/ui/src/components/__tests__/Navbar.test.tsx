import React from "react";
import { render, screen } from "@testing-library/react";
import { Navbar } from "../Navbar";
import { StrapiImage } from "../Media";
import { ListItem } from "../ListItem";
import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";

describe("Navbar Component", () => {
  const mockNavBar = {
    logo: { url: "logo.png" },
    navItems: [
      {
        id: 1,
        title: "Home",
        menuItems: [
          {
            id: 11,
            title: "Submenu 1",
            items: [
              {
                id: 111,
                title: "Item 1",
                link: { href: "/item1" },
                icon: { url: "icon1.png" },
              },
            ],
          },
        ],
      },
    ],
    cta: [
      {
        href: "/contact",
        text: "Contact Us",
        isPrimary: true,
        isExternal: false,
      },
    ],
  };

  it("renders correctly", () => {
    console.log("🚀 ~ it ~ mockNavBar:", mockNavBar);

    render(<Navbar navBar={mockNavBar} />);

    // Check if logo is present
    expect(screen.getByAltText("logo")).toBeInTheDocument();

    // Check if navigation item is rendered
    expect(screen.getByText("Home")).toBeInTheDocument();

    // Check if CTA is rendered
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
  });

  it("renders menu items when provided", () => {
    render(<Navbar navBar={mockNavBar} />);

    // Check if submenu items are rendered
    expect(screen.getByText("Submenu 1")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("renders the mode toggle", () => {
    render(<Navbar navBar={mockNavBar} />);

    expect(screen.getByText("Mode Toggle")).toBeInTheDocument();
  });
});
