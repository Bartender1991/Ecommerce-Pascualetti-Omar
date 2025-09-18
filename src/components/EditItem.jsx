import Edit from "./Edit"

console.log("Container -> typeof setRefresh:", typeof setRefresh); // debe ser "function"
const EditItem = ({ data, setRefresh }) => {

  return (
    <div>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {
          data.map((prod) => <Edit key={prod.id} prod={prod} setRefresh={setRefresh} />)
        }
      </div>
    </div>
  )
}

export default EditItem
