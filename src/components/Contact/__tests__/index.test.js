import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ContactForm from "..";

afterEach(cleanup);

describe("Contact component", () => {
  // first test
  it("renders", () => {
    render(<ContactForm />);
  });
  // second test
  it("matches snapshot DOM node structure", () => {
    // render About
    const { asFragment } = render(<ContactForm></ContactForm>);
    expect(asFragment()).toMatchSnapshot();
  });

  it("h1 renders", () => {
    const { getByTestId } = render(<ContactForm />);
    // eslint-disable-next-line
    expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
  });
});
