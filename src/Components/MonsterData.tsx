import { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import monster from "../Data/Data.json";

//komponent för att läsa in monsterdata från json-fil genom att använda addMonster funktionen från GlobalStateContext
const MonsterDataLoader = () => {
  const { addMonster } = useContext(GlobalStateContext);
  const [newMonsterData, setNewMonsterData] = useState({
    name: "",
    type: "",
    strength: 0,
    speed: 0,
    health: 0,
  });

  useEffect(() => {
    //läs in monster från JSON-fil och lägg till varje monster i den globala staten
    monster.forEach((monster) => {
      addMonster(monster);
    });
  }, []); // tom array för att säkerställa att effekten bara körs en gång när komponenten monteras

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMonsterData({
      ...newMonsterData,
      [name]: value,
    });
  };

  //Function to add a new monster
  const handleAddMonster = () => {
    addMonster(newMonsterData);
    //reset input fields after adding new monster
    const setNewMonsterData = {
      name: "",
      type: "",
      strength: 0,
      speed: 0,
      health: 0,
    };
  };
  return (
    <>
      <input
        type='text'
        name='name'
        placeholder='name'
        value={newMonsterData.name}
        onChange={handleInputChange}
      />
      <button onClick={handleAddMonster}>Add Monster</button>
    </>
  );
};
export default MonsterDataLoader;
