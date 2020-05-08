import React, { useState, useEffect } from "react";
import { Image } from "react-konva";

function BG(props) {
    const [image, setImage] = useState(new window.Image());

    useEffect(() => {        
        let newImage = new window.Image()
        newImage.src = require('../../../sprites/bg/field-bg.png');            
        newImage.onload = () => {
            setImage(newImage);
            console.log("map loaded")
            console.log(newImage.width)
        };
    }, [props.skin])

    return (
        <Image image={image} height={1080} width={1920} />
    );

}

export default BG;