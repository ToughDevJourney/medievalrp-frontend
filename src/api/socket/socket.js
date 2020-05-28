import openSocket from "socket.io-client";
import history from "../../helpers/history"
import store from "../../redux/store";
import * as players from "../../redux/players-reducer";
import * as chat from "../../redux/chat-reducer";
import * as users from "../../redux/user-reducer";
import { setPlayerInteractSocket } from "./player-interact";

let socket;

export function connectUser() {
  let accessToken = localStorage.getItem("accessToken");
  if (accessToken !== "null") {
    socket = openSocket(`http://${window.location.hostname}:4000`);

    socket.on("request access token", () => {
      socket.emit("response access token", accessToken);
    });

    socket.on("player connection", (data) => {
      store.dispatch(users.setUserInfoActionCreator(data.userInfo));
      store.dispatch(players.addAllPlayersActionCreator(data.playersArr));

      setPlayerInteractSocket(socket);

      socket.on("new player connected", (data) => {
        store.dispatch(players.addPlayerActionCreator(data));
      });
      socket.on("new message", message => {
        store.dispatch(chat.addMessageActionCreator(message));
      })
      socket.on("move player", (data) => {
        store.dispatch(players.movePlayerActionCreator(data));
      });
      socket.on("delete player", (data) => {
        store.dispatch(players.deletePlayerActionCreator(data));
      });
    });

    socket.on("jwt expired", () => {
      localStorage.setItem("accessToken", null);
      localStorage.setItem("refreshToken", null);
      history.push("/signin");
    });

    socket.on("user not found", () => {
      localStorage.setItem("accessToken", null);
      localStorage.setItem("refreshToken", null);
      history.push("/signin");
    });
        
  } else {
    history.push("/signin");
  }
}

export function sendMessage(text) {  
  let nickname = store.getState().userInfo.nickname;
  socket.emit("new message", { nickname, text });
}