import { useGame } from "../GameContext";

const Controls = () => {
  const { score } = useGame();

  return (
    <section className="control">
      <p>Welcome to Whack-A-Mole</p>
      <button className="reset">Push to start</button>
      <p>Your Score: {score}</p>
    </section>
  )
};

export default Controls;