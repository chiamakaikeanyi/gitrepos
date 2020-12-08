import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../components/Input";

describe("Input Component", () => {
  const props = {
    className: "",
    handleChange: jest.fn(),
    label: "GitHub username",
    name: "username",
    placeholder: "Input a GitHub username",
    testId: "username",
    type: "search"
  };

  afterEach(cleanup);

  test("render an accessible input field", () => {
    const { getByTestId } = render(<Input {...props} />);
    expect(screen.getByLabelText("GitHub username")).toBeInTheDocument();
    expect(getByTestId("username")).toHaveValue("");
  });

  test("display the value entered", () => {
    const { getByTestId } = render(<Input {...props} />);
    userEvent.type(getByTestId("username"), "chiamakaikeanyi");
    expect(getByTestId("username")).toHaveValue("chiamakaikeanyi");
  });
});
