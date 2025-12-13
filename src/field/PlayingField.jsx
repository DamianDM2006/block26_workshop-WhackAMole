
const PlayingField = () => {

  const rows = 3;
  const columns =3;
  const holes = rows * columns;

  

  return (
    <figure className="field">
      <img
        className="hole"
        src="public/hole.png" />
    </figure>
  )
};

export default PlayingField;