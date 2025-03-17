import React, { useEffect, useRef, useState } from 'react';
import SignOut from './SignOut';
import { auth, db } from '../firebase.js';
import SendMessage from './SendMessage.js';

const Line = () => {
  const scroll = useRef();
  const [messages, setMessages] = useState([]);
  //第2引数の[]は空だとマウント時の１回だけ処理を走らせるという意味になる
  useEffect(() => {
    db.collection('messages')
      .orderBy('createdAt')
      .limit(50)
      //.onSnapshotは対象のドキュメントまたは.collection内の複数のドキュメントの更新を検知しデータを取得する
      .onSnapshot((snapshot) => {
        //doc.data()でfirestoreのドキュメントが作成、変更、削除されるたびに出力される
        setMessages(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  //uidとcurrentUser.idが一緒だった時にsentのクラスネームで違かった時はreceivedのメッセージを受け取る側のcssを当てる
  return (
    <div>
      {console.log(messages)}
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div>
            <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  );
};

export default Line;
