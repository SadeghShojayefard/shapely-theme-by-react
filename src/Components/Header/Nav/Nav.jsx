import './Nav.css';

function Nav() {
    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Shop</a></li>
                <li>
                    <a href="#">
                        <img src="./Header/Magnifier.png" className="search-style" alt="Search" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
