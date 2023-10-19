import React, { useState } from "react";
const App = () => {
  const [myName, setMyName] = useState("이름은 김창복");
  function changeName() {
    setMyName(
      myName === "이름은 김창복" ? "직업은 프론트개발자" : "이름은 김창복"
    );
  }
  return (
    <div>
      <h3>안녕하세요. {myName} 입니다.</h3>
      <button onClick={changeName}>Change</button>
    </div>
  );
};
export default App;
