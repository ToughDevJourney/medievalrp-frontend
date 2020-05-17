import React from "react";
import { Stage, Layer } from "react-konva";
import Player from './player/player';
import BG from './bg/bg';
import FG from './fg/fg';

function Canvas(props) {

    React.useEffect(() => {
        props.connectUser();  
      }, []);

      

    let htmlPlayersArr = props.playersArr.map((el) => <Player key={el.socketId} {...el} />);

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer >
                <BG />
                {htmlPlayersArr}
                <FG />
            </Layer>
        </Stage>
    );

}

export default Canvas;