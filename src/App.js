import {Route, Routes} from 'react-router';

import {Layout} from './components';
import {CriteriaPage, EvaluationCriteriaPage, EvaluationsPage, FirstPage, SoftwareQualityPage} from './pages';

import css from './App.module.css';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<FirstPage/>}/>
                <Route path={'criteria'} element={<CriteriaPage/>}/>
                <Route path={'evaluation'} element={<EvaluationsPage/>}/>
                <Route path={'evaluation-criteria'} element={<EvaluationCriteriaPage/>}/>
                <Route path={'software-quality'} element={<SoftwareQualityPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};