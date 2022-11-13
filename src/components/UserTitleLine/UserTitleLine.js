import css from './UserTitleLine.module.css';

const UserTitleLine = () => {
    return (
        <div className={`${css.d_flex} ${css.user_title_line}`}>
            <div className={`${css.w_30} ${css.text_center}`}>#</div>
            <div className={`${css.w_60} ${css.text_center}`}>User 1</div>
            <div className={`${css.w_60} ${css.text_center}`}>User 2</div>
            <div className={`${css.w_60} ${css.text_center}`}>User 3</div>
            <div className={`${css.w_60} ${css.text_center}`}>User 4</div>
            <div className={`${css.w_60} ${css.text_center}`}>User 5</div>
            <div className={`${css.w_60} ${css.text_center}`}>User 6</div>
            <div className={`${css.w_60} ${css.text_center}`}>User 7</div>
            <div className={`${css.w_60} ${css.text_center}`}>User 8</div>
            <div className={`${css.w_60} ${css.text_center}`}>User 9</div>
            <div className={`${css.w_70} ${css.text_center}`}>User 10</div>
            <div className={`${css.w_70} ${css.text_center}`}>User 11</div>
            <div className={`${css.w_70} ${css.text_center}`}>User 12</div>
            <div className={`${css.w_70} ${css.text_center}`}>User 13</div>
            <div className={`${css.w_70} ${css.text_center}`}>User 14</div>
            <div className={`${css.w_70} ${css.text_center}`}>User 15</div>
            <div className={`${css.w_70} ${css.text_center}`}>User 16</div>
            <div className={`${css.w_70} ${css.text_center}`}>User 17</div>
            <div className={`${css.w_70} ${css.text_center}`}>User 18</div>
            <div className={`${css.w_70} ${css.text_center}`}>User 19</div>
            <div className={`${css.w_70} ${css.text_center}`}>User 20</div>
        </div>
    );
};

export {UserTitleLine};