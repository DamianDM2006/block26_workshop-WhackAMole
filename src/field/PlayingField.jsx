
const PlayingField = () => {

  const rows = 3;
  const columns =3;
  const holes = rows * columns;

  const holeArray = Array.from({ length: holes }, (_, index) => 
    ({id: index + 1,
      isEmpty: true
    }));
  console.log(holeArray);


/** hole{ (type object)
 *    holeNo: which hole is this
 *    holeType: empty or mole (default is empty)
 *      if(holeType = mole) {
 *         amount of time mole is up
 *          onClick to add to score and empty hole
 *          }
} */

  return <img className="hole" />
};

export default PlayingField;