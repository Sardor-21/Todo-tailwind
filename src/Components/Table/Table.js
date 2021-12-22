import React, { useEffect, useState } from 'react'
import { getUsers, deleteUsers, editUsers } from '../../Api'
import { Table } from 'antd'
const TableLayout = () => {
  const [users, setUsers] = useState([])

  const columns = [
    {
      title: '#ID',
      dataIndex: 'id',
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.id.length - b.id.length,
    },
    {
      title: 'Ism',
      dataIndex: 'username',
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.username.length - b.username.length,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: 'Telefon raqam',
      dataIndex: 'phone',
      render: (text, record) => <div>{text}</div>,
      sorter: (a, b) => a.phone.length - b.phone.length,
    },
    {
      title: 'Harakat',
      render: (text, record) => {
        return (
          <div className="flex">
            <button className="px-3 py-1 bg-yellow-500 text-white hover:shadow-md mr-2 hover:bg-yellow-900 hover:shadow-yellow-900 transition-shadow rounded-lg">
              Edit
            </button>
            <button className="px-3 py-1 bg-red-500 text-white hover:shadow-md hover:bg-red-900 hover:shadow-red-900 transition-shadow rounded-lg">
              Delete
            </button>
          </div>
        )
      },
    },
  ]
  return (
    <div className="container p-10 mx-auto  ">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 ">
              <label className="mb-2 mx-0.5 font-bold"> Name </label>
              <input
                type="text"
                className="outline-none border-2 rounded-md px-3 py-1 focus:shadow-xl focus:shadow-green-100 w-full"
                placeholder="Name"
              />
            </div>
            <div className="col-md-6 ">
              <label className="mb-2 mx-0.5 font-bold"> Email </label>
              <input
                type="email"
                className="outline-none border-2 rounded-md px-3 py-1 focus:shadow-xl focus:shadow-green-100 w-full"
                placeholder="Email"
              />
            </div>
            <div className="col-12 flex justify-center items-center">
              <button
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
            style={{ overflowX: 'auto' }}
            columns={columns}
            // bordered
            dataSource={users}
            rowKey={(record) => record.id}
            // onChange={handleTableChange}
          />
        </div>
      </div>
    </div>
  )
}

export default TableLayout
{
  /* {loading && (
        <h1 className="py-5 text-center text-purple-700 font-medium">
          Loading...
        </h1>
      )}
      {error && <h1>Error: {error}</h1>}
      {users?.length > 0 ? (
        <table className="table  w-full border text-center">
          <thead style={{ background: '#ccc' }}>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((v, i) => (
              <tr key={v.id}>
                <td className="pt-3">{v.id}</td>
                <td className="pt-3">{v.username}</td>
                <td className="pt-3">{v.email}</td>
                <td className="pt-3">{v.phone.slice(0, 10)}</td>
                <td className="pt-3">{v.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1 className="text-red-700 text-center pt-5">No Data !!!</h1>
      )} */
}
