import { useContext } from "react";
import "../../Sass/_monster-card.scss";
import { GlobalStateContext } from "../GlobalStateContext";

const Monsters: React.FC = () => {
  const { monsters } = useContext(GlobalStateContext);
  return (
    <div>
      <button></button>
      {monsters.map((monster, index) => (
        <div key={index} className='Monster-wrapper'>
          <h3 className='header'>Monster</h3>
          <p>
            Name: {monster.name} <br />
            type: {monster.type} <br />
            strength: {monster.strength} <br />
            speed: {monster.speed} <br />
            health: {monster.health} <br />
          </p>
        </div>
      ))}
    </div>
  );
};
export default Monsters;
