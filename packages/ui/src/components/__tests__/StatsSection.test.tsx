import React from "react";
import { render, screen } from "@testing-library/react";
import StatsSection from "../StatsSection";

describe("StatsSection", () => {
  const mockStats = [
    {
      value: "20k+",
      label: "Active Users",
      subLabel: "and growing",
    },
    {
      value: "1M+",
      label: "Downloads",
      subLabel: "across platforms",
    },
    {
      value: "99.9%",
      label: "Uptime",
      subLabel: "reliability",
    },
    {
      value: "24/7",
      label: "Support",
      subLabel: "always available",
    },
  ];

  const defaultProps = {
    title: "Our Impact",
    description: "See what we've achieved together",
    stats: mockStats,
  };

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<StatsSection {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("renders section title and description", () => {
    render(<StatsSection {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("renders all stat cards with correct data", () => {
    render(<StatsSection {...defaultProps} />);
    mockStats.forEach((stat) => {
      expect(screen.getByText(stat.value)).toBeInTheDocument();
      expect(screen.getByText(stat.label)).toBeInTheDocument();
    });
  });

  it("renders correct number of stat cards", () => {
    render(<StatsSection {...defaultProps} />);
    const statCards = screen.getAllByTestId("stat-card");
    expect(statCards).toHaveLength(mockStats.length);
  });
});
