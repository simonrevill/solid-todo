import { render, screen } from "./test-utils";

import App from "../src/App";

describe("rendering", () => {
  it("renders heading", () => {
    // Arrange
    render(() => <App />);
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /Vite \+ Solid/i,
    });

    // Assert
    expect(heading).toBeVisible();
  });
});
