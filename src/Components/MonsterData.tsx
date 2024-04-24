import { useContext, useEffect } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import monster from "../Data/Data.json";

//komponent för att läsa in monsterdata från json-fil genom att använda addMonster funktionen från GlobalStateContext
const MonsterDataLoader = () => {
  const { addMonster } = useContext(GlobalStateContext);

  useEffect(() => {
    //läs in monster från JSON-fil och lägg till varje monster i den globala staten
    monster.forEach((monster) => {
      addMonster(monster);
    });
  }, []); // tom array för att säkerställa att effekten bara körs en gång när komponenten monteras
  return null; // MonsterDataLoader returnerar inte någon visuellt innehåll. Detta är en dummy-komponent
};
export default MonsterDataLoader;
