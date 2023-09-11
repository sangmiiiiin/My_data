import { NavLink, Link } from 'react-router-dom'

function Header(){
    return(
        <>
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto"><Link to="index.html">Sailor</Link></h1>
                <NavLink to="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></NavLink>

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><NavLink to="index.html" className="active">Home</NavLink></li>

                    <li className="dropdown"><NavLink to="#"><span>About</span> <i className="bi bi-chevron-down"></i></NavLink>
                        <ul>
                        <li><NavLink to="about.html">About</NavLink></li>
                        <li><NavLink to="team.html">Team</NavLink></li>
                        <li><NavLink to="testimonials.html">Testimonials</NavLink></li>

                        <li className="dropdown"><NavLink to="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></NavLink>
                            <ul>
                            <li><NavLink to="#">Deep Drop Down 1</NavLink></li>
                            <li><NavLink to="#">Deep Drop Down 2</NavLink></li>
                            <li><NavLink to="#">Deep Drop Down 3</NavLink></li>
                            <li><NavLink to="#">Deep Drop Down 4</NavLink></li>
                            <li><NavLink to="#">Deep Drop Down 5</NavLink></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li><NavLink to="services.html">Services</NavLink></li>
                    <li><NavLink to="portfolio.html">Portfolio</NavLink></li>
                    <li><NavLink to="pricing.html">Pricing</NavLink></li>
                    <li><NavLink to="blog.html">Blog</NavLink></li>

                    <li><NavLink to="contact.html">Contact</NavLink></li>
                    <li><NavLink to="index.html" className="getstarted">Get Started</NavLink></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
        </>
    );   
};

export default Header;