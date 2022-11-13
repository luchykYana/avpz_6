import {useSelector} from 'react-redux';

import {Diagram, ExpertsBlock, ExpertsBlockTitle, ResultTableContent, ResultTableTitle} from '../../components';

import css from './SoftwareQualityPage.module.css';

const SoftwareQualityPage = () => {
    const {experts, criteria} = useSelector(state => state.textReducer);

    return (
        <div>
            <ExpertsBlockTitle/>
            {experts.map(item => <ExpertsBlock id={item.id} item={item}/>)}

            <ResultTableTitle/>
            {criteria.map(item => <ResultTableContent id={item.id} item={item} experts={experts} criteria={criteria}/>)}

            <div className={`${css.d_flex}`}>
                <div>
                    <div className={`${css.d_flex}`}>
                        <Diagram title={"Експерти галузі"} criteria={criteria} id={0}/>
                        <Diagram title={"Експерти зручності"} criteria={criteria} id={1}/>
                    </div>

                    <div className={`${css.d_flex}`}>
                        <Diagram title={"Експерти з програмування"} criteria={criteria} id={2}/>
                        <Diagram title={"Потенційні користувачі"} criteria={criteria} id={3}/>
                    </div>
                </div>

                <div>
                    <Diagram title={"Зведені показники"} criteria={criteria} id={4}/>
                </div>
            </div>
        </div>
    );
};

export {SoftwareQualityPage};