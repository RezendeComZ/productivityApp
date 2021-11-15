const Notas = ({ titulo, color, notas}) => {
  return (
    <>
      {notas.map((nota) => {
        if (!nota.title) {
        {/* console.log("sem titulo") */}
        return (
        <div key={nota._id} className="nota">
        <p>{nota.body}</p>
        </div>)
        } else {
        {/* console.log("com titulo") */}
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
