import React from "react";
import { render, screen } from "@testing-library/react";

import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import HomePage from "../HomePAge";

describe("Greeting", () => {
  it("renders a default greeting", () => {
    render(<HomePage />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });


  it("renders greeting with a name", () => {
    render(<HomePage name={"React JS"} />);
    const text = screen.getByText("Hello, React JS!");
    expect(text).toBeInTheDocument();
  });
  
});
