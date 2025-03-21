import { Stat } from "@repo/ui/types/index";
import { render, screen } from "@testing-library/react";
import StatsSection from "../StatsSection";

describe("StatsSection", () => {
  const mockProps: Stat = {
    __component: "section.start",
    id: "1",
    createdAt: "2023-10-01T00:00:00.000Z",
    updatedAt: "2023-10-01T00:00:00.000Z",
    title: "Our Stats",
    subTitle: "Check out our amazing statistics",
    cards: [
      {
        value: "100+",
        label: "Projects",
        subLabel: "Completed",
      },
      {
        value: "50+",
        label: "Clients",
        subLabel: "Satisfied",
      },
      {
        value: "10+",
        label: "Years",
        subLabel: "Experience",
      },
      {
        value: "24/7",
        label: "Support",
        subLabel: "Available",
      },
    ],
  };

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<StatsSection {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders the title and subtitle correctly", () => {
    render(<StatsSection {...mockProps} />);
    const title = screen.getByText("Our Stats");
    const subTitle = screen.getByText("Check out our amazing statistics");
    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  it("renders all stat cards correctly", () => {
    render(<StatsSection {...mockProps} />);
    const statCards = screen.getAllByTestId("stat-card");
    expect(statCards.length).toBe(4);

    // Check the content of the first card
    expect(screen.getByText("100+")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();

    // Check the content of the second card
    expect(screen.getByText("50+")).toBeInTheDocument();
    expect(screen.getByText("Clients")).toBeInTheDocument();
    expect(screen.getByText("Satisfied")).toBeInTheDocument();
  });

  it("renders stat cards without optional subLabel", () => {
    const propsWithoutSubLabel: Stat = {
      ...mockProps,
      cards: [
        {
          value: "100+",
          label: "Projects",
          subLabel: "",
        },
      ],
    };
    render(<StatsSection {...propsWithoutSubLabel} />);
    const statCard = screen.getByTestId("stat-card");
    expect(statCard).toBeInTheDocument();
    expect(screen.queryByText("Completed")).toBeNull();
  });
});
