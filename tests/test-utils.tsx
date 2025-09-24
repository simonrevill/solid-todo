import { screen } from "@solidjs/testing-library";

export const getHeading = () =>
  screen.getByRole("heading", { level: 1, name: /Vite \+ Solid/i });
