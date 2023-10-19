import { useState } from "react";

function Greeting(props) {
    const isLogged = props.isLogged;
  
    if (isLogged) {
      return <h2> 다시 오셨군요 !! </h2>;
    }
    return <h2>회원 가입을 해 주세요 !!</h2>;
  }
  
  function LoginButton(props) {
    return <button onClick={props.onClick}>로그인  
      </button>;
  }
  
  function LogoutButton(props) {
    return <button onClick={props.onClick}>로그아웃
      </button>;
  }
  
  export default App;
  

function App(props) {
  const [isLogged, setIsLogged] = useState(false);
  const handleLoginClick = () => {
    setIsLogged(true);
  };
  const handleLogoutClick = () => {
    setIsLogged(false);
  };

  let button; // Component 변수
  if (isLogged) {    // true
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {             // false
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div>
  <Greeting isLogged={isLogged} />
      {button}
    </div>
  );
}
