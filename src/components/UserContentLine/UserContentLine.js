import {useDispatch} from 'react-redux';

import {todoActions} from '../../store/text.slice';
import css from './UserContentLine.module.css';

const {changeUserGrades} = todoActions;

const UserContentLine = ({item}) => {
    const dispatch = useDispatch();

    const change = () => {
        const elems = document.getElementsByClassName(`${item.id}.userGrades`);
        let res = [];

        for (let i of elems) {
            res.push(+i.value);
        }
        console.log(res);
        dispatch(changeUserGrades({id: item.id, mas: res}));
    }

    return (
        <div className={`${css.d_flex} ${css.user_content_line}`}>
            <div className={`${css.text_center} ${css.w_30}`}>{item.id}</div>

            <div className={`${css.w_60} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[0]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_60} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[1]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_60} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[2]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_60} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[3]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_60} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[4]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_60} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[5]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_60} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[6]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_60} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[7]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_60} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[8]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_70} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[9]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_70} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[10]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_70} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[11]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_70} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[12]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_70} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[13]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_70} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[14]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_70} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[15]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_70} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[16]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_70} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[17]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_70} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[18]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
            <div className={`${css.w_70} ${css.d_flex} ${css.justify_center}`}>
                <input type="number" min={1} max={10} defaultValue={item.grades[19]} className={`${css.w_40} ${item.id}.userGrades`} onChange={change}/>
            </div>
        </div>
    );
};

export {UserContentLine};