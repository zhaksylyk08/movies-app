import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchForm from "../src/components/SearchForm";
import userEvent from "@testing-library/user-event";

it("renders an input with the value equal to initial value passed in props", () => {
  const inputValue = "test";
  const { getByTestId } = render(
    <SearchForm inputValue={inputValue} onSearch={() => {}} />
  );
  expect(getByTestId("search-form-input")).toHaveValue(inputValue);
});

it("after clicking 'Submit' button, 'onChange' prop is called with proper value", () => {
  const inputValue = "test";
  const mockOnSearchProp = jest.fn((inputValue: string) => {});
  const { getByTestId, getByText } = render(
    <SearchForm inputValue={inputValue} onSearch={mockOnSearchProp} />
  );

  fireEvent.click(getByText("Search"));

  expect(mockOnSearchProp.mock.calls[0][0]).toBe(inputValue);
});

it("after pressing Enter key, 'onChange' prop is called with proper value", () => {
  const inputValue = "test";
  const mockOnSearchProp = jest.fn((inputValue: string) => {});
  const { getByTestId, getByText } = render(
    <SearchForm inputValue={inputValue} onSearch={mockOnSearchProp} />
  );

  userEvent.type(getByTestId("search-form-input"), "{enter}");

  expect(mockOnSearchProp.mock.calls[0][0]).toBe(inputValue);
});
