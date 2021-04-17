import React from "react";
import ReactDom from "react-dom";
import App from "./App";

//このようにjsの中でreturnしてその中でhtmlタグを書いていくのをJSX記法という。
//reactはこのようにして画面を開発していく
//returnの中身が複数行の場合はreturn( ....)のようにカッコで囲む必要がある。
//複数のタグを一つのタグで囲まないとエラーでる。
//そこで、<React.Frament></React.Frament>で囲むか<></>で囲めばエラー解消される。

ReactDom.render(<App />, document.getElementById("root"));
