function State() {
  return (
    <main>
      <h2>State (상태)</h2>
      <ul>
        <li>State는 컴포넌트 내에서 관리되는 독립적인 데이터 저장소입니다.</li>
        <li>
          이는 사용자 인터랙션, 시간 경과 등으로 인해 변경될 수 있는 데이터를
          저장하는데 사용됩니다.
        </li>
        <li>
          State의 변경은 비동기적으로 발생하며, 변경을 트리거하면 React가
          컴포넌트를 재렌더링합니다.
        </li>
        <li>
          State는 주로 클래스 컴포넌트에서 사용되었으나, React Hooks의 도입으로
          함수 컴포넌트에서도 상태 관리가 가능해졌습니다.
        </li>
      </ul>
    </main>
  );
}

export default State;
