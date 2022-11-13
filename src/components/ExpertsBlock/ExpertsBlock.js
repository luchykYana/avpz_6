import css from './ExpertsBlock.module.css';

const ExpertsBlock = ({item}) => {
    return (
        <div className={`${css.d_flex} ${css.expert_line}`}>
            <div className={`${css.w_300} ${css.text_center}`}>{item.name}</div>
            <div className={`${css.w_400} ${css.text_center}`}><input type="number" defaultValue={item.abs}/></div>
            <div className={`${css.w_400} ${css.text_center}`}>{item.vid}</div>
        </div>
    );
};

export {ExpertsBlock};