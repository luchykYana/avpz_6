import css from './ContentLine3.module.css';

const ContentLine3 = ({item}) => {
    return (
        <div className={`${css.d_flex} ${css.content_line}`}>
            <div className={`${css.w_50} ${css.text_center}`}>{item.id}</div>
            <div className={`${css.w_300}`}>{item.title}</div>
            <div className={`${css.w_200} ${css.inputs}`}>
                {item.values[0]}/{item.grades[0]}
            </div>
            <div className={`${css.w_200} ${css.inputs}`}>
                {item.values[1]}/{item.grades[1]}
            </div>
            <div className={`${css.w_200} ${css.inputs}`}>
                {item.values[2]}/{item.grades[2]}
            </div>
            <div className={`${css.w_200} ${css.inputs}`}>
                {item.values[3]}/{item.grades[3]}
            </div>
            <div className={`${css.w_200} ${css.text_center}`}>
                {item.average1}/{item.average2.toFixed(2)}
            </div>

        </div>
    );
};

export {ContentLine3};