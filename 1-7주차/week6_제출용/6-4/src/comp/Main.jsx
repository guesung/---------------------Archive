import contents from "./contents";
import { useState } from "react";
import "../App.css";

function Main() {
  const [index, setIndex] = useState(0);

  const contentChange = (event) => {
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
