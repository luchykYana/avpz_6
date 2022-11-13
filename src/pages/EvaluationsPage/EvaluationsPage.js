import {useSelector} from 'react-redux';

import {ContentLine2, TitleLine, UserContentLine, UserTitleLine} from '../../components';

const EvaluationsPage = () => {
    const {userGrades, criteria} = useSelector(state => state.textReducer);

    return (
        <div>
            <UserTitleLine/>
            {userGrades.map(item => <UserContentLine id={item.id} item={item}/>)}
            <TitleLine/>
            {criteria.map(item => <ContentLine2 id={item.id} item={item} userGrades={userGrades[item.id-1]}/>)}
        </div>
    );
};

export {EvaluationsPage};