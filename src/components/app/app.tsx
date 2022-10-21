import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import { CompanyData } from "../../types/company-data";
import Layout from "../layout/layout";
import Main from "../main/main";
import NotFoundScreen from "../not-found/not-found";

type AppProps = {
    companiesData: CompanyData[];
}

function App({ companiesData }: AppProps) {
    return (
        <HashRouter>
            <Routes>
                <Route path={AppRoute.Main} element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path={AppRoute.Shipments} >
                        <Route index element={<Navigate to={AppRoute.Main} />} />
                        <Route path={AppRoute.CompanyId} element={<Main />} />
                    </Route>
                </Route>
                <Route path={AppRoute.Error} element={<NotFoundScreen />} />
            </Routes>
        </HashRouter>
    )
}

export default App;