/* eslint react-hooks/exhaustive-deps : off */

import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

//イベント名on+最初は大文字イベント名 e.g. onClick
//onClick={}のように{}を使うことで、jsのコードと認識させることが出来る。
//style={{}} 外側の{}はjsの書き方だよ～内側の{}はstyleのオブジェクトの{}
const App = () => {
  console.log("さいしょ！");
  //一つ目にstateの変数名(num)、二つ目にstate変数を更新していく関数名(SetNum)
  //初期値も設定出来る。numの変数の初期 値を0にしたい場合は、useState(0);と書く
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    console.log("showFlag関数");
    setFaceShowFlag(!faceShowFlag);
  };
  //処理の関心の分離のときに使用する関数
  //第一引数にアロー関数、
  //基本的にはただ、第一引数に関数を持たせるだけでは特に高価なし。
  //第二引数に配列を持たせることで高価が分かる。
  //第二引数に空の関数を持たせると、そのコンポーネントで最初の一回だけ実行した処理(今はconsole.logの出力処理)のみを持たせることが出来る。
  //もし、配列の中にstate変数(num)を持たせると、その変数に変化があったときのみ処理を実行することになる。
  //処理の中で使っている変数はすべて、配列の中に書いてあげないと警告がでるので、書いてあげる。
  //ただ、やはり、faceShowFlagには関心をもたせたくないので、eslint警告をoffにすることも出来る。
  //その方法はファイル全体に対してオフにするには一番上段に/* eslint react-hooks/exhaustive-deps : off */と書く
  //その部分だけするには、その部分で// eslint-disable-next-line  react-hooks/exhaustive-depsと書くとその行だけoffに出来る。
  useEffect(() => {
    // console.log("useEffect!!");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line  react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(._.)</p>}
    </>
  );
};

export default App; //このファイルとしてこのAppを他の所でも使用出来るようになる。
