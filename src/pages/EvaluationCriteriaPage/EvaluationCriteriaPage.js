import {useSelector} from 'react-redux';

import {ContentLine3, TitleLine} from '../../components';

const EvaluationCriteriaPage = () => {
    const {criteria} = useSelector(state => state.textReducer);

    return (
        <div>
            <TitleLine/>
            {criteria.map(item => <ContentLine3 id={item.id} item={item}/>)}
        </div>
    );
};

export {EvaluationCriteriaPage};