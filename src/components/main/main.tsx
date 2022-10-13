import { ChangeEvent, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AppRoute } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeCompanyAction } from "../../store/action";

function Main() {
    const { companies, currentCompany } = useAppSelector((state) => state);
    const dispatch = useAppDispatch();

    const { id } = useParams();

    if (id) {
        const company = companies.filter((company) => company.id === id)[0];
        dispatch(changeCompanyAction(company));
    } else {
        const company = companies[0];
        dispatch(changeCompanyAction(company));
    }


    const name = currentCompany?.name;
    const email = currentCompany?.email;
    const boxes = currentCompany?.boxes;

    const [boxesValue, setBoxesValue] = useState(boxes);

    useEffect(() => {
        if (!boxes) {
            setBoxesValue('');
        } else {
            setBoxesValue(boxes);
        }
    }, [boxes]);

    if (!currentCompany) {
        return null;
    }

    if (!id) {
        return (
            <Navigate to={`${AppRoute.Shipments}/${currentCompany.id}`} />
        )
    }

    const getBaysNumber = () => {
        if (!boxesValue) {
            return 0;
        }
        else {
            const boxesArray = boxesValue?.split(',');

            const values = boxesArray?.map((box) => Number(box));

            const valuesSum = values?.reduce((current, next) => {
                return current + next;
            });

            if (valuesSum) {
                const baysNumber = Math.ceil(valuesSum / 10);

                if (!baysNumber) {
                    return;
                }
                return baysNumber;
            }
        }
    }

    const boxesValueChange = (e: ChangeEvent<HTMLInputElement>) => {
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
                        boxesValueChange(e);
                        getBaysNumber();
                    }}
                />
            </label>
        </section>
    )
}
export default Main;
