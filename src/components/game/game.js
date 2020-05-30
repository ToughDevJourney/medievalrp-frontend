import React, {useEffect} from "react";
import CanvasContainer from './canvas/canvas-container'
import GameUIContainer from "./game-ui/game-ui-container"
import "./game.css"

function Game(props) {

  useEffect(() => {
    props.connectUser();
    // eslint-disable-next-line
  }, []);

  if(props.playersLoading){    
    return <div className="game-area"><span className="game-area_label-loading">Загрузка...</span></div>
  }

  return (
    <div className="game-area">
        <CanvasContainer />
        <GameUIContainer />
    </div>
  );
}

export default Game;
