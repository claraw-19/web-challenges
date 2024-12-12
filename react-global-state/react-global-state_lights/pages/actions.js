import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({
  lights,
  countLightsOn,
  handleAllOn,
  handleAllOff,
}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions
        lights={lights}
        countLightsOn={countLightsOn}
        handleAllOn={handleAllOn}
        handleAllOff={handleAllOff}
      />
    </>
  );
}
