import { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import monsters from "../Data/Data.json";

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
    monsters.forEach((monster) => {
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
    setNewMonsterData({
      name: "",
      type: "",
      strength: 0,
      speed: 0,
      health: 0,
    });
  };
  return (
    <>
      <div className='Input-form'>
        <input
          type='text'
          name='name'
          placeholder='name'
          value={newMonsterData.name}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='type'
          placeholder='type'
          value={newMonsterData.type}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='strength'
          placeholder='strength'
          value={newMonsterData.strength}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='speed'
          placeholder='speed'
          value={newMonsterData.speed}
          onChange={handleInputChange}
        />
        <input
          type='text'
          name='health'
          placeholder='health'
          value={newMonsterData.health}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleAddMonster}>Add Monster</button>
    </>
  );
};
export default MonsterDataLoader;
