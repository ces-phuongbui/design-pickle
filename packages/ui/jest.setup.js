// Add custom jest matchers for testing-library
require("@testing-library/jest-dom");

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    return { type: "img", props };
  },
}));

// Mock next/link
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, href, ...rest }) => {
    return { type: "a", props: { href, ...rest, children } };
  },
}));
