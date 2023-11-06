import { Link } from "react-router-dom";

function Write() {
  return (
    <div>
      <h1>Write</h1>
      Title: <input type="text" placeholder="Write the title..."></input>
      <br />
      Content:{" "}
      <textarea
        rows="5"
        cols="60"
        placeholder="Write the content..."
      ></textarea>
      <Link to="/list">
        <button>Save</button>
      </Link>
    </div>
  );
}

export default Write;
