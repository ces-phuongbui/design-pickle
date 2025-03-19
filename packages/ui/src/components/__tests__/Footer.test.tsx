import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer, FooterProps } from "../Footer";

describe("Footer Component", () => {
  const mockFooter: FooterProps = {
    id: 1,
    footerItems: [
      {
        id: 16,
        title: "Solutions",
        items: [
          {
            id: 35,
            title: "UI/UX design",
            link: {
              id: 44,
              href: "ux-design",
              isExternal: false,
              isPrimary: false,
            },
          },
          {
            id: 36,
            title: "Web development",
            link: {
              id: 45,
              href: "web-development",
              isExternal: false,
              isPrimary: false,
            },
          },
          {
            id: 37,
            title: "Mobile development",
            link: {
              id: 46,
              href: "mobile-development",
              isExternal: false,
              isPrimary: false,
            },
          },
        ],
      },
    ],
    socialLinks: [
      {
        id: 24,
        href: "https://www.facebook.com/codeengine/",
        text: "facebook",
        isExternal: true,
        isPrimary: false,
      },
      {
        id: 25,
        href: "https://www.linkedin.com/in/code-engine-studio-192004182/",
        text: "linkedin",
        isExternal: true,
        isPrimary: false,
      },
    ],
    legalLinks: [
      {
        id: 26,
        href: "https://www.codeenginestudio.com/",
        text: "Terms of Service",
        isExternal: true,
        isPrimary: true,
      },
      {
        id: 27,
        href: "https://www.codeenginestudio.com/",
        text: "Privacy Policy",
        isExternal: true,
        isPrimary: false,
      },
      {
        id: 28,
        href: "https://www.codeenginestudio.com/",
        text: "Terms of Use",
        isExternal: true,
        isPrimary: false,
      },
    ],
  };

  it("renders footer items correctly", () => {
    render(<Footer footer={mockFooter} />);

    expect(screen.getByText("Solutions")).toBeInTheDocument();
    expect(screen.getByText("UI/UX design")).toBeInTheDocument();
    expect(screen.getByText("Web development")).toBeInTheDocument();
    expect(screen.getByText("Mobile development")).toBeInTheDocument();
  });

  it("renders legal links correctly", () => {
    render(<Footer footer={mockFooter} />);

    const privacyLink = screen.getByText("Privacy Policy");
    const termsLink = screen.getByText("Terms of Service");

    expect(privacyLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
    expect(privacyLink.getAttribute("href")).toBe(
      "https://www.codeenginestudio.com/",
    );
    expect(termsLink.getAttribute("href")).toBe(
      "https://www.codeenginestudio.com/",
    );
  });

  it("renders social links correctly", () => {
    render(<Footer footer={mockFooter} />);

    const facebookLink = screen.getByRole("link", { name: /facebook/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

    expect(facebookLink).toBeInTheDocument();
    expect(linkedinLink).toBeInTheDocument();
    expect(facebookLink.getAttribute("href")).toBe(
      "https://www.facebook.com/codeengine/",
    );
    expect(linkedinLink.getAttribute("href")).toBe(
      "https://www.linkedin.com/in/code-engine-studio-192004182/",
    );
  });
});
