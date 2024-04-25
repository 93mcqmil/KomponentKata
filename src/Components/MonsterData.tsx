import { useContext, useEffect } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import monsters from "../Data/Data.json";

const MonsterDataLoader = () => {
  const { addMonster } = useContext(GlobalStateContext);

  // Use useEffect to ensure state update happens after the initial render
  useEffect(() => {
    // Add monsters from the JSON file to the global state when the component is mounted
    monsters.forEach((monster) => {
      addMonster(monster);
    });
  }, []); // Empty dependency array ensures this effect runs only once after initial render
  console.log("Dependency:", monsters);
  return null;
};

export default MonsterDataLoader;
