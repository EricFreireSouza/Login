import { render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import Home from ".";

describe("Home Component", () => {
  test("deve conter o titulo Usuários cadastrados", () => {
    render(<Home />);

    const homeTest = screen.getByText("Usuários cadastrados");

    expect(homeTest).toBeInTheDocument();
  });
});