import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { Button } from "./index";
import { BUTTON_TEST_ID } from "./consts";

describe("Button", () => {
  test("Should be able to render the button", () => {
    const { getByTestId } = render(<Button>Click me</Button>);
    expect(getByTestId(BUTTON_TEST_ID)).toBeInTheDocument();
  });

  test("Should be able to render based on the children prop", () => {
    const { getByTestId } = render(<Button>Click me</Button>);
    expect(getByTestId(BUTTON_TEST_ID)).toHaveTextContent("Click me");
  });

  test("Should be able to fire event", () => {
    // create a mock function
    const handleClick = vi.fn();

    const { getByTestId } = render(
      <Button onClick={handleClick}>Click me</Button>
    );

    fireEvent.click(getByTestId(BUTTON_TEST_ID));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Should be able to have deafult style", () => {
    const { getByTestId } = render(<Button>Click me</Button>);

    expect(getByTestId(BUTTON_TEST_ID)).toHaveStyle({
      width: "100%",
      maxWidth: "380px",
      height: "40px",
      backgroundColor: "#00F",
      color: "#FFF",
    });
  });
});
