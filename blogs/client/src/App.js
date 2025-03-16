import PostCreate from "./PostCreate";
import PostList from "./PostList";
import { useState } from "react";
const App = () => {
  const [state, setState] = useState(0);
  console.log(state);
  return (
    <div className="container">
      <>
        <PostCreate needTrigger={setState} />
        <hr />
        <h1>Posts</h1>
        <PostList randomNumber={state} />
      </>
    </div>
  );
};

export default App;
