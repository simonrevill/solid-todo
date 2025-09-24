import { render } from "@solidjs/testing-library";
import { getHeading } from "test-utils";

import App from "../src/App";

describe("", () => {
  it("renders heading", () => {
    // Arrange
    render(() => <App />);
    const heading = getHeading();

    // Assert
    expect(heading).toBeVisible();
  });
});
