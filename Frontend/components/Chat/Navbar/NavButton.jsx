import React from 'react'
import "../../../public/profile.css"
import { Link } from "react-router-dom"

function NavButton(props) {
  return (
    <Link className='navButton' to={props.link}>
        {props.img}
    </Link>
  )
}

export default NavButton