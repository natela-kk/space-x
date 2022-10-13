export const getSavedCompanies = () => {
    const companyList = localStorage.getItem('companyList');
    
    if (companyList) {
        const parsedCompanyList = JSON.parse(companyList);
        if (parsedCompanyList.length) {
            return parsedCompanyList;
        }
    }
    return;
}