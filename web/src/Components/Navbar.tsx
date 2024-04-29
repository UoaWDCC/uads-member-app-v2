import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
      <div>
        <NavLink to="/about">
        About
        </NavLink>
        <NavLink to="/events">
        Events
        </NavLink>
        <NavLink to="/sponsors">
        Sponsors
        </NavLink>
        <NavLink to="/signup">
        Signup
        </NavLink>
        

      </div>
  )
}