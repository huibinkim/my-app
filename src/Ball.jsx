import React, { memo } from "react";

const Ball = memo(({ number }) => {
  let background;
  if (number <= 10) {
    background = red;
  } else {
    background = blue;
  }

  return (
    <div className="ball" style={{ background }}>
      {number}
    </div>
  );
}); //함수 컴포넌트 >> state를 사용하지 않는 컴포넌트
// class Ball extends PureComponent {
//   render() {

//   }
// }

export default Ball;
