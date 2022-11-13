import {useSelector} from 'react-redux';

import {ContentLine, TitleLine} from '../../components';

const CriteriaPage = () => {
    const {criteria} = useSelector(state => state.textReducer);

    return (
        <div>
            <TitleLine/>

            {criteria.map(item => <ContentLine id={item.id} item={item}/>)}
        </div>
    );
};

export {CriteriaPage};