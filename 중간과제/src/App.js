import { useState } from "react";
function App(props) {
  const [isLogged, setIsLogged] = useState(false);

  const login = () => {
    setIsLogged(!isLogged);
  };

  return (
    <div>
      <Greeting isLogged={isLogged} />
      {isLogged ? <LogoutButton kkk={login} /> : <LoginButton kkk={login} />}
    </div>
  );
}

function Greeting({ isLogged }) {
  if (isLogged) {
    return <h2> 김창복님 다시 오셨군요 !! </h2>;
  }
  return <h2>회원 가입을 해 주세요 !!</h2>;
}

function LoginButton({ kkk }) {
  return <button onClick={kkk}>로그인</button>;
}

function LogoutButton({ kkk }) {
  return <button onClick={kkk}>로그아웃</button>;
}

export default App;
