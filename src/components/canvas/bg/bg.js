import React, { useState, useEffect } from "react";
import { Image } from "react-konva";

function BG(props) {
    const [image, setImage] = useState(new window.Image());

    useEffect(() => {        
        let newImage = new window.Image()
        newImage.src = require('../../../sprites/bg/forest.jpg');            
        newImage.onload = () => {
            setImage(newImage);
            console.log("map loaded")
        };
    }, [props.skin])

    return (
        <Image image={image} x={props.xPos} height={window.innerHeight} />
    );

}

export default BG;