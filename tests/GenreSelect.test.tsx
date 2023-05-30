import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GenreSelect from "../src/components/GenreSelect";
import userEvent from "@testing-library/user-event";

it("renders all genres passed in props", () => {
  const genres = ["All", "Documentary", "Comedy"];
  const { getByTestId, getAllByRole } = render(
    <GenreSelect genres={genres} onSelect={() => {}} />
  );

  expect(getAllByRole("listitem")).toHaveLength(3);
});

it("highlights a selected genre passed in props", async () => {
  const genres = ["All", "Documentary", "Comedy"];
  const { getByText } = render(
    <GenreSelect genres={genres} onSelect={() => {}} />
  );

  userEvent.click(getByText("Documentary"));

  await waitFor(() => {
    expect(getByText("Documentary").className).toEqual("selected");
  });
});

it("'onChange' callback receives a correct genre in arguments", async () => {
  const genres = ["All", "Documentary", "Comedy"];
  const mockOnSearchProp = jest.fn((inputValue: string) => {});
  const { getByText } = render(
    <GenreSelect genres={genres} onSelect={mockOnSearchProp} />
  );

  userEvent.click(getByText("Documentary"));

  await waitFor(() => {
    expect(mockOnSearchProp.mock.calls[0][0]).toBe("Documentary");
  });
});
