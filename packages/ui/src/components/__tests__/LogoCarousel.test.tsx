import { render, screen } from "@testing-library/react";
import { LogoCarousel } from "../ui/logoCarousel";

describe("LogoCarousel", () => {
  const mockProps = {
    logoUrl: "https://example.com/logo.png",
    name: "Test Logo",
    className: "test-class",
  };

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<LogoCarousel {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it("displays logo name", () => {
    render(<LogoCarousel {...mockProps} />);
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<LogoCarousel {...mockProps} />);
    expect(container.firstChild).toHaveClass("test-class");
  });
});
