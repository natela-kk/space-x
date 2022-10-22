import { createReducer } from "@reduxjs/toolkit";
import { CompanyData } from "../types/company-data";
import { changeCompanyAction, filterCompaniesAction, loadCompaniesAction, updateCompanyAction } from "./action";

type InitialState = {
    companies: CompanyData[],
    currentCompany: CompanyData | null,
    filteredCompanies: CompanyData[] | null,
}

const initialState: InitialState = {
    companies: [],
    currentCompany: null,
    filteredCompanies: null,
}

export const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(loadCompaniesAction, (state, action) => {
            state.companies = action.payload;
        })
        .addCase(changeCompanyAction, (state, action) => {
            state.currentCompany = action.payload;
        })
        .addCase(updateCompanyAction, (state, action) => {
            const companyIndex = state.companies.findIndex((company) => company.id === state.currentCompany?.id);
                state.companies = [
                    ...state.companies.slice(0, companyIndex),
                    action.payload,
                    ...state.companies.slice(companyIndex + 1)
                ];
            state.currentCompany = action.payload;
        })
        .addCase(filterCompaniesAction, (state, action) => {
            state.filteredCompanies = action.payload;
        })
});