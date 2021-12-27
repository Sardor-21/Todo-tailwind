import axios from "axios";
import React, { useState } from "react";
import MyInput from "../../UI/Input/MyInput";

const Register = () => {
  const [state, setState] = useState({});
  const onchange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("https://reqres.in/api/users", state);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(state);
  return (
    <form onChange={onchange} onSubmit={onsubmit}>
      <div className="row w-full justify-center">
        <div className="col-md-7 col-lg-4 bg-cyan-50 p-10 rounded-3xl">
          <div className="row">
            <div className="col-md-6">
              <MyInput label={"Ism"} type={"text"} name={"first_name"} />
            </div>
            <div className="col-md-6">
              <MyInput label={"Familiya"} type={"text"} name={"last_name"} />
            </div>
            <div className="col-md-12">
              <MyInput label={"Email"} type={"email"} name={"email"} />
            </div>
            <div className="col-md-6">
              <MyInput label={"Password"} type={"password"} name={"password"} />
            </div>
            <div className="col-md-6">
              <MyInput
                label={"Confirm password"}
                type={"password"}
                name={"password_confirm"}
              />
            </div>
            <div className="col-12 flex justify-center mt-3">
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
