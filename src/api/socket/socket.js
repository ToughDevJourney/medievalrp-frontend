import openSocket from "socket.io-client";
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
  if (localStorage.getItem("accessToken")) {
    socket = openSocket(`http://${window.location.hostname}:4000`);

    socket.on("request access token", () => {
      socket.emit(
        "response access token",
        localStorage.getItem("accessToken")
      );
    });

    socket.on("jwt expired", () => {     
      console.log("expired");
    });

    socket.on("user not found", () => {
      console.log("user not found");
    });

    socket.on("player connection", (data) => {
      debugger
      store.dispatch(setUserInfoActionCreator(data.userInfo));
      store.dispatch(addAllPlayersActionCreator(data.playersArr));
      
      setSocket(socket);

      //Ивент подключения нового (другого) игрока
      socket.on("new player connected", (data) => {
        store.dispatch(addPlayerActionCreator(data));
      });
      socket.on("move player", (data) => {
        store.dispatch(movePlayerActionCreator(data)); //НЕ ПРОКИДЫВАТЬ АЙДИ, А ТЯНУТЬ ЕГО НА БЕКЕ
      });
      socket.on("delete player", (data) => {
        store.dispatch(deletePlayerActionCreator(data));
      });
    });
  }
}
