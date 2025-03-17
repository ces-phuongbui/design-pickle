import { render, screen } from "@testing-library/react";
import FeaturesSection from "../FeaturesSection";

// Mock next/image
jest.doMock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, fill, className, priority }: any) => (
    <img
      src={src}
      alt={alt}
      className={className}
      data-priority={priority}
      style={fill ? { objectFit: "cover", width: "100%", height: "100%" } : {}}
    />
  ),
}));

const defaultLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => <a href={href}>{children}</a>;

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: defaultLink,
}));

describe("FeaturesSection", () => {
  const defaultProps = {
    sectionTitle: "Test Features",
    subtitle: "Test Subtitle",
    cards: [
      {
        title: "Card 1",
        description: "Description 1",
        backgroundImage: "/image1.jpg",
        ctaText: "Learn More",
        ctaHref: "/card1",
      },
      {
        title: "Card 2",
        description: "Description 2",
        backgroundImage: "/image2.jpg",
        ctaText: "Get Started",
        ctaHref: "/card2",
      },
    ],
  };

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<FeaturesSection {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("displays section title and subtitle correctly", () => {
    render(<FeaturesSection {...defaultProps} />);
    expect(screen.getByText(defaultProps.sectionTitle)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.subtitle)).toBeInTheDocument();
  });

  it("renders without subtitle when not provided", () => {
    const propsWithoutSubtitle = { ...defaultProps, subtitle: undefined };
    const { container } = render(<FeaturesSection {...propsWithoutSubtitle} />);
    expect(screen.getByText(defaultProps.sectionTitle)).toBeInTheDocument();
    expect(screen.queryByText("Test Subtitle")).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("applies correct grid layout classes", () => {
    const { container } = render(<FeaturesSection {...defaultProps} />);
    const grid = container.querySelector(".grid");
    expect(grid).toHaveClass("grid gap-6 md:grid-cols-2 lg:grid-cols-3");
  });
});
