import React from "react";

const MyInput = ({ label, type, name }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} name={name} className="form-control" />
    </div>
  );
};

export default MyInput;
