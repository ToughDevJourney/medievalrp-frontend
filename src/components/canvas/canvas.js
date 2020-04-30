import React, { useState, useEffect } from "react";
import { Stage, Layer, Image } from "react-konva";


function Canvas(props) {    
    const [image, setImage] = useState(new window.Image());

    useEffect(() => {
        let newImage = new window.Image()
        newImage.src = "http://konvajs.github.io/assets/yoda.jpg";
        newImage.onload = () => {
            setImage(newImage);
            console.log("image loaded")
        };
    }, [])

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Image image={image} x={props.playersArr[0].xPos}/>
            </Layer>
        </Stage>
    );

}

export default Canvas;