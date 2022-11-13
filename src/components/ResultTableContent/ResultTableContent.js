import css from './ResultTableContent.module.css';

const ResultTableContent = ({item, experts, criteria}) => {
    const formula = (item) => {
        return (item.values[0] * item.grades[0] * experts[0].vid + item.values[1] * item.grades[1] * experts[1].vid +
                item.values[2] * item.grades[2] * experts[2].vid + item.values[3] * item.grades[3] * experts[3].vid) /
            (experts[0].vid + experts[1].vid + experts[2].vid + experts[3].vid);
    }

    const formula2 = (id) => {
        let sum1 = 0, sum2 = 0;
        for (const elem of criteria) {
            sum1 += elem.values[id] * elem.grades[id];
            sum2 += elem.values[id];
        }

        return sum1 / sum2;
    }

    const formula3 = () => {
        let sum1 = 0, sum2 = 0;
        for (const elem of criteria) {
            sum1 += formula(elem);
            sum2 += elem.average1;
        }

        return sum1 / sum2;
    }

    const formula4 = () => {
        let sum = 0;
        for (const elem of criteria) {
            sum += formula(elem) / elem.average1;
        }

        return sum / 10;
    }

    const formula5 = () => (formula2(0) + formula2(1) + formula2(2) + formula2(3)) / 4;

    const formula6 = () => {
        return (formula2(0) * experts[0].vid + formula2(1) * experts[1].vid + formula2(2) * experts[2].vid + formula2(3) * experts[3].vid) /
            (experts[0].vid + experts[1].vid + experts[2].vid + experts[3].vid);
    }

    return (
        <div>
            <div className={`${css.d_flex} ${css.content_line}`}>
                <div className={`${css.text_center} ${css.w_40}`}>{item.id}</div>
                <div className={`${css.text_center} ${css.w_300}`}>{item.title}</div>
                <div className={`${css.text_center} ${css.w_200}`}>{item.values[0] * item.grades[0]}</div>
                <div className={`${css.text_center} ${css.w_200}`}>{item.values[1] * item.grades[1]}</div>
                <div className={`${css.text_center} ${css.w_200}`}>{item.values[2] * item.grades[2]}</div>
                <div className={`${css.text_center} ${css.w_200}`}>{(item.values[3] * item.grades[3]).toFixed(2)}</div>
                <div className={`${css.text_center} ${css.w_200}`}>{formula(item).toFixed(2)}</div>
                <div className={`${css.text_center} ${css.w_200}`}>{(formula(item) / item.average1).toFixed(2)}</div>
            </div>

            {item.id === 10 && <div>
                <div className={`${css.d_flex} ${css.content_line}`}>
                    <div className={`${css.text_center} ${css.w_40}`}></div>
                    <div className={`${css.text_center} ${css.w_300}`}>Усереднені оцінки</div>
                    <div className={`${css.text_center} ${css.w_200}`}>{formula2(0).toFixed(2)}</div>
                    <div className={`${css.text_center} ${css.w_200}`}>{formula2(1).toFixed(2)}</div>
                    <div className={`${css.text_center} ${css.w_200}`}>{formula2(2).toFixed(2)}</div>
                    <div className={`${css.text_center} ${css.w_200}`}>{formula2(3).toFixed(2)}</div>
                    <div className={`${css.text_center} ${css.w_200}`}>{formula3().toFixed(2)}</div>
                    <div className={`${css.text_center} ${css.w_200}`}>{formula4().toFixed(2)}</div>
                </div>
                <div className={`${css.d_flex} ${css.content_line}`}>
                    <div className={`${css.text_center} ${css.w_40}`}></div>
                    <div className={`${css.text_center} ${css.w_300}`}>Оцінки з врахуванням вагомості експертів</div>
                    <div className={`${css.text_center} ${css.w_200}`}>{(formula2(0) * experts[0].vid).toFixed(2)}</div>
                    <div className={`${css.text_center} ${css.w_200}`}>{(formula2(1) * experts[1].vid).toFixed(2)}</div>
                    <div className={`${css.text_center} ${css.w_200}`}>{(formula2(2) * experts[2].vid).toFixed(2)}</div>
                    <div className={`${css.text_center} ${css.w_200}`}>{(formula2(3) * experts[3].vid).toFixed(2)}</div>
                    <div className={`${css.text_center} ${css.w_200}`}>{formula5().toFixed(2)}</div>
                    <div className={`${css.text_center} ${css.w_200}`}>{formula6().toFixed(2)}</div>
                </div>
            </div>
            }
        </div>
    );
};

export {ResultTableContent};