import { useState } from "react";
import axios from "axios";
const PostCreate = ({ needTrigger }) => {
  //This is classic React state management.
  // We use the useState hook to create a piece of state called title.
  // The initial value of title is an empty string.
  // We also create a function called setTitle that we can use to update the title state.
  const [title, setTitle] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(title);
    await axios.post("http://localhost:4000/posts", { title });
    setTitle("");
    needTrigger(Math.random());
  };

  return (
    <div className="container">
      <h1>Create Post</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
