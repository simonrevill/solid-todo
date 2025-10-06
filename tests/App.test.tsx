import { render, screen } from "./test-utils";

import App from "../src/App";

describe("rendering", () => {
  it("renders heading", () => {
    // Arrange
    render(() => <App />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /Solid Todo/i,
    });

    // Assert
    expect(heading).toBeVisible();
  });

  it("renders form for inputting todos", () => {
    // Arrange
    render(() => <App />);
    const form = screen.getByRole("form", {
      name: /todo-form/i,
    });

    // Assert
    expect(form).toBeVisible();
  });
});
