import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {todoActions} from '../../store/text.slice';

import css from './ContentLine2.module.css';

const {changeAverage2, changeCriteria2} = todoActions;

const ContentLine2 = ({item, userGrades}) => {
    const [average, setAverage] = useState(0);
    const [trigger, setTrigger] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const elems = document.getElementsByClassName(`${item.id}.grades`);

        let res = 0;
        for (let i of elems) {
            res += +i.value;
        }

        res += item.grades[3];

        dispatch(changeAverage2({id: item.id, average: res / 4}));
        setAverage(res/4);
    }, [trigger]);

    const changeCriteria = (e) => dispatch(changeCriteria2({id: item.id, name: e.target.id, value: e.target.value}));

    const change = (e) => {
        changeCriteria(e);
        const newItem = trigger + 1;
        setTrigger(newItem);
    }

    return (
        <div className={`${css.d_flex} ${css.content_line}`}>
            <div className={`${css.w_50} ${css.text_center}`}>{item.id}</div>
            <div className={`${css.w_300}`}>{item.title}</div>
            <div className={`${css.w_200} ${css.inputs}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[0]}
                       className={`${css.text_center} ${item.id}.grades`} onChange={change} id={`${item.id}.grades.0`}/>
            </div>
            <div className={`${css.w_200} ${css.inputs}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[1]}
                       className={`${css.text_center} ${item.id}.grades`} onChange={change} id={`${item.id}.grades.1`}/>
            </div>
            <div className={`${css.w_200} ${css.inputs}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[2]}
                       className={`${css.text_center} ${item.id}.grades`} onChange={change} id={`${item.id}.grades.2`}/>
            </div>
            <div className={`${css.w_200} ${css.inputs}`} id={`${item.id}.grades.3`}>
                {userGrades.average}
            </div>
            <div className={`${css.w_200} ${css.text_center}`}>{average.toFixed(2)}</div>

        </div>
    );
};

export {ContentLine2};