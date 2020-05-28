import React, {useState, useLayoutEffect, useEffect} from "react";
import { Stage, Layer } from "react-konva";
import GameUIContainer from './game-ui/game-ui-container'
import Player from './player/player';
import BG from './bg/bg';
import FG from './fg/fg';
import './canvas.css'

function Canvas(props) {
  let htmlPlayersArr = props.playersArr.map((el) => <Player key={el._id} {...el} />);

  const [canvasSize, setCanvasSize] = useState({width: 0, height: 0});

  useEffect(() => {
    props.connectUser();
    // eslint-disable-next-line
  }, []);
  
  useLayoutEffect(() => {    
    function updateCanvasSize() {
      setCanvasSize({width: window.innerWidth, height: window.innerHeight});
    }
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  if(props.playersLoading){    
    return <div className="game-area"><span className="game-area_label-loading">Загрузка...</span></div>
  }

  return (
    <div className="game-area">
      <GameUIContainer />
      <Stage height={canvasSize.height} width={canvasSize.width}>
        <Layer>
          <BG />
          {htmlPlayersArr}
          <FG />
        </Layer>
      </Stage>
    </div>
  );

}

export default Canvas;