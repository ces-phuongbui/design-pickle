import { render, screen, fireEvent } from "@testing-library/react";
import {
  IntroduceHeader,
  ButtonType,
} from "@repo/ui/components/IntroduceHeader";
import { useRouter } from "next/navigation";

// Mock the useRouter hook from Next.js
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("IntroduceHeader", () => {
  // Define mock router push function
  const mockPush = jest.fn();

  // Setup mock before each test
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    mockPush.mockClear();
  });

  // Test props
  const defaultProps = {
    title: "Welcome Title",
    description: "This is a test description for the header component",
    button: {
      label: "Click Me",
      href: "/test-path",
      type: ButtonType.DEFAULT,
      color: "#ff0000",
    },
  };

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<IntroduceHeader {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("displays title and description correctly", () => {
    render(<IntroduceHeader {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });



  it("navigates to correct href when button is clicked", () => {
    render(<IntroduceHeader {...defaultProps} />);

    const button = screen.getByText(defaultProps.button.label);
    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith(defaultProps.button.href);
  });

  it('uses default path "/" when href is undefined', () => {
    const propsWithNoHref = {
      ...defaultProps,
      button: {
        ...defaultProps.button,
        href: undefined,
      },
    };

    render(<IntroduceHeader {...propsWithNoHref} />);

    const button = screen.getByText(defaultProps.button.label);
    fireEvent.click(button);
    expect(mockPush).toHaveBeenCalledWith("/");
  });

});
