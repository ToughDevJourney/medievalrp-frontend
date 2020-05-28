import React from "react";
import { Image, Group, Text, Tag, Label } from "react-konva";
// gifler will be imported into global window object
import "gifler";

const Player = (props) => {
  let src = require('../../../sprites/skins/' + props.skin + '-idle.gif');
  let [YShift, setYShift] = React.useState(780);

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
      setYShift(780 - canvas.height)
      anim.onDrawFrame = (ctx, frame) => {       
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(frame.buffer, frame.x, frame.y);
        imageRef.current.getLayer().draw();
      };
    });
    return () => anim.stop();
  }, [src, canvas]);



  let nickname = (
    <Group y={-20}>
      <Label>
        <Tag
          fill="white"
          opacity={0.75}
          pointerDirection="down"
          pointerWidth={10}
          pointerHeight={10}
          shadowColor="black"
          shadowBlur={20}
          shadowOpacity={0.3}
        />
        <Text
          text={props.nickname + props.message}
          align="center"
          fill="black"
          padding={7}
          fontSize={18}
        />
      </Label>
    </Group>
  );
 

  return (
    <Group x={props.xPos} y={props.yPos + YShift}>
      {nickname}
      <Image image={canvas} scaleX={props.direction} ref={imageRef} offsetX={canvas.width / 2}/>
    </Group>
  );
};

export default Player;