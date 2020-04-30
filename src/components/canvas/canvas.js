import React from "react";
import { Stage, Layer } from "react-konva";
import Player from './player/player';
import BG from './bg/bg';


function Canvas(props) {
    let htmlPlayersArr = props.playersArr.map((el) => <Player key={el._id} {...el} />);

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <BG />
            </Layer>
            <Layer>
                {htmlPlayersArr}
            </Layer>
        </Stage>
    );

}

export default Canvas;