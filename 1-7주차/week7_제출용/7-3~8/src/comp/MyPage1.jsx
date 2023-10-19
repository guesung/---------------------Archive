import { redirect } from "react-router";

const MyPage1 = () => {
  const logged = false;
  return (
    <div>
            {!logged && <div onClick={() => redirect("/login")} />} 
      <h1>MyPage1</h1> 
    </div>
  );
};

export default MyPage1;
