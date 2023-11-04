import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const style = {
        display: "flex",
        alignItems: "center",
        listStyleType: "none",
        gap: "10px",
    }
  return (
    <div>
        <ul style={style}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/aboutme">About Me</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header