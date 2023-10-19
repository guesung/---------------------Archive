import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./comp/Home";
import Recommend from "./comp/Recommend";
import Search from "./comp/Search";
import MyPage from "./comp/MyPage";
import Posts from "./comp/Posts";
import Header from "./comp/Header";
import Login from "./comp/Login";
import MyPage1 from "./comp/MyPage1";
import "./comp/Header.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/mypage/:name" Component={MyPage} />
          <Route path="/recommend" Component={Recommend} />
          <Route path="/search" Component={Search} />
          <Route path="/login" Component={Login} />
          <Route path="/posts/:study" Component={Posts} />
          <Route path="/mypage1" Component={MyPage1} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
