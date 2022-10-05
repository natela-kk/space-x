import { Outlet } from "react-router-dom";
import { CompanyData } from "../../types/company-data";
import CompanyList from "../company-list/company-list";
import Header from "../header/header";

type LayoutProps = {
    companiesData: CompanyData[];
}

function Layout({ companiesData }: LayoutProps) {
    return (
        <div className="layout__app">
        <Header />
        <main className="layout__main">
            <CompanyList companiesData={companiesData} />
            <Outlet />
        </main>
    </div>
    )
}

export default Layout;