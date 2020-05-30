import React, {useState, useLayoutEffect} from "react";
import { Stage, Layer } from "react-konva";
import Player from './player/player';
import BG from './bg/bg';
import FG from './fg/fg';
import './canvas.css'

function Canvas(props) {
  
  let htmlPlayersArr = props.playersArr.map((el) => <Player key={el.socketId} {...el} />);
  let [canvasSize, setCanvasSize] = useState({width: 0, height: 0});
  

  useLayoutEffect(() => {    
    function updateCanvasSize() {
      setCanvasSize({width: window.innerWidth, height: window.innerHeight});
    }
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);



  return (
    <div className="game-canvas">
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