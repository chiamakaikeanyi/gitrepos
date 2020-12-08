import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  const props = {
    className: "",
    disabled: false,
    handleClick: jest.fn(),
    label: "Find Repositories",
    testId: "find_repositories",
    type: "button"
  };

  afterEach(cleanup);

  test("render the correct label", () => {
    const { getByRole } = render(<Button {...props} />);
    expect(getByRole("button")).toHaveTextContent(props.label);
  });

  test("invoke an API request when clicked", () => {
    const { getByTestId } = render(<Button {...props} />);
    fireEvent.click(getByTestId("find_repositories"));
    expect(props.handleClick).toBeCalledTimes(1);
  });
});
