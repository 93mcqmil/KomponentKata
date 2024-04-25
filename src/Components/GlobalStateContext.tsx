import { ReactNode, createContext, useState } from "react";

// Define the type for your global state
type GlobalState = {
  monsters: Monster[];
  addMonster: (newMonster: Monster) => void;
  removeMonster: (monsterName: string) => void;
};

//Define the type for a Monster which tells us what information each monster has.
export type Monster = {
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
  addMonster: () => {},
  removeMonster: () => {}, // use the newMonster parameter to update the state
});

//Create a provider component to wrap around my application. (its like a house where our monster tracking box lives)
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  //Define state variables and functions to update the state(Here we also store our monsters)
  const [monsters, setMonsters] = useState<Monster[]>([]);
  console.log("all monsters:", monsters);
  const addMonster = (newMonster: Monster) => {
    //check if monster exists
    const monsterExists = monsters.some(
      (monster) => monster.name === newMonster.name
    );
    //if monster dont exist add it to the state
    if (!monsterExists) {
      setMonsters((prevMonsters) => [...prevMonsters, newMonster]);
    }
  };
  const removeMonster = (monsterName: string) => {
    setMonsters((prevMonsters) =>
      prevMonsters.filter((monster) => monster.name !== monsterName)
    );
  };

  //pass state and functions through the context provider
  const state: GlobalState = {
    monsters,
    addMonster,
    removeMonster,
  };

  //Finally we wrap everything up in our house(GlobalStateProvider) and make it available for others to use.
  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
};
