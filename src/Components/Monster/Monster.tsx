import "../../Sass/_monster-card.scss";

type Monster = {
  name: string;
  type: string;
  strength: number;
  speed: number;
  health: number;
};

const Monsters = ({ name, type, strength, speed, health }: Monster) => {
  return (
    <div className='Monster-wrapper'>
      <h3 className='header'>Monster: </h3>
      <p className='Monster-card'>
        Name: {name} <br />
        type: {type} <br />
        strength: {strength} <br />
        speed: {speed} <br />
        health: {health} <br />
      </p>
    </div>
  );
};
export default Monsters;
