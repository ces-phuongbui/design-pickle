import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";
import { IButton, LandingPageHeader } from "@repo/ui/types";
import { LandingPageHeaderSection } from "../LandingPageHeader";

// Mock `next/link` to avoid routing issues in tests

describe("LandingPageHeadingSection Component", () => {
  const mockHeading: LandingPageHeader = {
    heading: {
      title: "Test Title",
      description: "This is a test description",
      button: {
        label: "Click Me",
        href: "/test",
      } as IButton,
    },
    headingImages: [
      { id: 1, url: "/images/test1.jpg" },
      { id: 2, url: "/images/test2.jpg" },
      { id: 3, url: "/images/test3.jpg" },
      { id: 4, url: "/images/test4.jpg" },
      { id: 5, url: "/images/test5.jpg" },
    ],
    __component: "section.landing-page-heading",
    id: "",
    createdAt: "",
    updatedAt: "",
    data: {},
  };

  it("renders heading title and description", () => {
    render(<LandingPageHeaderSection {...mockHeading} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("This is a test description")).toBeInTheDocument();
  });

  it("renders images correctly", () => {
    render(<LandingPageHeaderSection {...mockHeading} />);

    const images = screen.getAllByAltText("heading");
    expect(images.length).toBe(5);
    expect(images[0]).toBeInTheDocument();
  });

  it("renders a button with correct label and link", () => {
    render(<LandingPageHeaderSection {...mockHeading} />);

    const button = screen.getByRole("link", { name: "Click Me" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/test");
  });

  it("handles missing images gracefully", () => {
    render(<LandingPageHeaderSection {...mockHeading} headingImages={[]} />);

    expect(screen.queryByAltText("heading")).not.toBeInTheDocument();
  });
});
