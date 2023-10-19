import contents from "./contents";
import { useState } from "react";
import "../App.css";

function Main() {
  const [index, setIndex] = useState(0);

  const contentChange = (event) => {
    alert("박규성님 반갑습니다.");
    setIndex(event.target.value);
  };

  return (
    <div>
      {contents.map((content, index) => (
        <button onClick={contentChange} value={index}>
          {content.tab}
        </button>
      ))}
      <br />
      <br />
      {contents[index].content}
    </div>
  );
}

export default Main;
