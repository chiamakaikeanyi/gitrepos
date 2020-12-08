import React from "react";
import { cleanup, render } from "@testing-library/react";
import Listing from "../components/Listing";

describe("Listing Component", () => {
  const props = {
    testId: "repositories",
    repositories: []
  };

  afterEach(cleanup);

  test("render element when properly passed", () => {
    render(<Listing {...props} />);
    expect(document.querySelector("a")).not.toBeInTheDocument();
  });

  test("render the repository name, url, star and fork count", () => {
    const newProps = {
      ...props,
      repositories: [
        {
          id: 174069695,
          name: "dotfiles",
          html_url: "https://github.com/chiamakaikeanyi/dotfiles",
          stargazers_count: 9,
          forks_count: 5
        }
      ]
    };

    const { getByText } = render(<Listing {...newProps} />);

    expect(getByText(/dotfiles/i)).toBeInTheDocument();
    expect(document.querySelector("a").getAttribute("href")).toBe("https://github.com/chiamakaikeanyi/dotfiles");
    expect(getByText(/9/i)).toBeInTheDocument();
    expect(getByText(/5/i)).toBeInTheDocument();
  });

  test("does not private repositories", () => {
    const newProps = {
      ...props,
      repositories: [
        {
          id: 174069695,
          private: false
        }
      ]
    };
    render(<Listing {...props} />);
    expect(newProps.repositories[0].private).toBeFalsy();
  });
});
