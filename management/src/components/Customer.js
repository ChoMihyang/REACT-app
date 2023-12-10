import React from "react";
import PropTypes from "prop-types";

function Customer({ name, birthday, gender, job }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  );
}
Customer.prototype = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};
export default Customer;
