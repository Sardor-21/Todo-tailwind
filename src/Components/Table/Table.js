import React, { useEffect, useState } from "react";
import { getUsers, deleteUsers, updateUsers, addUsers } from "../../Api";
import { Table } from "antd";

const TableLayout = () => {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(0);
  const [drop, setDrop] = useState(-1);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({
    id: "",
    name: "",
    username: "",
    phone: "",
    email: "",
    website: "",
    address: { street: "" },
    company: { name: "" },
  });

  const clearData = () => {
    setData({
      id: "",
      name: "",
      username: "",
      phone: "",
      email: "",
      website: "",
      address: { street: "" },
      company: { name: "" },
    });
  };

  const addPosts = () => {
    addUsers(data);

    setUsers([...users, data]);
    clearData();
  };

  useEffect(() => {
    async function getMyUser() {
      const res = await getUsers();
      setUsers(res.data);
    }
    getMyUser();
  }, []);

  const deleteMyUsers = (id) => {
    setUsers(users.filter((v) => v.id !== id));
    deleteUsers(id);
    setDrop(-1);
  };

  const editUsers = (id) => {
    setId(id);
    const filter = users.filter((v) => v.id === id);
    setData({
      ...data,
      id: filter[0].id,
      name: filter[0].name,
      username: filter[0].username,
      phone: filter[0].phone,
      email: filter[0].email,
      website: filter[0].website,
      address: { street: filter[0].address.street },
      company: { name: filter[0].company.name },
    });
    setDrop(-1);
  };

  const saveUsers = () => {
    updateUsers(id, data);

    const clone = [...users];

    clone[id - 1].id = data.id;
    clone[id - 1].name = data.name;
    clone[id - 1].username = data.username;
    clone[id - 1].email = data.email;
    clone[id - 1].phone = data.phone;
    clone[id - 1].website = data.website;
    clone[id - 1].address.street = data.address.street;
    clone[id - 1].company.name = data.company.name;
    setUsers(clone);

    clearData();
  };

  const openDrop = (index) => {
    if (drop > -1) {
      setDrop(-1);
    } else {
      setDrop(index);
    }
  };

  const up = (index) => {
    let clone = [...users];
    if (index > 0) {
      [clone[index - 1], clone[index]] = [clone[index], clone[index - 1]];
      setUsers(clone);
    } else {
      clone = [...clone.slice(1, clone.length), clone[index]];
      setUsers(clone);
    }
    setDrop(-1);
  };

  const down = (index) => {
    let clone = [...users];
    if (index < users.length - 1) {
      [clone[index + 1], clone[index]] = [clone[index], clone[index + 1]];
      setUsers(clone);
    } else {
      clone = [clone[clone.length - 1], ...clone.slice(0, clone.length - 1)];
      setUsers(clone);
    }
    setDrop(-1);
  };

  const columns = [
    {
      title: "#ID",
      dataIndex: "id",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: "Ism",
      dataIndex: "username",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.username.length - b.username.length,
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Telefon raqam",
      dataIndex: "phone",
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.phone.length - b.phone.length,
    },
    {
      title: "Harakat",
      dataIndex: "id",
      render: (id, record, index) => {
        return (
          <div
            style={{ width: "15px !important" }}
            className="btn-group dropstart"
          >
            <button
              onClick={() => openDrop(index)}
              type="button"
              className="btn btn-secondary dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Action
            </button>
            <ul
              style={{
                left: "-170px",
                border: "1px solid #ccc",
                boxShadow: "0 0 10px rgba(0,0,0,0.3)",
              }}
              className={`dropdown-menu w-25 ${
                drop === index ? "d-block" : "d-none"
              }`}
            >
              <li className="dropdown-item" onClick={() => editUsers(id)}>
                <i className="fas fa-edit text-warning"></i>
              </li>
              <li className="dropdown-item" onClick={() => deleteMyUsers(id)}>
                <i className="fa fa-times text-danger" aria-hidden="true"></i>
              </li>
              <li className="dropdown-item" onClick={() => up(index)}>
                <i
                  className="fa fa-chevron-up text-success"
                  aria-hidden="true"
                ></i>
              </li>
              <li className="dropdown-item" onClick={() => down(index)}>
                <i
                  className="fa fa-chevron-down text-success"
                  aria-hidden="true"
                ></i>
              </li>
            </ul>
          </div>
        );
      },
    },
  ];

  const myData = [
    {
      name: "Id",
      value: data.id,
      onChange: (e) => setData({ ...data, id: e.target.value }),
      type: "number",
    },
    {
      name: "Email",
      value: data.email,
      onChange: (e) => setData({ ...data, email: e.target.value }),
    },
    {
      name: "Name",
      value: data.name,
      onChange: (e) => setData({ ...data, name: e.target.value }),
    },
    {
      name: "Username",
      value: data.username,
      onChange: (e) => setData({ ...data, username: e.target.value }),
    },
    {
      name: "Website",
      value: data.website,
      onChange: (e) => setData({ ...data, website: e.target.value }),
    },
    {
      name: "Phone",
      value: data.phone,
      onChange: (e) => setData({ ...data, phone: e.target.value }),
    },
    {
      name: "Address",
      value: data?.address?.street,
      onChange: (e) =>
        setData({ ...data, address: { street: e.target.value } }),
    },
    {
      name: "Company",
      value: data?.company?.name,
      onChange: (e) => setData({ ...data, company: { name: e.target.value } }),
    },
  ];

  return (
    <div className="container p-10 mx-auto">
      <h3 className="fw-bold text-center">Animation Todo Width Axios</h3>
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            {myData?.map((value) => {
              return (
                <div key={value?.name} className="col-md-6 my-2">
                  <label className="mb-2 mx-0.5 font-bold">{value.name}</label>
                  <input
                    value={value.value}
                    onChange={value.onChange}
                    placeholder={value.name}
                    type={value.type ? value.type : "text"}
                    className="outline-none border-2 rounded-md px-3 py-1 focus:shadow-xl focus:shadow-green-100 w-full"
                  />
                </div>
              );
            })}

            <div className="col-12 flex justify-center items-center">
              {id > 0 ? (
                <button
                  onClick={saveUsers}
                  className="outline-none border-2 rounded-lg px-3 py-1 focus:shadow-xl 
                 my-4 bg-lime-300 active:text-lime-100  active:bg-lime-500   focus:shadow-green-100 "
                >
                  save
                </button>
              ) : (
                <button
                  onClick={addPosts}
                  className="outline-none border-2 rounded-lg px-3 py-1 focus:shadow-xl 
                 my-4 bg-lime-300 active:text-lime-100  active:bg-lime-500   focus:shadow-green-100 "
                >
                  Add
                </button>
              )}
            </div>

            <div className="my-3">
              <h5 className="fw-bold text-center">Filter And Search</h5>
              <div className="d-flex align-items-center">
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="...Search"
                  className="form-control"
                  type="text"
                />
                <select className="form-select w-50 ms-3">
                  <option value="">Alphabet</option>
                  <option value="">Language</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <Table
            className="table-hover table-center mb-0"
            style={{ overflowX: "auto" }}
            columns={columns}
            dataSource={users}
            rowKey={(record) => record.id}
          />
        </div>
      </div>
    </div>
  );
};

export default TableLayout;

// <div>
//     <button onClick={() => deleteMyUsers(id)} className="btn btn-danger">
//       <i className="fa fa-times" aria-hidden="true"></i>
//     </button>
//     <button className="btn btn-warning"></button>
// </div>
