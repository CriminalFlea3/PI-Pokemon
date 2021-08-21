import React from "react";
import { render } from "@testing-library/react";
import { shallow, mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./Navbar";

describe("Navbar", () => {
  it("Debe tener un link con Pokedex", () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>
    );
    const element = container.querySelectorAll("a")[1];
    expect(element.innerHTML).toBe("Pokedex");
  });

  it("Debe tener un link con Create", () => {
    const { container } = render(
        <Router>
          <Navbar />
        </Router>
      );
    const element = container.querySelectorAll("a")[2]
    expect(element.innerHTML).toBe("Create")
  })
  it("Debe tener un link con Create", () => {
    const { container } = render(
        <Router>
          <Navbar />
        </Router>
      );
    const element = container.querySelectorAll("a")[3]
    expect(element.innerHTML).toBe("My team")
  })
});
