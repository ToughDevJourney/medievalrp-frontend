import React from "react";
import { Image, Group, Text, Tag, Label } from "react-konva";
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

  let xPos = props.nickname.length / 3;

  return (
    <Group x={props.xPos} y={props.yPos + 580}>
      <Label x={props.direction === 1 ? -xPos : -xPos-70} y={-30} >
        <Tag fill="white" opacity={0.75}/>
        <Text text={props.nickname} fill="black" padding={4} fontSize={17}/>
      </Label>
      <Image image={canvas} scaleX={props.direction} ref={imageRef} />
    </Group>
  );
};

export default Player;