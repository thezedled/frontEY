import { combineReducers } from 'redux';
import { detailCardReducers } from '../reducers/detailReduxCard';

export default combineReducers({
    detailCardReducers: detailCardReducers,
});
