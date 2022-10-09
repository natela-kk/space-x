import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyData } from "../../types/company-data";

type MainProps = {
    companiesData: CompanyData[];
}

function Main({ companiesData }: MainProps) {
    let companyData = companiesData[0];

    const {id} = useParams();

    if(id) {
        companyData = companiesData.filter((company) => company.id === id)[0];
    }

    const {name, email, boxes} = companyData;

    const [boxesValue, setBoxesValue] = useState(boxes);

    useEffect(() => {
        setBoxesValue(boxes);
    }, [boxes]);

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
            <h2 className='company-info__title'>{name}</h2>
            <a className="company-info__mail" href="mailto:info@companya.com">{email}</a>
            <span className="company-info__bays">Number of required cargo bays:
                <b className='company-info__bays-number'> {getBaysNumber()}</b>
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
