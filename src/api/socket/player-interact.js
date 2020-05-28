import store from '../../redux/store'

let socket = null;
let status = "idle";

export function setPlayerInteractSocket(newSocket) {
  socket = newSocket;

  document.onkeydown = handleKeyDown;
  document.onkeyup = handleKeyUp;
}

function handleKeyDown(e) {
  if (!store.getState().chatInfo.inputFocus) {
    switch (e.keyCode) {
      case 37:
        if (status !== "walk-left") {
          socket.emit("player walk", -1);
          status = "walk-left";
        }
        break;
      case 39:
        if (status !== "walk-right") {
          socket.emit("player walk", 1);
          status = "walk-right";
        }
        break;
      default:
        break;
    }
  }  
}


function handleKeyUp(e) {
  switch (e.keyCode) {
    case 37:
      if (status !== "walk-right") {
        socket.emit("player idle");
        status = "idle";
      }
      break;
    case 39:
      if (status !== "walk-left") {
        socket.emit("player idle");
        status = "idle";
      }
      break;
    default:
      break;
  }
}

