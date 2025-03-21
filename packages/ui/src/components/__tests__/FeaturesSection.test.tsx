import { ButtonType, Features } from "@repo/ui/types/index";
import { render } from "@testing-library/react";
import FeaturesSection from "../FeaturesSection";

describe("FeaturesSection", () => {
  // Mock data for testing
  const mockFeatures: Features = {
    __component: "section.features",
    id: "1",
    createdAt: "2023-10-01T00:00:00.000Z",
    updatedAt: "2023-10-01T00:00:00.000Z",
    title: "Our Amazing Features",
    subTitle: "Explore what makes us unique",
    cards: [
      {
        id: 1,
        title: "Feature 1",
        description: "This is the first feature. It's awesome!",
        backgroundImage: {
          id: "img1",
          documentId: "doc1",
          url: "https://example.com/image1.jpg",
          alternativeText: "Feature 1 Image",
          name: "Feature 1",
        },
        cta: {
          label: "Learn More",
          href: "/feature1",
          type: ButtonType.LINK,
        },
      },
      {
        id: 2,
        title: "Feature 2",
        description: "This is the second feature. It's even better!",
        backgroundImage: {
          id: "img2",
          documentId: "doc2",
          url: "https://example.com/image2.jpg",
          alternativeText: "Feature 2 Image",
          name: "Feature 2",
        },
        cta: {
          label: "Get Started",
          href: "/feature2",
          type: ButtonType.DEFAULT,
        },
      },
      {
        id: 3,
        title: "Feature 3",
        description: "This is the third feature. It's the best!",
        cta: {
          label: "Discover",
          href: "/feature3",
          type: ButtonType.OUTLINE,
        },
      },
    ],
  };

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<FeaturesSection {...mockFeatures} />);

    // Match snapshot
    expect(container).toMatchSnapshot();
  });

  it("renders correctly without background images", () => {
    const propsWithoutBackground: Features = {
      __component: "section.features",
      id: "1",
      createdAt: "2023-10-01T00:00:00.000Z",
      updatedAt: "2023-10-01T00:00:00.000Z",
      title: "Our Amazing Features",
      subTitle: "Explore what makes us unique",
      cards: [
        {
          id: 1,
          title: "Feature 1",
          description: "This is feature 1",
          cta: {
            label: "Learn More",
            href: "/feature1",
            type: ButtonType.DEFAULT,
          },
        },
      ],
    };

    const { container, getByText } = render(
      <FeaturesSection {...propsWithoutBackground} />,
    );

    // Check if the feature card is rendered without a background image
    expect(getByText("Feature 1")).toBeInTheDocument();
    expect(getByText("This is feature 1")).toBeInTheDocument();

    // Match snapshot
    expect(container).toMatchSnapshot();
  });
});
