import { ChangeEvent, useState } from "react";
import { CompanyData } from "../../types/company-data";

type MainProps = {
    companiesData: CompanyData[];
}

function Main({ companiesData }: MainProps) {
    const defaultCompany = companiesData[0];
    const [boxesValue, setBoxesValue] = useState(defaultCompany.boxes);

    const getBaysNumber = () => {
        const boxesArray = boxesValue.split(',');

        const values = boxesArray.map((box) => Number(box));

        const valuesSum = values.reduce((current, next) => {
            return current + next;
        });

        const baysNumber = Math.ceil(valuesSum / 10);

        if (!baysNumber) {
            return;
        }
        return baysNumber;
    }

    const changeBoxesValue = (e: ChangeEvent<HTMLInputElement>) => {
        setBoxesValue(e.target.value.replace(/[^\d,. ]/g, ''));
    }

    return (
        <section className="company-info">
            <h2 className='company-info__title'>{defaultCompany.name}</h2>
            <a className="company-info__mail" href="mailto:info@companya.com">{defaultCompany.email}</a>
            <span className="company-info__bays">Number of required cargo bays:
                <b className='company-info__bays-number'>{getBaysNumber()}</b>
            </span>
            <label className="company-info__boxes">
                Cargo boxes
                <input
                    className="company-info__boxes-input"
                    type="text"
                    placeholder="1, 2.2, 5, 10"
                    value={boxesValue}
                    onChange={(e) => {
                        changeBoxesValue(e);
                        getBaysNumber();
                    }}
                />
            </label>
        </section>
    )
}
export default Main;
