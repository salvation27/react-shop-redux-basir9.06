import React from 'react'

const Raiting = (props) => {
  const {rating,numReviews} = props
  return (
    <div className="card_rait flex">
    <div>
    <i class={rating>=1? "fas fa-star": rating>=.5? "fas fa-star-half":"fas fa"  }></i>
      <i class={rating>=2? "fas fa-star": rating>=1.5? "fas fa-star-half":"fas fa"  }></i>
      <i class={rating>=3? "fas fa-star": rating>=2.5? "fas fa-star-half":"fas fa"  }></i>
      <i class={rating>=4? "fas fa-star": rating>=3.5? "fas fa-star-half":"fas fa"  }></i>
      <i class={rating>=5? "fas fa-star": rating>=4.5? "fas fa-star-half":"fas fa"  }></i>
    </div>
  <div>{numReviews +'reviews'}</div>
    </div>
  )
}

export default Raiting
