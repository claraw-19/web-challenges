import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: true },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function toggleLight(id) {
    setLights((lights) =>
      lights.map((light) => {
        if (id === light.id) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );
  }

  const lightsOn = lights.filter((light) => light.isOn);
  // console.log(lightsOn);
  const countLightsOn = lightsOn.length;

  function handleAllOn() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  function handleAllOff() {
    setLights((lights) =>
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  const isDimmed = countLightsOn === 0 ? true : false;

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        toggleLight={toggleLight}
        countLightsOn={countLightsOn}
        handleAllOn={handleAllOn}
        handleAllOff={handleAllOff}
        isDimmed={isDimmed}
      />
    </Layout>
  );
}
