import React from 'react'
import "./Error.css"

const Error = ({errorMessage}) => {
  return (
    <span className="error">
        {errorMessage}
    </span>
  )
}

export default Error