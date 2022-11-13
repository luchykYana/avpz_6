import css from './ResultTableTitle.module.css';

const ResultTableTitle = () => {
    return (
        <div className={`${css.d_flex} ${css.title_line}`}>
            <div className={`${css.text_center} ${css.w_40}`}>#</div>
            <div className={`${css.text_center} ${css.w_300}`}>Критерії оцінювання якості ПЗ</div>
            <div className={`${css.text_center} ${css.w_200}`}>Оцінки експертів галузі</div>
            <div className={`${css.text_center} ${css.w_200}`}>Оцінки експертів зручності</div>
            <div className={`${css.text_center} ${css.w_200}`}>Оцінки еспертів з програмування</div>
            <div className={`${css.text_center} ${css.w_200}`}>Оцінки користувачів</div>
            <div className={`${css.text_center} ${css.w_200}`}>Усереднені значення показників</div>
            <div className={`${css.text_center} ${css.w_200}`}>Усереднені значення оцінок</div>
        </div>
    );
};

export {ResultTableTitle};