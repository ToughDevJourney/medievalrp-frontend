import React, { useState, useEffect } from "react";
import "./game-ui.css";

function GameUI(props) {
  let message = React.createRef();
  let messagesBox = React.createRef();

  let [messageText, setMesssageText] = useState("");

  useEffect(() => {
    messagesBox.current.scrollTop = messagesBox.current.scrollHeight;
  }, [props.messagesArr, messagesBox]);

  function inputChangeHandler(value) {
    setMesssageText(value);
  }

  function keyPresHandler(key) {    
    if (key === "Enter") {
      sendMessage();
    }
  }

  function sendMessage() {
    if (messageText) {
      props.sendMessage(messageText);
      setMesssageText("");
      message.current.focus();
      messagesBox.current.scrollTop = messagesBox.current.scrollHeight;
    }
  }

  return (
    <div className="game-ui">
      <div className="message">
        <textarea
          className="message_textarea"
          value={props.messagesArr.join("\n")}
          readOnly
          ref={messagesBox}
        />
        <div className="new-message">
          <input
            className="new-message_input"
            value={messageText}
            onKeyPress={(e) => keyPresHandler(e.key)}
            onChange={(e) => inputChangeHandler(e.target.value)}
            onFocus={props.switchInputFocus}
            onBlur={props.switchInputFocus}
            placeholder="Напишите что-нибудь..."
            maxLength="70"
            ref={message}
          />
          <button className="new-message_button" onClick={sendMessage}>
            >>>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameUI;
