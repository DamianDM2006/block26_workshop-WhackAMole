
const PlayingField = () => {

  const rows = 3;
  const columns = 3;
  const holes = rows * columns;

  const holeArray = Array.from({ length: holes }, (_, index) => 
    ({id: index + 1,
      isEmpty: true
    }));

const playingField = holeArray.map((hole) =>  <img key={hole.id} className="hole" />);
console.log('playingField', playingField);

/** hole{ (type object)
 *    holeNo: which hole is this
 *    holeType: empty or mole (default is empty)
 *      if(holeType = mole) {
 *         amount of time mole is up
 *          onClick to add to score and empty hole
 *          }
} */
  
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