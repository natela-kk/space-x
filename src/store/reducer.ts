import { createReducer } from "@reduxjs/toolkit";
import { CompanyData } from "../types/company-data";
import { changeCompanyAction, filterCompaniesAction, loadCompaniesAction } from "./action";

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
    .addCase(filterCompaniesAction, (state, action) => {
        state.filteredCompanies = action.payload;
    })
});