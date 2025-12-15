import { useGame } from "../GameContext";

const PlayingField = () => {
  const { playingField, rows, columns, whack } = useGame();
  console.log(playingField);
  
  
  return (
    <nav
      className="field"
      style={{
        "--columns": columns,
        "--rows": rows
      }}
    >
      {playingField.map((hole) => {if (hole.hasMole) return (
        <img
          onClick={whack}
          key={hole.id} 
          className="mole" />);
        return (<img key={hole.id} className="hole" />)}
        )}
    </nav>
  )
};

export default PlayingField;