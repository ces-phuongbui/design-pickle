import { render, screen } from "@testing-library/react";
import Banner from "../Banner";

describe("Banner", () => {
  const mockLogos = [
    {
      id: 1,
      href: "https://example.com/logo1.png",
      name: "Logo 1",
    },
    {
      id: 2,
      href: "https://example.com/logo2.png",
      name: "Logo 2",
    },
  ];

  const mockProps = {
    bannerImage: "/banner.jpg",
    bannerAlt: "Banner Image",
    logos: mockLogos,
    className: "test-class",
  };

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<Banner {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders banner image with correct attributes", () => {
    render(<Banner {...mockProps} />);
    const bannerImage = screen.getByAltText(mockProps.bannerAlt);
    expect(bannerImage).toBeInTheDocument();
    expect(bannerImage).toHaveAttribute("src", mockProps.bannerImage);
  });

  it("applies custom className", () => {
    const { container } = render(<Banner {...mockProps} />);
    expect(container.firstChild).toHaveClass("test-class");
  });

  it("renders all logos twice for infinite scroll", () => {
    render(<Banner {...mockProps} />);
    const allLogos = screen
      .getAllByRole("img")
      .filter((img) => img.getAttribute("alt") !== mockProps.bannerAlt);
    expect(allLogos).toHaveLength(mockProps.logos.length * 2);
  });

  it("renders without subtitle", () => {
    const propsWithoutSubtitle = { ...mockProps, subtitle: undefined };
    const { container } = render(<Banner {...propsWithoutSubtitle} />);
    expect(container).toMatchSnapshot();
  });

  it("applies correct animation styles", () => {
    render(<Banner {...mockProps} />);
    const slider = screen.getByRole("region");
    expect(slider.firstChild).toHaveStyle({
      "--animation-duration": "30s",
    });
  });
});
