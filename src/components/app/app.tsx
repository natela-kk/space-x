import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CompanyData } from "../../types/company-data";
import Layout from "../layout/layout";
import Main from "../main/main";
import NotFoundScreen from "../not-found/not-found";

type AppProps = {
    companiesData: CompanyData[];
}

function App({ companiesData }: AppProps) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout companiesData={companiesData} />}>
                    <Route index element={<Main companiesData={companiesData} />} />
                    <Route path=":id" element={<Main companiesData={companiesData} />} />
                </Route>
                <Route path="*" element={<NotFoundScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;