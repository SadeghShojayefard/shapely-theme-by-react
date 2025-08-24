import { useState, useEffect } from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

function Header() {
    const [open, setOpen] = useState(false);

    // قفل اسکرول وقتی منو بازه
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <>
            <button
                className={`menu-fab ${open ? 'menu-fab-disply-hidden' : 'menu-fab-disply-block'}`}
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
            >
                ☰
            </button>

            <header className={`header ${open ? 'open' : ''}`}>
                <a href="#" className="header-logo">Shapely</a>


                <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu">×</button>

                <Nav />
            </header>


            {open && <div className="backdrop" onClick={() => setOpen(false)} />}
        </>
    );
}

export default Header;
