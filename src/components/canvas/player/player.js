import React from "react";
import { Image } from "react-konva";
// gifler will be imported into global window object
import "gifler";

const Player = (props) => {
    let src = require('../../../sprites/skins/' + props.skin + '-idle.gif');
  const imageRef = React.useRef(null);
  const canvas = React.useMemo(() => {
    const node = document.createElement("canvas");
    return node;
  }, []);

  React.useEffect(() => {

    let anim;
    window.gifler(src).get(a => {
      anim = a;
      anim.animateInCanvas(canvas);
      
      anim.onDrawFrame = (ctx, frame) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(frame.buffer, frame.x, frame.y);
        imageRef.current.getLayer().draw();
      };
    });
    return () => anim.stop();
  }, [src, canvas]);

  return <Image image={canvas} x={props.xPos} y={props.yPos + 580} scaleX={props.direction} ref={imageRef} />;
};

export default Player;