/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen, within } from "@testing-library/react";
import React, { useState } from "react";
import Counter from "./Counter";

describe("This is the browser testing", () => {
  //snapshot testing for the counter
  render(<Counter />);
  test("Snapshot test for the counter", () => {
    const { asFragment } = render(<button>Click</button>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Testing firevents for counter", () => {
    const handleClick = jest.fn();
    const button = <button onClick={handleClick}>Click</button>;

    render(button);

    fireEvent.click(screen.getByText(/Click/i));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test("Testing firevents for counter value", () => {
    
    const { getByTestId } = render(<Counter />);
    

    fireEvent.click(screen.getByText(/Click/i));
    expect(getByTestId('valuess')).toHaveTextContent("1");
  });
});
