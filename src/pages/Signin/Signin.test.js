import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import Signin from ".";

describe("Signin Component", () => {
  test("deve conter o titulo Login", () => {
    render(<Signin />);

    const signinTest = screen.getByText("Login");

    expect(signinTest).toBeInTheDocument();
  });

  test("Não deve conter a classe btn", () => {
    render(<Signin />);

    const signinTest = screen.getByText("Entrar");

    expect(signinTest).not.toHaveClass("btn");
  });
});