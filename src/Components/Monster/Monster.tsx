import { useContext } from "react";
import "../../Sass/_monster-card.scss";
import { GlobalStateContext } from "../GlobalStateContext";

const Monsters: React.FC = () => {
  const { monsters, removeMonster } = useContext(GlobalStateContext);

  const handleRemoveMonster = (monsterName: string) => {
    removeMonster(monsterName);
  };
  return (
    <>
      {monsters.map((monster, index) => (
        <div key={index}>
          <h3>Monster</h3>
          <p>
            Name: {monster.name} <br />
            type: {monster.type} <br />
            strength: {monster.strength} <br />
            speed: {monster.speed} <br />
            health: {monster.health} <br />
          </p>
          <button onClick={() => handleRemoveMonster(monster.name)}>
            Remove
          </button>
        </div>
      ))}
    </>
  );
};
export default Monsters;
