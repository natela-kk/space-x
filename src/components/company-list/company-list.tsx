import { Link } from "react-router-dom";
import { CompanyData } from "../../types/company-data";

type CompanyListProps = {
  companiesData: CompanyData[];
}

function CompanyList({companiesData}: CompanyListProps) {
    return (
        <section className="companies">
  <h2 className="visually-hidden">Companies list</h2>
  <ul className="companies__list">

    {companiesData.map((company) => (
      <li className="companies__item" key={company.id}>
      <Link className="companies__item-link" to={company.id}>{company.name}</Link>
    </li>
    ))}

  </ul>
</section>
    )
}

export default CompanyList;