import React from "react";
import { render, screen } from "@testing-library/react";
import { Hero, HeroInterface } from "../Hero";

// Mock the HeroCards component since we're only testing Hero
jest.mock("../HeroCards", () => ({
  HeroCards: () => "Hero Cards Component",
}));

// Mock the button variants function
jest.mock("../ui/button", () => ({
  buttonVariants: () => "btn-mock-class",
}));

describe("Hero Component", () => {
  const mockProps: HeroInterface = {
    headline: "Test Headline",
    excerpt: "Test Excerpt",
    links: [{ title: "Link 1", link: "https://example.com/1" }],
  };

  it("renders correctly with provided props", () => {
    render(<Hero {...mockProps} />);

    // Check if the headline is rendered
    expect(screen.getByText("Test Headline")).toBeInTheDocument();

    // Check if the excerpt is rendered
    expect(screen.getByText("Test Excerpt")).toBeInTheDocument();

    // Check if the link is rendered
    const link = screen.getByText("Link 1");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "https://example.com/1");
    expect(link.closest("a")).toHaveAttribute("target", "_blank");
    expect(link.closest("a")).toHaveAttribute("rel", "noreferrer noopener");
  });

  it("renders multiple links when provided", () => {
    const propsWithMultipleLinks: HeroInterface = {
      ...mockProps,
      links: [
        { title: "Link 1", link: "https://example.com/1" },
        { title: "Link 2", link: "https://example.com/2" },
      ],
    };

    render(<Hero {...propsWithMultipleLinks} />);

    // Check if both links are rendered
    expect(screen.getByText("Link 1")).toBeInTheDocument();
    expect(screen.getByText("Link 2")).toBeInTheDocument();
  });

  it("applies the correct styling classes", () => {
    render(<Hero {...mockProps} />);

    // Check if the section has the correct classes
    const section = screen.getByText("Test Headline").closest("section");
    expect(section).toHaveClass("container");
    expect(section).toHaveClass("grid");

    // Check if the headline has the correct styling
    const headline = screen.getByText("Test Headline");
    expect(headline).toHaveClass("text-5xl");
    expect(headline).toHaveClass("font-bold");

    // Check if the excerpt has the correct styling
    const excerpt = screen.getByText("Test Excerpt");
    expect(excerpt).toHaveClass("text-xl");
    expect(excerpt).toHaveClass("text-muted-foreground");
  });
});
