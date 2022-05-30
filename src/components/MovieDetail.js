import PropTypes from "prop-types"
import React from 'react'

export default function MovieDetail({coverImg, title, description}) {
  return (
    <div>
      <img src={coverImg} alt="movieImage" />
      <h2>{ title }</h2>
      <p>{ description }</p>
    </div>
  )
}

MovieDetail.prototype = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}