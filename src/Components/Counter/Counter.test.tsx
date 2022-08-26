import { render } from "@testing-library/react";
import React from "react";

describe("This is the browser testing", () => {
  //snapshot testing for the counter
  test("Snapshot test for the counter", () => {
    const { asFragment } = render(<button>Click</button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
