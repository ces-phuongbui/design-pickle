import { render } from "@testing-library/react";
import Banner, { BannerProps } from "../Banner";

const mockLogos = [
  {
    id: "logo1",
    image: {
      id: "img1",
      documentId: "doc1",
      url: "https://example.com/logo1.jpg",
      alternativeText: "Logo 1",
      name: "Logo 1",
    },
    name: "Logo 1",
  },
  {
    id: "logo2",
    image: {
      id: "img2",
      documentId: "doc2",
      url: "https://example.com/logo2.jpg",
      alternativeText: "Logo 2",
      name: "Logo 2",
    },
    name: "Logo 2",
  },
  {
    id: "logo3",
    image: {
      id: "img3",
      documentId: "doc3",
      url: "https://example.com/logo3.jpg",
      alternativeText: "Logo 3",
      name: "Logo 3",
    },
    name: "Logo 3",
  },
];

const mockProps: BannerProps = {
  __component: "section.social-carousel",
  id: "1",
  createdAt: "2023-10-01T00:00:00.000Z",
  updatedAt: "2023-10-01T00:00:00.000Z",
  bannerImage: {  
    id: "banner1",
    documentId: "doc1",
    url: "https://example.com/banner.jpg",
    alternativeText: "Banner Image",
    name: "Banner",
  },
  logos: mockLogos,
};

jest.mock("./ui/carouselAutoPlay", () => ({
  CarouselAutoPlay: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="carousel-autoplay">{children}</div>
  ),
}));

describe("Banner", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<Banner {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  // it("renders the banner image correctly", () => {
  //   const { getByAltText } = render(<Banner {...mockProps} />);
  //   const bannerImage = getByAltText("Banner Image");
  //   expect(bannerImage).toBeInTheDocument();
  //   expect(bannerImage).toHaveAttribute(
  //     "src",
  //     "https://example.com/banner.jpg",
  //   );
  // });

  // it("renders all logos correctly", () => {
  //   const { getAllByRole } = render(<Banner {...mockProps} />);
  //   const logos = getAllByRole("img", { name: /Logo \d/ });
  //   expect(logos.length).toBe(3);
  // });

  // it("renders the gradient overlay correctly", () => {
  //   const { container } = render(<Banner {...mockProps} />);
  //   const gradientOverlay = container.querySelector(
  //     ".bg-gradient-to-b.from-black\\/50.to-black\\/80",
  //   );
  //   expect(gradientOverlay).toBeInTheDocument();
  // });

  // it("renders the carousel with logos correctly", () => {
  //   const { getByText } = render(<Banner {...mockProps} />);
  //   expect(getByText("Logo 1")).toBeInTheDocument();
  //   expect(getByText("Logo 2")).toBeInTheDocument();
  //   expect(getByText("Logo 3")).toBeInTheDocument();
  // });
});
