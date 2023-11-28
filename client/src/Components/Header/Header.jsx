import { Link } from "react-router-dom"

import './header.scss'

const Header = () => {
    return (
        <header className="header">
            <div className="header_logo">
                <p className="header_logo_inf">logo</p>
            </div>
            <nav>
                <Link to="/">Main page</Link>
                <Link to="/products">Products</Link>
            </nav>
        </header>
    )
}

export default Header