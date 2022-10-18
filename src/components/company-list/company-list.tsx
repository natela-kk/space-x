import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeCompanyAction } from "../../store/action";
import { CompanyData } from "../../types/company-data";
import cn from 'classnames';
import { AppRoute } from "../../const";

function CompanyList() {
  const dispatch = useAppDispatch();
  const { companies, currentCompany, filteredCompanies } = useAppSelector((state) => state);

  const handleClick = (companyData: CompanyData) => {
    dispatch(changeCompanyAction(companyData));
  }

  let companiesList;

  if (filteredCompanies) {
    companiesList = filteredCompanies;
  } else {
    companiesList = companies;
  }

  return (
    <section className="companies">
      <h2 className="visually-hidden">Companies list</h2>
      <ul className="companies__list">

        {companiesList.map((company) => (
          <li className={cn("companies__item", { "companies__item--active": currentCompany?.id === company.id })}
            onClick={() => { handleClick(company); }}
            key={company.id}>
            <Link className="companies__item-link" to={`${AppRoute.Shipments}/${company.id}`}>{company.name}</Link>
          </li>
        ))}

      </ul>
    </section>
  )
}

export default CompanyList;