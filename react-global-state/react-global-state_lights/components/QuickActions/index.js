import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  lights,
  countLightsOn,
  handleAllOn,
  handleAllOff,
}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          handleAllOff();
        }}
        disabled={countLightsOn === 0}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          handleAllOn();
        }}
        disabled={countLightsOn === lights.length}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
