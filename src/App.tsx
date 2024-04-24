import AddMonsterForm from "./Components/AddMonster/AddMonsterForm";
import { GlobalStateProvider } from "./Components/GlobalStateContext";
import InfoBox from "./Components/InfoBox/InfoBox";
import Monsters from "./Components/Monster/Monster";
import MonsterDataLoader from "./Components/MonsterData";

function App() {
  return (
    <GlobalStateProvider>
      <Monsters />
      <MonsterDataLoader />
      <AddMonsterForm />
    </GlobalStateProvider>
  );
}

export default App;
