import { Link } from "react-router-dom";

function List() {
  return (
    <div>
      <h1>List</h1>
      <Link to="/write">
        <button>Write</button>
      </Link>
    </div>
  );
}

export default List;
