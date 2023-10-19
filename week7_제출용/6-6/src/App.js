import { useState } from "react";

import Header from "./comp/Header";
import Nav from "./comp/Nav";
import Article from "./comp/Article";
import datas from "./comp/datas";
import Create from "./comp/Create";

function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState(datas);
  let content = null;
  if (mode === "WELCOME") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === "READ") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === Number(id)) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
  } else if (mode === "CREATE") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          const newTopics = [...topics]; // 기존 topics
          newTopics.push(newTopic); // 기존 추가 topics
          setTopics(newTopics);
          setMode("READ"); // READ모드
          setNextId(nextId + 1); // Id 증가
        }}
      ></Create>
    );
  }
  return (
        <div>
          <Header  title="WEB" onChangeMode={() => {
              setMode("WELCOME");
            }}  >
          </Header>
    
          <Nav   topics={topics}
            onChangeMode={(_id) => {
              setMode("READ");
              setId(_id);
            }} >
         </Nav>
    
          {content}
     
         <a href="/create" onClick={(event) => {
              event.preventDefault();
              setMode("CREATE");
            }}  >
            Create
          </a>
        </div>
      );
    }
    

    export default App;