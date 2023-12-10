import React from "react";
import PropTypes from "prop-types";

// 한 명의 고객에 대한 정보를 출력
// 一人の顧客についての情報を出力
function Customer({ id, image, name, birthday, gender, job }) {
  return (
    <div>
      <CustomerProfile id={id} image={image} name={name} />
      <CustomerInfo birthday={birthday} gender={gender} job={job} />
    </div>
  );
}

// CustomerProfile: id, image, name
function CustomerProfile({ id, image, name }) {
  return (
    <div>
      <img src={image} alt="profile" />
      <h2>
        {name}({id})
      </h2>
    </div>
  );
}

// CustomerInfo: birthday, gender, job
function CustomerInfo({ birthday, gender, job }) {
  return (
    <div>
      <p>{birthday}</p>
      <p>{gender}</p>
      <p>{job}</p>
    </div>
  );
}

Customer.prototype = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  birthday: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
};
export default Customer;
