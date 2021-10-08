import React from 'react'

import '../css/work.css'

const Workprops = (props) => {
  return (
    <div>
      
      <img src={props.image} alt="images" className="work_img"/>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Workprops
