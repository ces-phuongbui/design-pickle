import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navbar, NavBarProps } from "../Navbar";

const mockNavBar: NavBarProps = {
  id: 1,
  navItems: [
    {
      id: 1,
      title: "Products",
      menuItems: [
        {
          id: 1,
          title: "Software",
          items: [
            {
              id: 1,
              title: "Editor",
              link: { href: "/editor" },
              icon: { url: "/icons/editor.png" },
            },
          ],
        },
      ],
    },
  ],
  logo: {
    id: 1,
    documentId: "doc1",
    name: "logo",
    alternativeText: null,
    caption: null,
    width: 100,
    height: 100,
    formats: {},
    hash: "hash",
    ext: ".png",
    mime: "image/png",
    size: 1,
    url: "/logo.png",
    previewUrl: null,
    provider: "provider",
    provider_metadata: {},
    createdAt: "2023-01-01",
    updatedAt: "2023-01-01",
    publishedAt: "2023-01-01",
  },
  cta: [
    {
      id: 1,
      href: "login",
      text: "Log In",
      isExternal: false,
      isPrimary: false,
    },
  ],
};

describe("Navbar", () => {
  test("renders Navbar component", () => {
    render(<Navbar navBar={mockNavBar} />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  test("renders logo with correct alt text", () => {
    render(<Navbar navBar={mockNavBar} />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders navigation items in desktop view", () => {
    render(<Navbar navBar={mockNavBar} />);
    const productsTrigger = screen.getByText("Products");
    expect(productsTrigger).toBeInTheDocument();
  });

  it("renders CTA button", () => {
    render(<Navbar navBar={mockNavBar} />);

    const contactButton = screen.getByText("Log In");
    expect(contactButton).toBeInTheDocument();
    expect(contactButton.closest("a")).toHaveAttribute("href", "login");
  });

  test("does not render navigation items when navItems is empty", () => {
    const navBarWithoutNavItems: NavBarProps = { ...mockNavBar, navItems: [] };
    render(<Navbar navBar={navBarWithoutNavItems} />);
    const productsTrigger = screen.queryByText("Products");
    expect(productsTrigger).not.toBeInTheDocument();
  });

  test("does not render CTAs when cta is empty", () => {
    const navBarWithoutCTAs: NavBarProps = { ...mockNavBar, cta: [] };
    render(<Navbar navBar={navBarWithoutCTAs} />);
    const signUpLink = screen.queryByText("Sign Up");
    const logInLink = screen.queryByText("Log In");
    expect(signUpLink).not.toBeInTheDocument();
    expect(logInLink).not.toBeInTheDocument();
  });
});
