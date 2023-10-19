import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Link to="/home">홈</Link>
      <Link to="/about">소개</Link> <hr />

      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/about" Component={About} />
      </Routes>
    </BrowserRouter>
  );
};
function Home() {
  return (  <div> <h2>홈페이지입니다.</h2> </div>  );
}
function About() {
  return ( <div> <h2>About페이지 입니다.</h2> </div>  );
}
export default App;
