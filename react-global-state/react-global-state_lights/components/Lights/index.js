import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ lights, toggleLight }) {
  return (
    <StyledLights>
      {lights.map((light) => (
        <li key={light.id}>
          <Light
            name={light.name}
            isOn={light.isOn}
            onToggle={() => toggleLight(light.id)}
          ></Light>
        </li>
      ))}
    </StyledLights>
  );

  // return (
  //   <StyledLights>
  //     <li>
  //       <Light name="Living Room" />
  //     </li>
  //     <li>
  //       <Light name="Kitchen" />
  //     </li>
  //     <li>
  //       <Light name="Bedroom" />
  //     </li>
  //     <li>
  //       <Light name="Bathroom" />
  //     </li>
  //     <li>
  //       <Light name="Garage" />
  //     </li>
  //     <li>
  //       <Light name="Porch" />
  //     </li>
  //     <li>
  //       <Light name="Garden" />
  //     </li>
  //     <li>
  //       <Light name="Office" />
  //     </li>
  //   </StyledLights>
  // );
}
