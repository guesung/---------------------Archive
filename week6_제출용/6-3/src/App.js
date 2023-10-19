import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state, // 상태값 읽음
    [action.name]: action.value, // 상태값 적용
  };
}


const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    student: "student",    // name : value 
    school: "school",
  });
  const { student, school } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

   return (
    <div>
      <div>
        <input name="student" value={student} onChange={onChange} />
       <br/>
        <input name="school" value={school} onChange={onChange} />
      </div>
      <div>
        {student}님은 {school}에 재학중입니다.
      </div>
    </div>
  );
};

export default App;
