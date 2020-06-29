import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

const {currentSushi, onGetNextSushi, onEatSushi, isSushiEaten} = props;
const renderSushi = () => {
  return currentSushi.map(selectedSushi => {
    return <Sushi sushi={selectedSushi} onEatSushi={onEatSushi} isSushiEaten={isSushiEaten}/>
  })
}

  return (
    <Fragment>
      <div className="belt">
        {renderSushi()}
        <MoreButton onGetNextSushi={onGetNextSushi}/>
      </div>
    </Fragment>
    )
}


// Band-Aid for async requests. If you want the page to render with whatever data is available 
// Can provide default welcome messages
// SushiContainer.defaultProps = {
//   currentSushi: []
// }

export default SushiContainer