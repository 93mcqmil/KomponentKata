import monsters from "../../Data/Data.json";
import Monster from "../Monster/Monster";

const InfoBox = () => {
  const data = monsters;
  console.log("Data:", monsters);
  return (
    <>
      {data.map((monster, index) => {
        console.log("Monster:", monster);
        return (
          <Monster
            key={index}
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
