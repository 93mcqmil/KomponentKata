import { ReactNode, createContext, useState } from "react";

// Define the type for your global state
type GlobalState = {
  monsters: Monster[];
  addMonster: (newMonster: Monster) => void;
};

//Define the type for a Monster which tells us what information each monster has.
type Monster = {
  name: string;
  type: string;
  strength: number;
  speed: number;
  health: number;
};

// create a context with initial state values
// (this creates a special container called GlobalStateContext which is like a big box where we keep track of our monsters.)
export const GlobalStateContext = createContext<GlobalState>({
  monsters: [], // monsters loaded from json
  addMonster: (newMonster: Monster) => {}, // use the newMonster parameter to update the state
});

//Create a provider component to wrap around my application. (its like a house where out monster tracking box lives)
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  //Define state variables and functions to update the state(Here we also store our monsters)
  const [monsters, setMonsters] = useState<Monster[]>([]);
  console.log("Datan:", monsters);

  const addMonster = (newMonster: Monster) => {
    setMonsters([...monsters, newMonster]);
  };

  //pass state and functions through the context provider
  const state: GlobalState = {
    monsters,
    addMonster,
  };

  //Finally we wrap everything up in our house(GlobalStateProvider) and make it available for others to use.
  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
};
