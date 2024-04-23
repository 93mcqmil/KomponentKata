import monster from "../../Data/Data.json";
import Monster from "../Monster/Monster";

const InfoBox = () => {
  const data = monster;
  console.log(monster);
  return (
    <>
      {data.map((monster) => {
        return (
          <Monster
            key={monster.name}
            name={monster.name}
            type={monster.type}
            strength={monster.strength}
            speed={monster.speed}
            health={monster.health}
          />
        );
      })}
    </>
  );
};
export default InfoBox;
