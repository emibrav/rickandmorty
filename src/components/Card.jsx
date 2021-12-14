const Card = ({characters}) => {

  const {name, species, image} = characters

  return (
    <div className="col-md-4 mb-2 pr-2">
      <div className="card">
        <img src={image} alt={`imagen- ${name}`} />
        <div>
          <h5>{name}</h5>
          <p>{species}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
