
const PlayingField = () => {

  const rows = 3;
  const columns = 3;
  const holes = rows * columns;

  const holeArray = Array.from({ length: holes }, (_, index) => 
    ({id: index + 1,
      isEmpty: true
    }));

const playingField = holeArray.map((hole) =>  <img key={hole.id} className="hole" />);
  
  return (
    <nav
      className="field"
      style={{
        "--columns": columns,
        "--rows": rows
      }}
    >
      {playingField}
    </nav>
  )
};

export default PlayingField;