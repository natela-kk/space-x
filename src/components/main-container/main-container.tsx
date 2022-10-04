import { CompanyData } from "../../types/company-data";
import CompanyList from "../company-list/company-list";
import Main from "../main/main";
import './main-container.scss';

type MainContainerProps = {
    companiesData: CompanyData[];
}

function MainContainer({companiesData}: MainContainerProps) {
    
    return (
        <main className="main-container">
            <CompanyList companiesData = {companiesData}/>
                <Main companiesData = {companiesData}/>
        </main>
    )
}
export default MainContainer;