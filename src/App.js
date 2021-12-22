import './App.css'
import TableLayout from './Components/Table/Table'
   {/* {loading && (
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
      )} */}

function App() {
  return <TableLayout />
}

export default App
