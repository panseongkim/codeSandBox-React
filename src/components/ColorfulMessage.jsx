import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    //color: color, // objectのプロパティ名とその値が一緒であれば、colorだけでOK
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

//default export
export default ColorfulMessage;

/** 
 * 普通のexport→この場合は、importする先でimport構文が少し異なる。
 * たとえば、import {ColorfulMessage} from "./components/ColorfulMessage";のように
 * {}で囲ってあげないとだめ。こっちのほうがimport先で名前間違えるとチェックしてくれるので、こっちがいい。

 * export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    //color: color, // objectのプロパティ名とその値が一緒であれば、colorだけでOK
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};


*/
