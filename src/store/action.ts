import { createAction } from "@reduxjs/toolkit"

export const Action = {
    LOAD_COMPANIES: 'LOAD_COMPANIES',
    CHANGE_COMPANY: 'CHANGE_COMPANY',
    FILTER_COMPANIES: 'FILTER_COMPANIES',
}

export const loadCompaniesAction = createAction(Action.LOAD_COMPANIES, (companies) => ({
    payload: companies
}))

export const changeCompanyAction = createAction(Action.CHANGE_COMPANY, (company) => ({
    payload: company
}));

export const filterCompaniesAction = createAction(Action.FILTER_COMPANIES, (companies) => ({
    payload: companies
}));


