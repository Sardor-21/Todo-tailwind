import React, { useEffect, useState } from "react";
import { getUsers, deleteUsers, updateUsers } from "../../Api";
import { Table } from "antd";

const TableLayout = () => {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    address: { street: "" },
    company: { name: "" },
    phone: "",
    website: "",
  });
  const [id, setId] = useState(1);

  console.log(data);

  useEffect(() => {
    async function getMyUsers() {
      const res = await getUsers();
      setUsers(res.data);
    }
    getMyUsers();
  }, []);

  const deleteMyPost = (id) => {
    deleteUsers(id);
  };

  const editUsers = (id) => {
    setId(id);
    const filterUser = users?.filter((v) => v.id == id);
    setData({
      ...data,
      username: filterUser[0].username,
      name: filterUser[0].name,
      email: filterUser[0].email,
      id: filterUser[0].id,
      phone: filterUser[0].phone,
      website: filterUser[0].website,
      company: { name: filterUser[0].company.name },
      address: { street: filterUser[0].address.street },
    });
  };

  const saveUser = () => {
    updateUsers(id, data);
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
      render: (id, record) => {
        return (
          <div className="flex">
            <button
              onClick={() => editUsers(id)}
              className="px-3 py-1 bg-yellow-500 text-white hover:shadow-md mr-2 hover:bg-yellow-900 hover:shadow-yellow-900 transition-shadow rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={() => deleteMyPost(id)}
              className="px-3 py-1 bg-red-500 text-white hover:shadow-md hover:bg-red-900 hover:shadow-red-900 transition-shadow rounded-lg"
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  const array = [
    {
      name: "Id",
      value: data.id,
      onChange: (e) => setData({ ...data, id: e.target.value }),
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
      name: "Email",
      value: data.email,
      onChange: (e) => setData({ ...data, email: e.target.value }),
    },
    {
      name: "Phone",
      value: data.phone,
      onChange: (e) => setData({ ...data, phone: e.target.value }),
    },
    {
      name: "Website",
      value: data.website,
      onChange: (e) => setData({ ...data, website: e.target.value }),
    },
    {
      name: "Company",
      value: data.company.name,
      onChange: (e) => setData({ ...data, company: { name: e.target.value } }),
    },
    {
      name: "Address",
      value: data.address.street,
      onChange: (e) =>
        setData({ ...data, address: { street: e.target.value } }),
    },
  ];
  return (
    <div className="container p-10 mx-auto  ">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            {/* 1 */}
            {array.map((value, index) => {
              return (
                <div key={index} className="col-md-6 my-3">
                  <label className="mb-2 mx-0.5 font-bold">{value.name}</label>
                  <input
                    value={value.value}
                    onChange={value.onChange}
                    type="text"
                    className="outline-none border-2 rounded-md px-3 py-1 focus:shadow-xl focus:shadow-green-100 w-full"
                    placeholder={value.name}
                  />
                </div>
              );
            })}

            <div className="col-12 flex justify-center items-center">
              <button
                onClick={saveUser}
                className="outline-none border-2 rounded-lg px-3 py-1 focus:shadow-xl 
              my-4 bg-lime-300 active:text-lime-100  active:bg-lime-500   focus:shadow-green-100 "
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <Table
            className="table-hover table-center mb-0"
            // pagination={{
            //   total: data.length,
            //   showTotal: (total, range) =>
            //     `Showing ${range[0]} to ${range[1]} of ${total} entries`,
            //   showSizeChanger: true,
            //   // onShowSizeChange: onShowSizeChange,
            //   itemRender: itemRender,
            // }}
            style={{ overflowX: "auto" }}
            columns={columns}
            // bordered
            dataSource={users}
            rowKey={(record) => record.id}
            // onChange={handleTableChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TableLayout;
