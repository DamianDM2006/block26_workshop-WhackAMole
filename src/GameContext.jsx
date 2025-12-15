import { createContext, useContext, useState } from "react";

const GameContext = createContext();

const rows = 3;
const columns = 3;
const holes = rows * columns;

export const GameProvider = ({ children }) => {
  const [playingField, setPlayingField] = useState(makeField());
  const [score, setScore] = useState(0);
  
  const whack = () => {
    setPlayingField(makeField(playingField));
    setScore(score + 1);
  }


  const value = {
    score,
    whack,
    playingField,
    rows,
    columns,
  };

return <GameContext.Provider value={value}>{ children }</GameContext.Provider>
}

  export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw Error("useGame must be used within a GameProvider");
  }
  return context;
}

const makeField = (playingField = []) => {
  const holeArray = Array.from({length: holes}, (_, index) => 
    ({id: index + 1,
      hasMole: false
    }));
  let mole = Math.floor(Math.random() * holes) + 1;

  while(holeArray[mole].hasMole) {
    mole = Math.floor(Math.random() * holes) + 1;
  };

  holeArray[mole].hasMole = true;
  return holeArray;
}
  