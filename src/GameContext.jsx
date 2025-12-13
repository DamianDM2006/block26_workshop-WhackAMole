import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [playingField, setPlayingField] = useState([]);


  const value ={playingField};

return <GameContext.Provider value={value}>{ children }</GameContext.Provider>
}

  export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw Error("useGame must be used within a GameProvider");
  }
  return context;
}

  