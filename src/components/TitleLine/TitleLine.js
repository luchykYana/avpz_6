import css from './TitleLine.module.css';

const TitleLine = () => {
    return (
        <div className={`${css.d_flex} ${css.title_line}`}>
            <div className={`${css.w_50} ${css.text_center}`}>#</div>
            <div className={`${css.w_300}`}>Критерії/Вагові коефіцієнти</div>
            <div className={`${css.w_200} ${css.text_center}`}>Експерт галузі</div>
            <div className={`${css.w_200} ${css.text_center}`}>Експерт зручності</div>
            <div className={`${css.w_200} ${css.text_center}`}>Експерт з програмування</div>
            <div className={`${css.w_200} ${css.text_center}`}>Потенційні користувачі</div>
            <div className={`${css.w_200} ${css.text_center}`}>Середнє значення</div>
        </div>
    );
};

export {TitleLine};