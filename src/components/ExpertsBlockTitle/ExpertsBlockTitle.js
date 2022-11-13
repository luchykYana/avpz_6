import css from './ExpertBlockTitle.module.css';

const ExpertsBlockTitle = () => {
    return (
        <div className={`${css.d_flex} ${css.title_line}`}>
            <div className={`${css.w_300} ${css.text_center}`}>Типи експертів</div>
            <div className={`${css.w_400} ${css.text_center}`}>Абсолютний коефіцієнт вагомості</div>
            <div className={`${css.w_400} ${css.text_center}`}>Відносний коефіцієнт вагомості</div>
        </div>
    );
};

export {ExpertsBlockTitle};