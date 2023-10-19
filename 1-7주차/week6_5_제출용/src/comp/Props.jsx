function Props() {
  return (
    <main>
      <h2>Props (속성)</h2>
      <ul>
        <li>
          Props는 properties의 줄임말로, 컴포넌트에 전달되는 데이터입니다.
        </li>
        <li>
          이들은 부모 컴포넌트로부터 자식 컴포넌트로 전달되며, 컴포넌트가 함수
          컴포넌트인지 클래스 컴포넌트인지에 관계없이 사용할 수 있습니다.
        </li>
        <li>
          Props는 읽기 전용이며, 컴포넌트 내에서 변경할 수 없습니다. 즉, 순수
          함수처럼 작동해야 합니다.
        </li>
        <li>
          Props를 사용하면 컴포넌트를 다양한 상황에 재사용하고, 동일한
          컴포넌트에 다양한 데이터를 표시할 수 있습니다.
        </li>
      </ul>
    </main>
  );
}

export default Props;
