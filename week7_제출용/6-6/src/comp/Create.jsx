function Create(props) {
  // const { onCreate } = props;
  return (
    <article>
            <h2>Create</h2>     {" "}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value; // title, body  값을 받아서
          props.onCreate(title, body); // 6. 이벤트를 실행한다,
        }}
      >
               {" "}
        <p>
          {" "}
          <input type="text" name="title" placeholder="title" />{" "}
        </p>
               {" "}
        <p>
          {" "}
          <textarea name="body" placeholder="body"></textarea>{" "}
        </p>
               {" "}
        <p>
          {" "}
          <input type="submit" value="Create"></input>{" "}
        </p>
             {" "}
      </form>
         {" "}
    </article>
  );
}
export default Create;
