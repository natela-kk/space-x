import { CompanyData } from "../../types/company-data";
import Header from "../header/header";
import MainContainer from "../main-container/main-container";

type AppProps = {
    companiesData: CompanyData[];
}

function App({companiesData}: AppProps) {
    return (
        <div className="app">
            <Header />
                <MainContainer companiesData = {companiesData}/>
        </div>
    )
}

export default App;