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

  it("renders text input for inputting todos", () => {
    // Arrange
    render(() => <App />);
    const input = screen.getByLabelText("Enter a todo");

    // Assert
    expect(input).toBeVisible();
  });

  it("renders text input with correct placeholder text", () => {
    // Arrange
    render(() => <App />);
    const input = screen.getByLabelText("Enter a todo");

    // Assert
    expect(input).toHaveAttribute("placeholder", "e.g. walk the dog");
  });

  it("renders submit button for the form", () => {
    // Arrange
    render(() => <App />);
    const submitButton = screen.getByRole("button", { name: /Add/i });

    // Assert
    expect(submitButton).toBeVisible();
  });

  it("renders disabled submit button by default", () => {
    // Arrange
    render(() => <App />);
    const submitButton = screen.getByRole("button", { name: /Add/i });

    // Assert
    expect(submitButton).toBeDisabled();
  });
});
