import { useContext } from "react";
import "../../Sass/_monster-card.scss";
import { GlobalStateContext } from "../GlobalStateContext";

const Monsters: React.FC = () => {
  const { monsters } = useContext(GlobalStateContext);
  return (
    <>
      {monsters.map((monster, index) => (
        <div>
          <h3>Monster</h3>
          <p>
            Name: {monster.name} <br />
            type: {monster.type} <br />
            strength: {monster.strength} <br />
            speed: {monster.speed} <br />
            health: {monster.health} <br />
          </p>
        </div>
      ))}
    </>
  );
};
export default Monsters;
