let pressedKey = "";
let isTimeout = true;
let socket = null;

export function setSocket(newSocket){  
  socket = newSocket;
  if(socket){    
    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
  }
}

function handleKeyDown(e) {
  if (isTimeout) {
    isTimeout = false;

    if (pressedKey !== e.keyCode) {
      switch (e.keyCode) {
        case 37:
          socket.emit("player walk", -1 );
          break;
        case 39:
          socket.emit("player walk", 1 );
          break;
        default:
          break;
      }

      pressedKey = e.keyCode;
    }
  }
}

function handleKeyUp(e) {

  if (e.keyCode === pressedKey) {
    switch (e.keyCode) {
      case 37:
        socket.emit("player idle");
        break;
      case 39:
        socket.emit("player idle");
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