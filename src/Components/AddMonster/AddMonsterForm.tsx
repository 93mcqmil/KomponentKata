import { useContext, useState } from "react";
import { GlobalStateContext, Monster } from "../GlobalStateContext";

const AddMonsterForm = () => {
  const { addMonster } = useContext(GlobalStateContext);
  const [newMonsterData, setNewMonsterData] = useState({
    name: "",
    type: "",
    strength: 0,
    speed: 0,
    health: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewMonsterData({
      ...newMonsterData,
      [name]: value,
    });
  };

  //Function to add a new monster
  const handleAddMonster = () => {
    const { name, type, strength, speed, health } = newMonsterData;
    const newMonster: Monster = { name, type, strength, speed, health };
    addMonster(newMonster);
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
          type='number'
          name='strength'
          placeholder='strength'
          value={newMonsterData.strength}
          onChange={handleInputChange}
        />
        <input
          type='number'
          name='speed'
          placeholder='speed'
          value={newMonsterData.speed}
          onChange={handleInputChange}
        />
        <input
          type='number'
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
export default AddMonsterForm;
