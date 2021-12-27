import axios from "axios";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/users", {
        params: {
          per_page: 12,
        },
      });
      setData(res.data.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="row justify-center w-full">
      <div className="col-md-10">
        <table className="table table-hover align-middle mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map(({ id, avatar, email, first_name, last_name }) => (
                <tr key={id}>
                  <td>{id}</td>
                  <td>
                    <img
                      src={avatar}
                      className="w-10 h-10 rounded-full object-cover"
                      alt="rasm"
                    />
                  </td>
                  <td>
                    {first_name} {last_name}
                  </td>
                  <td>{email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
