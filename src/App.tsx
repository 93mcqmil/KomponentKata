import { GlobalStateProvider } from "./Components/GlobalStateContext";
import InfoBox from "./Components/InfoBox/InfoBox";
import Monsters from "./Components/Monster/Monster";

function App() {
  return (
    <GlobalStateProvider>
      <Monsters />
      <InfoBox />
    </GlobalStateProvider>
  );
}

export default App;
