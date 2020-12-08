import { render } from "@testing-library/react";
import ErrorBoundary from "../components/App";

describe("ErrorBoundary Component", () => {
  const props = {
    children: <p>GitRepos</p>
  };

  test("render the app correctly", () => {
    const { container } = render(<ErrorBoundary {...props} />);
    expect(container.firstChild).not.toBeNull();
  });
});
