import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./footer";


function Layout(){
    return(
        <div className="container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;