const Notas = ({ titulo, color, notas}) => {
  return (
    <>
      {notas.map((nota) => {
        if (!nota.title) {
        return (
        <div key={nota._id} className="nota">
        <p>{nota.body}</p>
        </div>)
        } else {
        return (
        <div key={nota._id} className="nota">
        <h6>{nota.title}</h6>
        <p>{nota.body}</p>
        </div>)
        }
      })}
    </>
  )
}

export default Notas
