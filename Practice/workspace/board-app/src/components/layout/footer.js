import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <footer id="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row">

                    <div class="col-lg-3 col-md-6">
                        <div class="footer-info">
                        <h3>Sailor</h3>
                        <p>
                            A108 Adam Street <br />
                            NY 535022, USA<br /><br />
                            <strong>Phone:</strong> +1 5589 55488 55<br />
                            <strong>Email:</strong> info@example.com<br />
                        </p>
                        <div class="social-links mt-3">
                            <Link to="#" class="twitter"><i class="bx bxl-twitter"></i></Link>
                            <Link to="#" class="facebook"><i class="bx bxl-facebook"></i></Link>
                            <Link to="#" class="instagram"><i class="bx bxl-instagram"></i></Link>
                            <Link to="#" class="google-plus"><i class="bx bxl-skype"></i></Link>
                            <Link to="#" class="linkedin"><i class="bx bxl-linkedin"></i></Link>
                        </div>
                        </div>
                    </div>

                    <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                        <li><i class="bx bx-chevron-right"></i> <Link to="#">Home</Link></li>
                        <li><i class="bx bx-chevron-right"></i> <Link to="#">About us</Link></li>
                        <li><i class="bx bx-chevron-right"></i> <Link to="#">Services</Link></li>
                        <li><i class="bx bx-chevron-right"></i> <Link to="#">Terms of service</Link></li>
                        <li><i class="bx bx-chevron-right"></i> <Link to="#">Privacy policy</Link></li>
                        </ul>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                        <li><i class="bx bx-chevron-right"></i> <Link to="#">Web Design</Link></li>
                        <li><i class="bx bx-chevron-right"></i> <Link to="#">Web Development</Link></li>
                        <li><i class="bx bx-chevron-right"></i> <Link to="#">Product Management</Link></li>
                        <li><i class="bx bx-chevron-right"></i> <Link to="#">Marketing</Link></li>
                        <li><i class="bx bx-chevron-right"></i> <Link to="#">Graphic Design</Link></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                        <form action="" method="post">
                        <input type="email" name="email" /><input type="submit" value="Subscribe" />
                        </form>

                    </div>

                    </div>
                </div>
            </div>

            <div class="container">
            <div class="copyright">
                &copy; Copyright <strong><span>Sailor</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
                Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
            </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;