import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Counter from "../src/components/Counter";

it("renders initial value provided in props", () => {
  const initialValue = 10;
  const { getByTestId } = render(<Counter initialValue={initialValue} />);
  expect(getByTestId("counter-input")).toHaveValue(initialValue);
});

it("a click event on 'decrement' button decrements the displayed value", () => {
  const initialValue = 10;
  const { getByTestId, getByText } = render(
    <Counter initialValue={initialValue} />
  );

  fireEvent.click(getByText("-"));

  const expectedValue = initialValue - 1;
  expect(getByTestId("counter-input")).toHaveValue(expectedValue);
});

it("a click event on 'increment' button increments the displayed value", () => {
  const initialValue = 10;
  const { getByTestId, getByText } = render(
    <Counter initialValue={initialValue} />
  );

  fireEvent.click(getByText("+"));

  const expectedValue = initialValue + 1;
  expect(getByTestId("counter-input")).toHaveValue(expectedValue);
});
