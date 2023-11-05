import { Link } from "react-router-dom";

function List() {
  return (
    <div>
      <h1>List</h1>
      <button>
        <Link to="/write">Write</Link>
      </button>
    </div>
  );
}

export default List;
