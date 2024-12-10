import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
  render(<Player name="Player 1" score={10} />);

  expect(screen.getByText("Player 1")).toBeInTheDocument();

  const buttons = screen.getAllByRole("button");
  expect(buttons).toHaveLength(2);

  expect(screen.getByText("10")).toBeInTheDocument();
});

test("calls callbacks when increasing or decreasing score", async () => {
  const onIncreasePlayerScore = jest.fn();
  const onDecreasePlayerScore = jest.fn();
  const user = userEvent.setup();

  render(
    <Player
      name="Player 1"
      score={10}
      onIncreasePlayerScore={onIncreasePlayerScore}
      onDecreasePlayerScore={onDecreasePlayerScore}
    />
  );

  const [decreaseButton, increaseButton] = screen.getAllByRole("button");

  await user.click(decreaseButton);
  expect(onDecreasePlayerScore).toHaveBeenCalledTimes(1);

  await user.click(increaseButton);
  expect(onIncreasePlayerScore).toHaveBeenCalledTimes(1);
});
