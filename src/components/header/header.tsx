import { useAppDispatch, useAppSelector } from "../../hooks";
import { filterCompaniesAction, loadCompaniesAction } from "../../store/action";
import shipments from '../../shipments.json';
import { getSavedCompanies } from "../../utils/utils";
import { useRef } from "react";
import { debounce } from "lodash";

function Header() {
    const { companies } = useAppSelector((state) => state);
    const dispatch = useAppDispatch();
    const searchRef = useRef<HTMLInputElement | null>(null);

    const savedData = getSavedCompanies();
    if (savedData && companies.length === 0) {
        dispatch(loadCompaniesAction(savedData));
    }

    const hanldeLoadClick = () => {
        dispatch(loadCompaniesAction(shipments));
    }

    const handleSaveClick = () => {
        localStorage.setItem('companyList', JSON.stringify(companies));
    }

    const handleSearchChange = () => {
        const word = searchRef.current?.value.toLowerCase();
        if (word?.length === 0) {
            dispatch(filterCompaniesAction(companies));
        }
                companies.forEach((company) => {
                    if (word) {
                        const filteredCompanies = companies.filter((company) => company.name.toLowerCase().startsWith(word));
                        dispatch(filterCompaniesAction(filteredCompanies));
                        console.log(word);
                    }
                })
    }

    const debounceHandleSearchChange = debounce(handleSearchChange, 300);

    return (
        <header className="header">
            <h1 className="header__title">Cargo Planner</h1>
            <div className="header__container">
                <div className='header__search'>
                    <button className='header__search-icon' type='submit'>
                        <span className="visually-hidden">Search</span>
                        <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        </svg>
                    </button>
                    <input
                        className="header__search-input"
                        type="input"
                        placeholder="Search"
                        maxLength={100}
                        autoComplete="on"
                        ref={searchRef}
                        onInput={debounceHandleSearchChange} />
                </div>
                <div className='header__buttons'>
                    <button className="header__load-button button"
                        type="button"
                        onClick={hanldeLoadClick}>
                        Load
                    </button>
                    <button
                        className="header__save-button button"
                        type="button"
                        onClick={handleSaveClick}>
                        Save
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;