import React from 'react'
import {Link} from "react-router-dom"

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <Link to={item.url} target="_blank">
          <img src={item.image} alt="" className='work__img' />
        </Link>
        <h3 className="work__title">{item.title}</h3>
    </div>
  )
}

export default WorkItems
