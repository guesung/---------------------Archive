import { Link } from "react-router-dom";
const Posts = () => {
  return (
    <div>
            <h1>Post Page</h1>      <Link to="/posts/JSX"> JSX </Link> <br />   
        <Link to="/posts/Props"> Props </Link> <br />     {" "}
      <Link to="/posts/State"> State </Link> <br /> <hr />
      {/*       <Route path="/posts/JSX" component={JSX} />
            <Route path="/posts/Props" component={Props} />
            <Route path="/posts/State" component={State} />   {" "} */}
    </div>
  );
};
export default Posts;
