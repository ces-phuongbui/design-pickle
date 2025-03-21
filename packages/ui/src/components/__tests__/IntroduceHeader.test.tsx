import { ButtonType, Introduce } from "@repo/ui/types/index";
import { render, screen } from "@testing-library/react";
import IntroduceHeader from "../IntroduceHeader";

describe("IntroduceHeader", () => {
  const mockProps: Introduce = {
    __component: "section.introduce-header",
    id: "1",
    createdAt: "2023-10-01T00:00:00.000Z",
    updatedAt: "2023-10-01T00:00:00.000Z",
    title: "Welcome to Our Platform",
    description: "This is a description of our platform.",
    button: {
      label: "Get Started",
      href: "/get-started",
      type: ButtonType.DEFAULT,
      color: "#D5FF02",
    },
  };

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<IntroduceHeader {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the title correctly", () => {
    render(<IntroduceHeader {...mockProps} />);
    const title = screen.getByText("Welcome to Our Platform");
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H1");
  });

  it("renders the description correctly", () => {
    render(<IntroduceHeader {...mockProps} />);
    const description = screen.getByText(
      "This is a description of our platform.",
    );
    expect(description).toBeInTheDocument();
    expect(description.tagName).toBe("P");
  });

  it("renders the button link correctly", () => {
    render(<IntroduceHeader {...mockProps} />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/get-started");
  });
});
