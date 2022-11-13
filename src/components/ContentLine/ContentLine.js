import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';

import {todoActions} from '../../store/text.slice';
import css from './ContentLine.module.css';

const {changeCriteria1, changeAverage1} = todoActions;

const ContentLine = ({item}) => {
    const [average, setAverage] = useState(0);
    const [trigger, setTrigger] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        const elems = document.getElementsByClassName(`${item.id}.value`);
        let res = 0;

        for (let i of elems) {
            res += +i.value;
        }

        dispatch(changeAverage1({id: item.id, average: res / 4}));
        setAverage(res / 4);
    }, [trigger]);

    const changeCriteria = (e) => dispatch(changeCriteria1({id: item.id, name: e.target.id, value: e.target.value}));

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
                <input type="number" min={1} max={10} defaultValue={item.values[0]}
                       className={`${css.text_center} ${item.id}.value`} onChange={change} id={`${item.id}.value.0`}/>
            </div>
            <div className={`${css.w_200} ${css.inputs}`}>
                <input type="number" min={1} max={10} defaultValue={item.values[1]}
                       className={`${css.text_center} ${item.id}.value`} onChange={change} id={`${item.id}.value.1`}/>
            </div>
            <div className={`${css.w_200} ${css.inputs}`}>
                <input type="number" min={1} max={10} defaultValue={item.values[2]}
                       className={`${css.text_center} ${item.id}.value`} onChange={change} id={`${item.id}.value.2`}/>
            </div>
            <div className={`${css.w_200} ${css.inputs}`}>
                <input type="number" min={1} max={10} defaultValue={item.values[3]}
                       className={`${css.text_center} ${item.id}.value`} onChange={change} id={`${item.id}.value.3`}/>
            </div>
            <div className={`${css.w_200} ${css.text_center}`}>{average}</div>
        </div>
    );
};

export {ContentLine};