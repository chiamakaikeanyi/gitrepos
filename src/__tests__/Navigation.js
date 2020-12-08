import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Navigation from "../components/Navigation";

describe("Navigation Component", () => {
  const props = {
    goToPrevious: jest.fn(),
    goToNext: jest.fn(),
    navigation: {}
  };

  afterEach(cleanup);

  test("render the navigation buttons", () => {
    const { getAllByRole, getByText } = render(<Navigation {...props} />);

    expect(getAllByRole("button")).toHaveLength(2);
    expect(getByText("Previous")).toBeInTheDocument();
    expect(getByText("Next")).toBeInTheDocument();

    fireEvent.click(getByText("Previous"));
    expect(props.goToPrevious).toBeCalled();

    fireEvent.click(getByText("Next"));
    expect(props.goToNext).toBeCalled();
  });

  test("disable the previous button when repositories are not more than the specified number per page", () => {
    const newProps = {
      ...props,
      navigation: { next: "https://api.github.com/user/22685689/repos?per_page=20&page=2" }
    };
    const { getByTestId, getByText } = render(<Navigation {...newProps} />);
    expect(getByTestId("next")).not.toBeDisabled();

    fireEvent.click(getByText("Next"));
    expect(props.goToNext).toBeCalled();
  });
});
