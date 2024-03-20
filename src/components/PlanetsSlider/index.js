import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const setting = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="planet-container" data-testid="planets">
      <h1 className="heading">PLANTES</h1>
      <Slider {...setting}>
        {planetsList.map(listItem => (
          <PlanetItem listItem={listItem} key={listItem.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
