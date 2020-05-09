import store from "../redux/store";
import socket from "../api/socket";

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

let pressedKey = "";
let isTimeout = true;

function handleKeyDown(e) {
  if (isTimeout) {
    isTimeout = false;

    let socketId = store.getState().playersInfo.socketId;

    if (pressedKey !== e.keyCode) {
      switch (e.keyCode) {
        case 37:
          socket.emit("player walk", { socketId, direction: -1 });
          break;
        case 39:
          socket.emit("player walk", { socketId, direction: 1 });
          break;
        default:
          break;
      }

      pressedKey = e.keyCode;
    }
  }
}

function handleKeyUp(e) {
  let socketId = store.getState().playersInfo.socketId;

  if (e.keyCode === pressedKey) {
    switch (e.keyCode) {
      case 37:
        socket.emit("player idle", socketId);
        break;
      case 39:
        socket.emit("player idle", socketId);
        break;
      default:
        break;
    }

    pressedKey = "";
  }
}

setInterval(() => {
    isTimeout = true;
  }, 40);