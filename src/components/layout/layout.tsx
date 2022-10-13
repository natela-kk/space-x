import { Outlet } from "react-router-dom";
import CompanyList from "../company-list/company-list";
import Header from "../header/header";

function Layout() {
    return (
        <div className="layout__app">
            <Header />
            <main className="layout__main">
                <CompanyList />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;