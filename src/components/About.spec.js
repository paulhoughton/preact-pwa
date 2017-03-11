import { h } from "preact";
import render from "preact-render-to-string";
import About from "./About";

describe("About", () => {
  it("Renders correctly`", () => {
    expect(render(About)).toMatchSnapshot();
  });
});
