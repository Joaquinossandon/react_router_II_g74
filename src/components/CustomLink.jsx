import { NavLink } from "react-router-dom"

function CustomLink({ to, children }) {
    return (
        <NavLink to={to} className={({ isActive }) => (isActive ? "nav-link active fw-bold" : "nav-link")}>{children}</NavLink>
    )
}

export default CustomLink