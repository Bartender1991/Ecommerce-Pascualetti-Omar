import Edit from "./Edit"

const EditItem = ({ data }) => {
  return (
    <div>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {
          data.map((prod) => <Edit key={prod.id} prod={prod} />)
        }
      </div>
    </div>
  )
}

export default EditItem
