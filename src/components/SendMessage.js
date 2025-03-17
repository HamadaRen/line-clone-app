import React, { useState } from 'react';
import { db, auth } from '../firebase.js';
import firebase from 'firebase/compat/app';
import { Button, Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function SendMessage({scroll}) {
  const [message, setMessage] = useState('');
  function sendMessage(e) {
    //再ロードされなくなる（エンターを押しても入力値が消えない）
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    db.collection('messages').add({
      text: message,
      photoURL,
      uid,
      //エンターキーを押した時間をとることができる
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMessage('');
    scroll.current.scrollIntoView({behavior: "smooth"})
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <Input style={{
            Width: "78%",
            fontSize: "15px",
            fontWeight: "550",
            marginLeft: "5px",
            marginBottom: "-3px"
          }} placeholder="メッセージを入力してください" type="text" onChange={(e) => setMessage(e.target.value)} value={message} />
          <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }} />
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
