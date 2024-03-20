import './index.css'

const PlanetItem = props => {
  const {listItem} = props
  const {name, imageUrl, description} = listItem

  return (
    <div className="list-item-container">
      <img src={imageUrl} alt={name} className="planet-img" />
      <h1 className="planet-heading">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}
export default PlanetItem
