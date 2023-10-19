import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FirstPage from "./comp/FirstPage";
import SecondPage from "./comp/SecondPage";
import ThirdPage from "./comp/ThirdPage";
import NotFound from "./comp/NotFound";
function App() {
  return (
    <Router>
      <h2>라우팅(Routing)</h2>
      <Link to="/first">firssst</Link>  <br />
      <Link to="/second">second</Link>  <br />
      <Link to="/third">third</Link>   <br />
      <h2>여기에 라우팅(Routing)됩니다.</h2> <hr />

      <Routes>
        <Route path="/first" Component={FirstPage} />
        <Route path="/second" Component={SecondPage} />
        <Route path="/third" Component={ThirdPage} />
        <Route path="*" Component={NotFound}></Route>
      </Routes>
    </Router>
  );
}
export default App;
