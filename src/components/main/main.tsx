import { ChangeEvent, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AppRoute } from "../../const";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeCompanyAction, updateCompanyAction } from "../../store/action";

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
        return (
            <div className="company_emty">
                <p>Click the “Load” button to load the shipments.</p>
                <p>Click the “Save” button to save the existing state of shipments.</p>
            </div>
        );
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
        const value = e.target.value.replace(/[^\d,. ]/g, '');
        setBoxesValue(value);        
        const updatedInfo = { ...currentCompany, boxes: value };
        dispatch(updateCompanyAction(updatedInfo));
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
