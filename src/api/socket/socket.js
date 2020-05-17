import openSocket from "socket.io-client";
import history from "../../helpers/history"
import store from "../../redux/store";
import {
  addPlayerActionCreator,
  addAllPlayersActionCreator,
  movePlayerActionCreator,
  deletePlayerActionCreator,
} from "../../redux/players-reducer";
import { setUserInfoActionCreator } from "../../redux/user-reducer";
import { setSocket } from "./player-interact";


let socket;

//вместо этой строки будет запрос в базу по айди пользака
export function connectUser() {
  debugger
  if (localStorage.getItem("accessToken") !== "null") {
    console.log(localStorage.getItem("accessToken"))
    socket = openSocket(`http://${window.location.hostname}:4000`);

    socket.on("request access token", () => {
      socket.emit("response access token", localStorage.getItem("accessToken"));
    });

    socket.on("jwt expired", () => {     
      localStorage.setItem("accessToken", null);
      localStorage.setItem("refreshToken", null);  
      console.log("expired");      
      history.push('/signin');
    });

    socket.on("user not found", () => {
      localStorage.setItem("accessToken", null);
      localStorage.setItem("refreshToken", null);  
      history.push('/signin');
    });

    socket.on("player connection", (data) => {      
      store.dispatch(setUserInfoActionCreator(data.userInfo));
      store.dispatch(addAllPlayersActionCreator(data.playersArr));
      
      setSocket(socket);

      //Ивент подключения нового (другого) игрока
      socket.on("new player connected", (data) => {
        store.dispatch(addPlayerActionCreator(data));
      });
      socket.on("move player", (data) => {
        store.dispatch(movePlayerActionCreator(data)); 
      });
      socket.on("delete player", (data) => {
        debugger
        store.dispatch(deletePlayerActionCreator(data));
      });
    });
  }
  else{
    history.push('/signin');
  }
}
