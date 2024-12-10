import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Name"
      placeholder="Enter your name"
      name="username"
      value=""
      onChange={() => {}}
      required={true}
    />
  );

  const label = screen.getByText("Name");
  expect(label).toHaveAttribute("for", "username");

  const input = screen.getByPlaceholderText("Enter your name");
  expect(input).toHaveAttribute("name", "username");
  expect(input).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();
  const user = userEvent.setup();

  render(
    <Input
      labelText="Name"
      placeholder="Enter your name"
      name="username"
      value=""
      onChange={handleChange}
    />
  );

  const input = screen.getByPlaceholderText("Enter your name");
  await user.type(input, "Test");

  expect(handleChange).toHaveBeenCalledTimes(4);
});
