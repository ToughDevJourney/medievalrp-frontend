import React, { useState, useEffect } from "react";
import { Image } from "react-konva";

function Player(props) {
    const [image, setImage] = useState(new window.Image());

    useEffect(() => {        
        let newImage = new window.Image()
        newImage.src = require('../../../sprites/skins/' + props.skin + '.png');         
        newImage.onload = () => {
            setImage(newImage);
            console.log("player loaded")
        };
    }, [props.skin])

    return (
        <Image image={image} x={props.xPos} y={props.yPos + 585} scaleX={props.direction}/>
    );

}

export default Player;