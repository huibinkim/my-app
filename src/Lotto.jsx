import React, { Component } from "react";
import Ball from "./Ball";

function getWinNums() {
  console.log("getwin");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNum = shuffle[shuffle.length - 1];
  const winNums = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNums, bonusNum];
}
class Lotto extends Component {
  state = {
    winNums: getWinNums(), //당첨 숫ㅏㅡㄹ
    winBalls: [],
    bonus: null, //보너스 공
    redo: false,
  };
  render(winBalls, bonus, redo) {
    const {} = this.state;
    return (
      <>
        <div>당첨 숫자</div>
        <div id="result">
          {winBalls.map((v) => (
            <Ball key={v} number={v} />
          ))}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus} />}
        <button onClick={redo ? onClickRedo : () => {}}>한번 더</button>
      </>
    );
  }
}

export default Lotto;
