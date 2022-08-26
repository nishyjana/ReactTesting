import { render, screen } from "@testing-library/react";
import React from "react";
import Title from "./Title";

describe("Title testing", () => {
  const title = "nishy";
  test("has correct title text", () => {
    render(<Title title={title} />);
    expect(screen.getByText(title)).toHaveTextContent(title);
  });
});
